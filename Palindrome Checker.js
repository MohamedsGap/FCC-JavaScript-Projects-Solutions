
// #PROBLEM: 
/*

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

*/
// #SOLUTION:


function palindrome(str) {
// make all letters lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z|1-9]/g, "");

  // if the length of the string is 0 then it is a palindrome
  if (str.length === 0){
    return true;
  }
  // if the first letter and the last letter of the string
  // do not equal each other, then it is not a palindrome
  if (str[0] !== str[str.length-1]){
    return false;
  }
  //Else, run the function without the first and last characters.
  else{
    return palindrome(str.slice(1,str.length - 1));
  }
} 

///////////////////////////////////////////// ANOTHER SOLUTION //////////////////////////////////////////////
/*

function palindrome(str) {
      return str.replace(/[\W_]/g, '').toLowerCase() ===
             str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
    }

*/

palindrome("eye");