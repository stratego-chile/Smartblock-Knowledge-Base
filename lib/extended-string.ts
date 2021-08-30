export class ExtendedString {

  private currentValue!: string | undefined;

  constructor (currentValue?: string) {
    this.currentValue = currentValue;
  }

  public surroundWith (usingString: string): string {
    return ExtendedString.surroundText(this.currentValue ?? '', usingString);
  }

  public static surroundText (contentToBeSurrounded: string, surrounder: string): string {
    return surrounder + contentToBeSurrounded + surrounder;
  }
}
