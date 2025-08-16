let player1=localStorage.getItem("player1") || "player 1";
let player2=localStorage.getItem("player2") || "player 2";
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let msg=document.querySelector("#msg")
let msgContainer=document.querySelector(".msg-container")
let chance=0;
let newBtn=document.querySelector("#new");
let pop=document.querySelector(".popup");
newBtn.addEventListener("click",()=>{
    window.location.href="index.html";
});
console.log(boxes);
let turnO = true; // true means O's turn
let flag=false;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        box.style.backgroundColor = "#725e54"; // hide after click
        chance=chance+1;
        checkWinner();
    });
});

resetBtn.addEventListener("click", () => {
    console.log("reset button clicked");
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "#f4c095"; // show again
    });
    msg.innerText="";
    msgContainer.classList.add("hide");
    chance=0;
    turnO=true;
});

const showWinner= (winner) =>{
    let winnerName=winner === "O"?player1.toUpperCase():player2.toLowerCase();
    msg.innerText=`CONGRATULATIONS 👑 winner 👑 IS ${winnerName}`;
    msgContainer.classList.remove("hide");
    flag=true;
} 

const checkWinner= () =>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                boxes.forEach((box) =>{
                    box.disabled=true;
                })
                showWinner(pos1Val);
                break;
            }
        }
    }

    if(chance==9 && flag==false){
        msg.innerText="Draw Game... Don't Stop...";
        msgContainer.classList.remove("hide");
    }

}
