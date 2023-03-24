let fizzBuzz = document.getElementById("fizzbuzz");
const resetInput = () => { userInput.value = "" };

// get our array of numbers up to userInputNumber (steps 2 > 4)
let allTheNumbers = [];


const printResult = () => {
	// 1. getting the input from the user
  let userInput = document.getElementById("userInput");
  console.log('userInput value', userInput.value);
  
  
	let userInputNumber = parseInt(userInput.value, 10); // 1a
    
  const myNumbersView = document.createElement("li");
  fizzBuzz.appendChild(myNumbersView);
  // 3. create the loop to print all numbers up to the user's input
    for (let i = 1; i < userInputNumber; i++) {
      // 5. if number is divisible by 3 should print "Fizz" (swapped places with 7)
    	if ( i % 3 === 0 && i % 5 === 0 ) {
         	allTheNumbers.push("FizzBuzz") 
      // 6. if number is divisible by 5 with the word "buzz"
         } else if (i % 5 === 0) {
          allTheNumbers.push("buzz") 
      // 7. if number is divisible by 3 AND 5 print "FizzBuzz" (swapped places with 5)
         } else if (i % 3 === 0 ) {
         	allTheNumbers.push("fizz") 
         } else {
        	allTheNumbers.push(i)
         }
      console.log("Array", allTheNumbers)
    } 
  myNumbersView.innerHTML = userInputNumber + "; " + allTheNumbers;
  
  resetInput();
 	allTheNumbers = [];
}

const printButton = document.getElementById("print");  
printButton.addEventListener("click", printResult);




// 1. getting the input from the user
// 1a. input needs to be of type = number
// 2. does the output need to be in an array?! (ans: not if we're just printing the userinput to the screen, your program does not need to remember what the user put in everytime) (amendment: so i removed it, then put it back in again when i got to step 5)
// 3. create the loop to print all numbers up to the user's input
// 4. have the program print all the numbers on the page, every number (and resulting loop) the user inputs should be its own dot point. (another step in the process that required me to look very closely at what each line of code does, eg. checking that the looped numbers are saved into the array BEFORE it gets printed to the screen, otherwise my program will only ever capture the users input and not the set of numbers that are outputted from the loop. This also answers the question from step 3! We DIDN'T need the users Input saved into an array at step 3, however if we're looping through until we reach the user's input and then printing it out, then yes, the numbers that are a result of the loop need to be saved into an array which we can then print onto the screen)
// 5. replace every multiple of 3 with the word "fizz"
// 5a. snag: loop is terminated when the first 'fizz' is printed (first attempt: using if/else if blocks) - thinking about what i'm asking the program to do, EACH loop it does its either printing out the number its up to, or replacing that number with 'fizz', so maybe its having it do a loop within the original loop, where each iteration i'm asking it to do one thing then move on, as opposed to the conditional check in my if/else block. Perhaps a forEach? 
// 5b. i've definitely overcooked it thinking i needed a forEach - i wonder what i DIDN'T get right before, i'm assuming my FIRST thought was to just add the conditional rendering to the for loop in the first place?! 
// 6. got a little too excited just now, thinking i've solved the rest of the algorithm by adding (i % 5 === 0) to the solution to 6; but then remembered that for all multiples of 5 i need it to print 'Buzz' instead. So - replace every multiples of 5 with the word "buzz". Looks like i'll need to be using if/else statements instead of ternary operator.
// 7. if number is divisible by 3 AND 5 print "FizzBuzz"
// 7a. ok, so i'm sure my logic is sound - but its not printing "FizzBuzz" - perhaps its because its already printed "Fizz" as the number being assessed at the time was divisible by 3? ie. the order of operations at runtime. So i swapped the position of the conditionals, making the conditional for "FizzBuzz" be executed first. This worked! I have officially solved the puzzle, by myself, the entire way! woop!

// Setting myself a little extra step - format my results properly so that it is more presentable! 