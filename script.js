let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
let count = 0;

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
   const resetgame = () => {
    turn0 = true;
    let count = 0;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was click");
        if(turn0 ){
        box.innerText = "X";
            turn0 = false;
    }
        else{
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        
        let isWinner = checkwinner();
        if (count ===9 && !isWinner) {
            gameDraw();
        }
    })
})
const gameDraw = () => {
    msg.innerText = `Game was draw`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations  Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner = () => {
    for (pattern of winpattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !="") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner",pos1Val);
                showWinner(pos1Val);
               
            }
        }
    } 
};
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
