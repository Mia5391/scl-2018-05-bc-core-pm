window.onload =function() {

   const enAlphabetLength =26;
   const asciiA = 65;
   let cipheredText = "";
   let offset = 0;
   let originalText = "";

   $("#cipher-button").click(function() {
     offset = $("#offset-digit").val();
     originalText = $("#original-text").val();
  $("#ciphered-text").text(cipher());
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
