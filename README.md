
#Caesar Cipher
================
A simple webpage for those who want to hide a surprise party message, reveal a secret message from a loved one or simply play detective.

It works by having the user enter some text, pick an offset and receive the coded message, or for those who have received one: enter text, enter offset and receive the decoded message.

#How I built it:
------------------

Step 1: Organising tasks in Trello, with some time estimations.
Step 2: Program flow diagram and a basic outline of the interface.

![alt text](Desktop/diagram.png "Program flow and basic UI design")


Step 3: Following the flow, I assigned the ASCII code for A and the alphabet length as constants, and the rest of the variables as local, with a scope limited to the two functions of the Cipher object.

As the offset depended on user input, I allowed for two error cases: input being a letter, and not an integer. I added a function to check that it is an integer in both functions, and also used the Math absolute number function in the decode to ensure that the offset was not a negative number (as this would have cause the offset to be added instead of subtracted, thereby causing the decode to malfunction. )

Then, I substituted the variables in the cipher formula and managed to get both functions to work for upper case letters, and only the encode for lower case.


#Formatting
-------------------
In terms of formatting, I made sure to add the meta viewport to allow for changing window sizes, as well as use Google fonts for a uniform experience.
