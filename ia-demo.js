/*
04/14/25
IA Demo
*/

/*
    INSTRUCTIONS
    Your birthday is coming up, and you have a few relatives
    who always give you cash (including one uncle who is as
    rich as Croesus but doesn't always remember your birthday). 
    You're not sure how much total cash you'll get yet, but
    you're already thinking about how you'll spend it!
        - If you get at least $75, you will buy a nice new laptop 
          bag for study sessions with your classmates at local 
          libraries and coffee shops. Very practical.
        - If you get at least $125, you're going to buy a decent
          27" monitor instead for your desk at home. What an
          improvement that will be!
        - If Uncle George comes through, you're likely to get 
          a lot more than that and can afford both! Whatever 
          amount you have leftover (beyond $200) will go in 
          savings for now.
        - If you get less than $75, you'll get some decent
          earbuds so at least you can vibe to your music in both
          ears again. 
    Ultimately you will write and test two functions:
    1. Create a utility function that accepts an array of numbers 
       and returns the sum of all the elements.
    2. Your primary function should accept an array of numbers 
       representing the amounts received from various relatives. 
       Make use of the first function to get a total, then print 
       one or more statements describing the outcome of your
       birthday spending spree.
    Pseudocode your logic first, then write actual code.
    You should test the first function before moving on to the
    second.
    Here is some sample data for testing:
    [25, 20] - 45
    [50, 25, 75] - 150
    [80, 50, 25, 20] - 175
    [25, 50, 60, 20, 500] - 655
*/

/*
PSEUDOCODE - function 1
getTotalFromArray takes in an array of num
init a var of sum to 0
loop over array in parameters
for each num of array we will add to sum
return sum
*/

function getTotalFromArray(numArr) {
    let sum = 0;
    for (let num of numArr) {
        sum += num;
    }
    return sum;
}

console.log(getTotalFromArray([80, 50, 25, 20])) // test function

/*
PSEUDOCODE - function 2
printBirthdayMoneyPlans that takes in an array of numbers
init sum variable then assign it to the getTotalFromArray()
if sum < 75
console.log("Cool! I've been wanting some Airpods!")
if sum < 125
console.log("I will feel so fancy at the coffee shop with my new laptop bag!")
if sum < 200
console.log("Wow, this 27\" monitor quadruples the amount of screen space I have!")
else
init variable call message and assign to a string "I can afford to get both"
if sum > 200
console.log(`The remaining ${leftoverSum} will go into savings.`)
*/

function printBirthdayMoneyPlans(giftArr) {
    let sum = getTotalFromArray(giftArr);
    if (sum < 75) {
        console.log("Cool! I've been wanting some Airpods!");
    } else if (sum < 125) {
        console.log("I will feel so fancy at the coffeeshop with my new laptop bag!")
    } else if (sum < 200) {
        console.log("Wow, this 27\" monitor quadruples the amount of screen space I have!")
    } else {
        let message = "I can afford to get both the laptop bag and the monitor!";
        if (sum - 200 > 0) {
            message += ` The remaining ${sum - 200} will go into savings. `;
        }
        console.log(message);
    }
}

console.log(printBirthdayMoneyPlans([50, 25, 75])); // 150 - Wow monitor
console.log(printBirthdayMoneyPlans([25, 50, 60, 20, 500])); // 655 - 455 leftover
