let ip = document.querySelector(".playerData");
let btn=document.querySelector("#play");
btn.addEventListener("click",()=>{
    console.log("play clicked");
    ip.classList.remove("hidden");
});

let start=document.querySelector("#start");
let input=document.querySelectorAll(".data")

function inputValue(){
        start.addEventListener("click",()=>{
        console.log("game page...");
        let player1 = input[0].value.trim() || "Player 1";
        let player2 = input[1].value.trim() || "Player 2";
        console.log(player1);
        console.log(player2);
        localStorage.setItem("player1",player1)
        localStorage.setItem("player2",player2);
        window.location.href="gamePage.html";
    }); 
}

inputValue();