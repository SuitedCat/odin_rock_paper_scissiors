console.log("Hello World");



function getComputerChoice(r, p, s){
r = "rocks";
s = "scissors";
p = "paper";
let randomNum =  Math.floor(Math.random() * 3)
if(randomNum == 1){
    return console.log(r);
} else if( randomNum == 2){
    return  console.log(s);;
} else {
    return console.log(p);
}
}

let tempRo;
let tempSo;
let tempPo;

getComputerChoice(tempRo,tempSo,tempPo);
