import concurrently from 'concurrently';
import fs from 'fs-extra';
import path from 'path';
import childProcess from 'child_process';
import prompts from 'prompts';
import commandExists from 'command-exists';

export type PromptsConfig = {
  question: string;
}

const sslDir = path.resolve(__dirname, '..', '..', '.ssl');
const certFile = path.join(sslDir, 'cert.pem');
const keyFile = path.join(sslDir, 'key.pem');

const getFirstChar = (value: string) => {
  if (value.length === 0) {
    return '';
  }
  return value.substr(0, 1).toLowerCase();
}

const confirm = async (config: PromptsConfig): Promise<'y' | string> => {
  const response = (await prompts({
    type: 'text',
    name: 'confirmation',
    message: `${config.question} (Y/n)`,
    validate: input => (getFirstChar(input) === 'y' || getFirstChar(input) === 'n') ? true : false
  })).confirmation as string;
  return response.toLowerCase().substr(0, 1);
}

const runExternalCommand = async (command: string) => {
  return new Promise<boolean>(resolve => {
    const spawnedThread = childProcess.spawn(command, {
      shell: true,
      stdio: [ 0, 'pipe', fs.openSync("err.out", "w") ],
    });
    spawnedThread.stderr?.pipe(process.stderr); // Should error be propagated to the parent process?
    spawnedThread.stdout?.pipe(process.stdout);
    spawnedThread.on('close', (code) => {
      resolve(code === 0);
    });
  });
}

const isDependencyAvailable = async (command: string): Promise<boolean> => {
  return new Promise<boolean>(resolve => {
    commandExists(command).then(evaluation => resolve(!!evaluation)).catch(_ => resolve(false));
  });
}

const installHomebrew = async () => {
  const installerCommand = '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"';
  return new Promise<boolean>(resolve => {
    runExternalCommand(installerCommand).then(isSuccess => {
      if (!isSuccess) {
        console.error('An error ocurred while attempting to install Homebrew');
        console.log('To install it manually, run', installerCommand);
        process.exit(1);
      }
      resolve(isSuccess);
    });
  });
}

const checkDependencies = async () => {
  const compatibleOperativeSystems = ['darwin', 'linux'];

  if (await confirm({ question: 'Proceed to create the SSL files?' }) === 'y') {
    if (!(await isDependencyAvailable('mkcert'))) {
      if (!compatibleOperativeSystems.includes(process.platform)) {
        console.log(`mkcert is not installed and your OS (${process.platform}) seems to be incompatible. Exiting...`);
        process.exit(1);
      }
      if (await confirm({ question: 'mkcert is not installed. Proceed to install?' })) {
        if (!(await isDependencyAvailable('brew'))) {
          if (await confirm({ question: 'To install mkcert, you need to install Homebrew. Proceed to install it?' })) {
            await installHomebrew();
          }
        }
        if (await isDependencyAvailable('brew')) {
          await runExternalCommand('brew update');
          await runExternalCommand('brew install mkcert nss');
          await runExternalCommand('mkcert -install');
        }
      } else {
        console.log('Dependencies installation rejected. Exiting...');
        process.exit(1);
      }
    }
  } else {
    console.log('SSL files creation rejected. Exiting...');
    process.exit(1);
  }
}

const checkSSLFiles = async () => {
  const sslDirExists = fs.pathExistsSync(sslDir);

  if (!sslDirExists) {
    console.warn('[WARNING]: .ssl directory not found in the project root.');
    if (await confirm({ question: 'Proceed to create the .ssl directory?' }) === 'y') {
      fs.mkdirSync(sslDir);
    } else {
      console.log('.ssl directory creation rejected. Exiting...');
      process.exit(1);
    }
  }

  const certExists = fs.existsSync(certFile);
  const keyExists = fs.existsSync(keyFile);

  if (certExists) {
    const newFile = certFile + '.old';
    fs.moveSync(certFile, newFile);
    console.warn(
      '[WARNING]: Partial configuration detected.',
      `Moving ${certFile} to ${newFile}`
    );
  }
  if (keyExists) {
    const newFile = keyFile + '.old';
    fs.moveSync(keyFile, keyFile + '.old');
    console.warn(
      '[WARNING]: Partial configuration detected.',
      `Moving ${keyFile} to ${newFile}`
    );
  }
  if (!certExists && !keyExists) {
    console.warn('[WARNING]: SSL files not found');
  }
  return certExists && keyExists;
}

const createSSLFiles = async () => {
  await runExternalCommand(`mkcert -key-file ${keyFile} -cert-file ${certFile} "localhost"`);
  const mkcertOutputFile = path.resolve(sslDir, '..', 'err.out');
  if (fs.existsSync(mkcertOutputFile)) {
    fs.rmSync(mkcertOutputFile);
  }
}

const checkConfiguration = async () => {
  if (!(await checkSSLFiles())) {
    await checkDependencies();
    await createSSLFiles();
  }
  return true;
}

const executeConcurrently = async () => {
  const commands = [
    'ssl-proxy',
    'dev',
  ]
  await concurrently(commands.map(comm => 'yarn ' + comm), {
    killOthers: Array<'success' | 'failure'>(commands.length).fill('failure'),
    raw: true, // To avoid the concurrently stepper print
  });
}

(async () => {
  await checkConfiguration();
  await executeConcurrently();
})();
