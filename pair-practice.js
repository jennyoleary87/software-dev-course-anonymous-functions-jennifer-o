/*
04/14/25

    INSTRUCTIONS

    Practice pair programming! 
    
    Reminder of driver/navigator format:
    Person A drives (types), Person B navigates (directs the problem-solving).
    
    Ideally you should switch roles at some point so both people 
    get to experience both roles - this is easiest in a remote setting if
    you use an online tool like Replit.com where you can invite others to 
    edit the same file but it still formats it as code and can be run in 
    a console (which you can't do in a Google doc!)

    Ultimately you will write and test two functions:
        1. Create a helper function that accepts a string and returns 
        the string in reverse.
        2. Your primary function should accept an array of strings. 
        For each word in the array, you should print something like, 
        "The word 'tacocat' is a palindrome!" 
           or 
        "The word 'dated' is NOT a palindrome."
        Make use of your first function. 
        
        You can choose to use for loops, for/of loops, or even .forEach() 
        in your second function!

    Pseudocode your logic first, then write actual code.

    You should test the first function with single strings before moving 
    on to the second.

    Here is some sample data for testing:
    ["moon", "mom", "tacocat", "adobo", "agog", "kayak", "bikini", "banana", "level", "garage", "deified", "angora", "radar", "rotator", "dated", "solos", "tenet"]

*/

/*
PSEUDOCODE
function helperFunction 
declare array of strings inputString

loop and revers using helper function
for each word, print reverse of input string
for palindromes, print `${inputString}' is a palindrome!`
else, print `${inputString} is not a palindrome`

*/

let helperReverse = function (str) {
    return str.split("").reverse().join("");
}

let palindromeString = function (str) {
    if (str === helperReverse(str)) {
        console.log(`The word ${str} is a palindrome!`);
    } else {
        console.log(`The word ${str} is not a palindrome!`);
    }
    return (str);
}

palindromeString("tacocat");
palindromeString("banana");
palindromeString("radar");
palindromeString("moon");

// console.log(palindromeString("tacocat"));
