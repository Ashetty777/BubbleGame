var timer=60;
var score=0;
var hitrn=0;

function getScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

function hitSet(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function makeBubble(){
var clutter="";

for( var i=1;i<=189;i++){
    var rn=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
   var timerans= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerans);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER!!!</h1>`;
        }
    },1000)
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clicknum = Number(dets.target.textContent);
    if(clicknum === hitrn){
        getScore();
        makeBubble();
        hitSet();
    }
});

runTimer();
makeBubble();
hitSet();