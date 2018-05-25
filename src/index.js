window.onload =function() {

   const enAlphabetLength =26;
   const asciiA = 65;
   let originalText = "";
   let offset = 0;
   let resultingText = "";

   $("#cipher-button").click(function() {
     offset = $("#offset-digit").val();
     originalText = $("#original-text").val();
     $("#resulting-text").text(cipher());
   });

   $("#decipher-button").click(function() {
     offset = $("#offset-digit").val();
     originalText = $("#original-text").val();
     $("#resulting-text").text(decipher());
   });

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
