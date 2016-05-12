// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
console.log('Question 1');
function minumum(a , b){
  if(a < b){
    c = a;
  }
  else{
    c = b;
  }
}
console.log(minumum());

// 2. Create a new function called minimum3() to find the smallest of three numbers
console.log('Question 2');
function minimum3(numArray) {
	var lowestNum = numArray[0];
	for (i = 0; i < numArray.length; i++) {
	if (numArray[i] < lowestNum) {
		lowestNum = numArray[i];
    	}
}
return lowestNum;
}
minimum3([12, 202, 555]);

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
console.log('Question 3');
var add = [1, 2, 3, 4].reduce(sum, 0); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
function sum(a, b) {
  return a + b;
}
console.log(add);

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
console.log('Question 4');
function multiply([1, 2, 3, 4]).reduce(multiply, 0); {
  return a * b;
});
console.log(multiply);

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
console.log('Question 5');
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];
function filterSixPlus (array) {
  for(var i = 0; i < array.length; i++) {
    if (array[i].length <= 6) {
      delete (array[i]);
      console.log(array);
    }
  }
}
filterSixPlus(words);
// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.
console.log('Question 6');
var user = prompt("What is the temperature in Celsius?");
function convert(temp){
	return ((temp * 1.8) + 32);
}
convert(parseFloat(user));

// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
console.log('Question 8');
function countBs(str) {
  var count = 0;
  for(var i = 0; i < str.length; i++) {
    if(/[B]/.test(str.charAt(i))) count++;
  }
  return count;
}
countBs("BrrrrrBBBBBBBbbbbbbbbRRRRBBBB");

// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

// 10. Declare a function called ohZero that replaces all of the o's in a string with 0's.

// 11. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

// 12. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

// 13. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
