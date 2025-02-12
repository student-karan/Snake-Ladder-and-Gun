let Snake = document.querySelector("#snake");
let Water = document.querySelector("#water");
let Gun = document.querySelector("#gun");

let userscore = 0;
let compscore = 0;

let userscorepara = document.querySelector(".userscore");
let compscorepara = document.querySelector(".compscore");
let display = document.querySelector(".display")

function gencompresp() {
    let choices = [Snake, Water, Gun];
    let randIdx = Math.floor(Math.random() * choices.length);
    return choices[randIdx];
}

let userWin = true;

const cardclicked = (evt) => {
    let compchoice = gencompresp();
    let userchoice = evt;
    if (userchoice === compchoice) {
        display.innerHTML = "It was a tie, Play again."
        display.style.backgroundColor = 'white';
    }
    else {
        if (userchoice === Gun) {
            userWin = compchoice === Snake ? true : false
        }
        if (userchoice == Water) {
            userWin = compchoice === Gun ? true : false
        }
        if (userchoice == Snake) {
            userWin = compchoice === Water ? true : false
        }
        evaluser(userWin);
    }
}
const evaluser = (userWin) => {
    if (userWin) {
        userscore++;
        userscorepara.innerHTML = userscore;
        display.innerHTML = "Congrats, you Won";
        display.style.backgroundColor = 'green';
    }
    else {
        compscore++;
        compscorepara.innerHTML = compscore;
        display.innerHTML = "Oops,you Lost";
        display.style.backgroundColor = 'red';
    }
}
