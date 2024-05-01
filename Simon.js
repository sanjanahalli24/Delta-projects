let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ['yellow','red','purple','green'];

let h2 = document.querySelector("h2");

//Step-1
document.addEventListener("keypress",function (){
    if(started == false){
        console.log("Game started");
        started = true;
        levelUp();
}
}); //End of step-1

//Step-2

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //Random button choose
    let randIndex = Math.floor(Math.random() * 3);
    let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    //console.log(`${randIndex}, ${randColor}, ${randBtn}`);
    gameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}
 //Button listeners
function btnPress(){
    //console.log(this);
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);
   checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn1 of allBtns){
    btn1.addEventListener("click",btnPress);
} //End of step-2

//Step-4 Matching game seq and user seq
function checkAns(idx){
    //console.log("current level :",level);
    //let idx = level - 1;

    if(userSeq[idx] === gameSeq[idx]){
        //console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }  else{
        h2.innerText = `Game over! Your score was ${level} Press any key to restart.`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },150);
        reset();
    }
   
} //End of step-4

//Step -5
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}