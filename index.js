window.onload =function() {

   const enAlphabetLength =26;
   const asciiA = 65;
   let originalText = "";
   let offset = 0;
   let resultingText = "";

   document.getElementById("cipher-button").onclick = function() {
     offset = document.getElementById("offset-digit").value;
     originalText = document.getElementById("original-text").value;
   document.getElementById("resulting-text").innerHTML = (cipher());
   };

   document.getElementById("decipher-button").onclick = function() {
     offset = document.getElementById("offset-digit").value;
     originalText = document.getElementById("original-text").value;
   document.getElementById("resulting-text").innerHTML = (decipher());
   };

  function cipher() {

    for ( charIndex = 0; charIndex < originalText.length; charIndex++) {
      let originalAsciiCode = originalText.charCodeAt(charIndex);
      let cipheredAsciiCode = (originalAsciiCode - asciiA + offset)
      % enAlphabetLength + asciiA;
      let cipheredCharacter = String.fromCharCode (cipheredAsciiCode);
      resultingText = resultingText + cipheredCharacter;


    }
    return resultingText
  }

  function decipher() {

    for ( charIndex = 0; charIndex < originalText.length; charIndex++) {
      let originalAsciiCode = originalText.charCodeAt(charIndex);
      let cipheredAsciiCode = (originalAsciiCode - asciiA - offset)
      % enAlphabetLength + asciiA;
      let cipheredCharacter = String.fromCharCode (cipheredAsciiCode);
      resultingText = resultingText + cipheredCharacter;


    }
    return resultingText
  }


};
