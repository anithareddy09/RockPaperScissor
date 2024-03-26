let userscore = 0;
let compscore = 0;
let choice = document.querySelectorAll(".choice");
let userscoreparah = document.querySelector("#userscoreparah");
let compscoreparah = document.querySelector("#compscoreparah");

let drawscore = () => {

    msg.innerText = "the game was draw,play Again"
    msg.style.backgroundColor = "blueviolet"
    console.log()
}

let msg = document.querySelector("#msg")

let compScore = () => {
    let options = ["rock", "paper", "scissor"];
    let ranidx = Math.floor(Math.random() * 3);
    return options[ranidx];

}

let showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++
        userscoreparah.innerText = userscore;
        msg.innerText = `You Win!!, your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green";
    } else {
        compscore++
        compscoreparah.innerText = compscore;
        msg.innerText = `you lost,${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red";
    }
}
let playGame = (userchoice) => {
    console.log("User coice =", userchoice);
    let compchoice = compScore();
    console.log("comp choice =", compchoice);

    if (userchoice === compchoice) {
        drawscore();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            //scissors //paper
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {

            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }

}

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
