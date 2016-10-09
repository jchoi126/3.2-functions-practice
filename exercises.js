/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
// ---------------------

function max(num1,num2){
    "use strict";

    var large ;

    if (num1 > num2) {
      large = num1;
    } else {
      large = num2;
    }
    return large;
}

var num1 = 15;
var num2 = 10;

// console.log(max(num1,num2));
console.assert(max(num1,num2) == num1);


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
//nested the if statements in order to get the correct number our!

var num1 = 3;
var num2 = 2;
var num3 = 1;
var num4 = 4

function maxOfThree(num1, num2, num3){
      "use strict";
      var large;
      var larger;

      if (num1 > num2) {
        large = num1;
      } else {
        large = num2;
      }

      if (large > num3){
      return large;
      } else {
      return num3;
      }
  }

  // console.log(maxOfThree(num1,num2,num3));
  console.assert(maxOfThree(num1,num2,num3) == num1);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
// false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    var vowelTruthy;
    // var char = a;

    if (char == 'a' ||
    char == 'e'||
    char == 'i' ||
    char == 'o' ||
    char == 'u'){
      vowelTruthy = true;
    } else {
      vowelTruthy = false;
    }
    return vowelTruthy;
}
// console.log(isVowel('a'));
// console.log(isVowel('b'));
console.assert(isVowel('a') == true)

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
  var stuff = '';

  for(var i = 0; i < phrase.length; i++){
      if (phrase[i] == 'b' ||
          phrase[i] == 'c' ||
          phrase[i] == 'd' ||
          phrase[i] == 'f' ||
          phrase[i] == 'g' ||
          phrase[i] == 'h' ||
          phrase[i] == 'j' ||
          phrase[i] == 'k' ||
          phrase[i] == 'l' ||
          phrase[i] == 'm' ||
          phrase[i] == 'n' ||
          phrase[i] == 'p' ||
          phrase[i] == 'q' ||
          phrase[i] == 'r' ||
          phrase[i] == 'w' ||
          phrase[i] == 'x' ||
          phrase[i] == 't' ||
          phrase[i] == 'v' ||
          phrase[i] == 'y' ||
          phrase[i] == 'z'){
          stuff = stuff + phrase[i] + 'o' + phrase[i];
    }
    else {
      stuff = stuff + phrase[i];
    }
} return stuff;
}

// console.log(rovarspraket('holla at yo boyee'));
console.assert(rovarspraket('holla') == 'hoholollola')

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers
// in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4])
// should return 24.
// ---------------------

function sum(num1, num2, num3, num4){
    "use strict";
    var total = num1 + num2 + num3 + num4;
    return total;
}
// console.log(sum(num1, num2, num3, num4));
console.assert(sum(num1, num2, num3, num4) == 10);

function multiply(num1, num2, num3, num4){
    "use strict";
    var total = num1 * num2 * num3 * num4;
    return total;
}
// console.log(multiply(num1, num2, num3, num4));
console.assert(multiply(num1, num2, num3, num4) == 24);


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar")
// should return the string "ratset gaj".
// ---------------------
// got tips from here

function reverse(esrever){
    "use strict";
  var backwards = '';
  for (var i = esrever.length - 1; i >= 0; i--)
    backwards += esrever[i];
  return backwards;
}
console.log(reverse('tacocat'));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
// got my thoughts from here https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c#.502plwo8p

function findLongestWord(word){
    "use strict";
    var split = word.split(' ')
    var longest = ''

    for(var i = 0; i < split.length ; i++){
      if(split[i].length > longest){
        longest = split[i].length;
      }
    }
    return longest
}

// console.log(findLongestWord('holla at yo boyee, but seriously though.'));

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array
// of words that are longer than i.
// ---------------------

function filterLongWords(words, variable){
    "use strict";
    var split = words.split(' ');
    var print = '';
    for(var i = 0; i < split.length ; i++){
      if(split[i].length > variable){
        print = print + ' ' + split[i];
      }
    }
    return print;
}
console.log(filterLongWords('holla at yo boyee, but seriously though.', 3));

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained
// in it. Represent the frequency listing as a Javascript object. Try it with something like
// charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var print = {};
    for(var i = 0; i < string.length ; i++){
      var char = string[i];
      if(print[char]){
        print[char] += 1;
      } else {
        print[char] = 1;
      }
    }
    return print;
}
console.log(charFreq('aaaaabbbbbddndndndndndn'));
