window.onload =function() {

   const enAlphabetLength =26;
   const asciiA = 65;
   let cipheredText = "";
   let offset = 2;
   let originalText = "";

   $("#cipher-button").click(function() {
     originalText = $("#original-text").val();
  $("#ciphered-text").text( originalText );
   });

  function cipher() {

    for ( charIndex = 0; charIndex < originalText.length; charIndex++) {
      let originalAsciiCode = originalText.charCodeAt(charIndex);
      let cipheredAsciiCode = (originalAsciiCode - asciiA + offset)
      % enAlphabetLength + asciiA;
      let cipheredCharacter = String.fromCharCode (cipheredAsciiCode);
      cipheredText = cipheredText + cipheredCharacter;


    }
    return cipheredText
  }



};
