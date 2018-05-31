window.cipher = {
  encode: (offsetInput, originalText) => {
    const enAlphabetLength =26;
    const asciiA = 65;
    let resultingText = "";
    let offset = parseInt(offsetInput);

    for ( charIndex = 0; charIndex < originalText.length; charIndex++) {
      let originalAsciiCode = originalText.charCodeAt(charIndex);
      let cipheredAsciiCode = (originalAsciiCode - asciiA + offset) % enAlphabetLength + asciiA;
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
      let decipheredAsciiCode = (originalAsciiCode + asciiA - offset) % enAlphabetLength + asciiA;
      let decipheredCharacter = String.fromCharCode (decipheredAsciiCode);
      resultingText += decipheredCharacter;
    }
    return resultingText
  }
}
