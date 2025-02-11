//First I will create a string for the user.
console.log("You have received this message because you have been chosen to open an important vault.");
/* Next I'll create three variables.
Each variable will be the result of three different calculations.
*/
const code1 = 7+3;
const code2 = 80/2;
const code3 = 13*3;
//I will also add a message to the user.
const message = "The vault has been secured. The combination is:";
//Next I'll use a template literal to concatenate the variables without addig them together.
const CombinationCode = `${code1} ${code2} ${code3}`;
//And last I will print the message and combination code.
console.log(message + " " + CombinationCode)

