window.onload =function() {

   let originalText = "";
   let offsetInput = "";


   document.getElementById("cipher-button").onclick = function() {
     offsetInput = document.getElementById("offset-digit").value;
     if (isInteger(offsetInput)) {
       originalText = document.getElementById("original-text").value;
       document.getElementById("resulting-text").innerHTML = (cipher.encode(offsetInput, originalText));
     } else {
       document.getElementById("resulting-text").innerHTML = "Error";
     }
   };

   document.getElementById("decipher-button").onclick = function() {
     offsetInput = document.getElementById("offset-digit").value;
     if (isInteger(offsetInput)) {
       originalText = document.getElementById("original-text").value;
       document.getElementById("resulting-text").innerHTML = (cipher.decode(offsetInput, originalText));
     } else {
       document.getElementById("resulting-text").innerHTML = "Error";
     }
   };

   function isInteger(offset){
     let inputIsANumber = parseInt(offsetInput) != NaN;
     let inputIsAnInteger = offset % 1 === 0;
     return inputIsANumber && inputIsAnInteger;
   }

};
