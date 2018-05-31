window.cipher = {
  encode: (offsetInput, originalText) => {
    const enAlphabetLength =26;
    const asciiA = 65;
    const asciiLowerCaseA = 97;
    let resultingText = "";
    let offset = parseInt(offsetInput);

    for ( charIndex = 0; charIndex < originalText.length; charIndex++) {
      let originalAsciiCode = originalText.charCodeAt(charIndex);
      let startingAsciiPosition = originalAsciiCode >= 97 ? asciiLowerCaseA : asciiA;
      let cipheredAsciiCode = (originalAsciiCode - startingAsciiPosition + offset) % enAlphabetLength + startingAsciiPosition;
      let cipheredCharacter = String.fromCharCode (cipheredAsciiCode);
      resultingText += cipheredCharacter;

    }
    return resultingText

  },
  decode:  (offsetInput, originalText) => {
    const enAlphabetLength =26;
    const asciiA = 65;
    let resultingText = "";
    let offset = parseInt(offsetInput);

    for ( charIndex = 0; charIndex < originalText.length; charIndex++) {
      let originalAsciiCode = originalText.charCodeAt(charIndex);
      let startingAsciiPosition = originalAsciiCode >= 97 ? asciiLowerCaseA : asciiA;
      let decipheredAsciiCode = (originalAsciiCode + startingAsciiPosition - offset) % enAlphabetLength + startingAsciiPosition;
      let decipheredCharacter = String.fromCharCode (decipheredAsciiCode);
      resultingText += decipheredCharacter;
    }
    return resultingText;
  }
}
