let snake = document.querySelector("#snake");
let gun = document.querySelector("#gun");
let water = document.querySelector("#water");

let userscore = 0;
let compscore = 0;

let userscorepara = document.querySelector(".userscore");
let compscorepara = document.querySelector(".compscore");
let display = document.querySelector(".display")

function compresp(){
  let choices = [snake,water,gun];
  let randidx = Math.floor(Math.random()*choices.length);
  return choices[randidx];
}

let userwin = true;

function cardclicked(evt){
    let userchoice = evt;
    let compchoice = compresp();
    if(userchoice === compchoice){
        display.innerHTML = "It was a tie, Play again"
        display.style.backgroundColor = "white"
    }
    else{
    if(userchoice === snake){
        userwin = compchoice === gun ? false:true
    }
    if(userchoice === gun){
        userwin = compchoice === water ? false:true
    }
    if(userchoice === water){
        userwin = compchoice === snake ? false:true
    }
      checkWinner(userwin);
}  
}

function checkWinner(userwin){
    if(userwin){
        userscore++;
        userscorepara.innerHTML = userscore;
        display.innerHTML = "You win";
        display.style.backgroundColor = "green"
    }
    else{
        compscore++;
        compscorepara.innerHTML = compscore;
        display.innerHTML = "Oops, you lost";
        display.style.backgroundColor = "red"
    }
}