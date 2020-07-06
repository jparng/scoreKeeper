var p1Btn = document.querySelector("#p1");
var p2Btn = document.getElementById("p2");
var p1Disp = document.querySelector("#p1Display");
var p2Disp = document.getElementById("p2Display");
var reset = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var win = 5;

p1Btn.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    if(p1Score === win){
        gameOver = true;
        p1Disp.classList.add("winner");
        p2Disp.classList.add("loser");
        }
    p1Disp.textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
    if(p2Score === win){
        gameOver = true;
        p2Disp.classList.add("winner");
        p1Disp.classList.add("loser");
     }
    p2Disp.textContent = p2Score;
    }   
});

reset.addEventListener("click", function(){
    resetting();
    
});

numInput.addEventListener("change", function(){
    if(this.value > 0){
    winningDisplay.textContent = this.value;
    win = Number(this.value);
    resetting();
     }else{
        alert("Please input a positive number greater than 0!");
        resetting();
    }
});

function resetting(){
    p2Score = 0;
    p1Score = 0;
    p1Disp.textContent = p1Score;
    p2Disp.textContent = p2Score;
    p1Disp.classList.remove("winner");
    p2Disp.classList.remove("winner");
    p1Disp.classList.remove("loser");
    p2Disp.classList.remove("loser");
    gameOver = false;
}
