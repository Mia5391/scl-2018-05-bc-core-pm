window.cipher = {
  encode: (originalText, offsetInput) => {
//Defining alphabet length and ASCII codes for Upper and Lower case as constants
    const enAlphabetLength =26;
    const asciiA = 65;
    const asciiLowerCaseA = 97;
    let resultingText = "";
//Parsing offset input to ensure it is a number
    let offset = parseInt(offsetInput);

    for ( charIndex = 0; charIndex < originalText.length; charIndex++) {
      let originalAsciiCode = originalText.charCodeAt(charIndex);
//Using ternary operator to figure out which ASCII starting position to use, depending on wether it is upper or lower case
      let startingAsciiPosition = originalAsciiCode >= 97 ? asciiLowerCaseA : asciiA;
      let cipheredAsciiCode = (originalAsciiCode - startingAsciiPosition + offset) % enAlphabetLength + startingAsciiPosition;
      let cipheredCharacter = String.fromCharCode (cipheredAsciiCode);
      resultingText += cipheredCharacter;

    }
    return resultingText

  },
  decode:  (originalText, offsetInput) => {
//Same comments as above apply
    const enAlphabetLength =26;
    const asciiA = 65;
    let resultingText = "";
    let offset = parseInt(offsetInput);

    for ( charIndex = 0; charIndex < originalText.length; charIndex++) {
      let originalAsciiCode = originalText.charCodeAt(charIndex);
      let startingAsciiPosition = originalAsciiCode >= 97 ? asciiLowerCaseA : asciiA;
      let decipheredAsciiCode = Math.abs(originalAsciiCode - startingAsciiPosition - offset) % enAlphabetLength + startingAsciiPosition;
      let decipheredCharacter = String.fromCharCode (decipheredAsciiCode);
      resultingText += decipheredCharacter;
    }
    return resultingText;
  }
}
