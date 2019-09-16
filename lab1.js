
//Variable that holds the user input. Gets the inputed value from the userSelect function
var userSelection = userSelect();
//Variable that holds the randomized number
var numGen = Math.random();
//Creates the variable that will hold the cpu selected item
var cpuSelection;

if(numGen <= 0.34){ //If numGen is equal or less than 0.34, do the following
  cpuSelection = "Rock"; //Rock is selected
  console.log("CPU SELECTED: " + cpuSelection);
}

else if(numGen >= 0.35 && numGen <= 0.67){ //If numGen is less 0.67 and greater than 0.35, or equal to either, do the following 
  cpuSelection = "Paper"; //Paper is selected
  console.log("CPU SELECTED: " + cpuSelection);
}

else if(numGen >= 0.68){ //If numGen is greater or equal to 0.68, do the following
  cpuSelection = "Scissors"; //Scissors is selected
  console.log("CPU SELECTED: " + cpuSelection);
}


//CPU win scenarios
if(userSelection == "Rock" && cpuSelection == "Paper" || userSelection == "Paper" && cpuSelection == "Scissors" || userSelection == "Scissors" && cpuSelection == "Rock"){
  console.log("Computer Wins");
}
//User win scenarios
else if(cpuSelection == "Rock" && userSelection == "Paper" || cpuSelection == "Paper" && userSelection == "Scissors" || cpuSelection == "Scissors" && userSelection == "Rock"){
  console.log("User Wins");
}
//Tie
else{
  console.log("It's a tie");
}

console.log("----END OF ROUND----"); //Console Spacer just incase the console didn't clear when relaunched


//User input function
function userSelect(){
  //Input variable prompt
  var input = prompt('Enter your selection *MAKE SURE TO ENTER ONE OF THE FOLLOWING* (Rock, Paper, or Scissors)', "Rock");
  //If the user put something other than the three options, have the function run again, reprompting them
  if(!(input == "Rock" || input == "Paper" || input == "Scissors")){
    userSelect();
  }
  //If the user put one of the three options return their option to the userSelection variable that called this function
  else{
    console.log("USER SELECTED: " + input);
    return input;
  }
}


