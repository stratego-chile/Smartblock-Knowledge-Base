import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import BasePathLink from '@components/base-path-link';
import { FC, useState, useEffect } from 'react';
import { imageRefs } from '@helpers/image-refs';
import useWindowDimensions from '@hooks/useWindowDimensions';

const AppNavBar: FC<Record<string, never>> = () => {

  const windowDimensions = useWindowDimensions();
  const [brandImage, setBrandImage] = useState<string>();

  useEffect(() => {
    // Assign a wide or a narrow image according to the window width
    const calculatedBrandImage = windowDimensions.width && windowDimensions.width >= 992
      ? imageRefs.smartblockLogo.src
      : imageRefs.smartblockIcon.src;
    if (typeof calculatedBrandImage === 'string') {
      setBrandImage(calculatedBrandImage);
    } else {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(calculatedBrandImage);
      fileReader.onloadend = () => {
        const dataURI = fileReader.result;
        if (typeof dataURI === 'string') {
          console.log(
            'Image dataURI obtainer. Raw data:',
            dataURI.substr(dataURI.indexOf(', ') + 1)
          );
          setBrandImage(dataURI);
        }
      }
    }
  }, [windowDimensions]);

  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <BasePathLink href="/" passHref>
        <Navbar.Brand>
          <Image
            src={brandImage}
            alt="Smartblock"
            height="45" />
        </Navbar.Brand>
      </BasePathLink>
      <Nav.Item className='text-center text-lg-start'>
        <h5 className='d-inline my-0'>
          <span className='me-2 me-lg-3 d-none d-lg-inline'>|</span>
          Knowledge Base
        </h5>
      </Nav.Item>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default AppNavBar;
