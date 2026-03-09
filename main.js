console.log("Hello World");



function getComputerChoice(r, p, s){
r = "rocks";
s = "scissors";
p = "paper";
let randomNum =  Math.floor(Math.random() * 3)
if(randomNum == 1){
    return console.log(r);
} else if( randomNum == 2){
    return console.log(s);;
} else {
    return console.log(p);
}
}

function getHumanChoice(input){
    if(input == "r"){
    return console.log("UserInput: rocks");
    } else if(input == "s"){
    return console.log("UserInput: scissors");
    } else {
   return console.log("UserInput: paper");
    }
    
}
let userInput = prompt("Rock(r) Paper(p) or Scissor(s)?");
console.log(userInput);
let tempRo;
let tempSo;
let tempPo;
getHumanChoice(userInput);
getComputerChoice(tempRo,tempSo,tempPo);
