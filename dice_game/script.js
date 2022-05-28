var dices = document.querySelectorAll('.dice');
var  title =document.getElementById('title');
var  score1 =document.getElementById('score1');
var  score2 =document.getElementById('score2');
var star = document.getElementById('startBtn');
var screen1 = document.getElementById('screen1');

star.addEventListener("click", function(){
    screen1.classList.add('page1');
}
);

let winner= "";

var player1= "Player1";
var player2 ="player2";
var player1score =0;
var player2score=0;

 let playerturn =Math.floor(Math.random() * 2)+1;


setTitles();



function roll() {
   
        rollDice();  
}

function cleanTab(){
    dices.forEach((d)=>{
        d.classList.add('hidden');
    });
}
function rollDice() {

    let random=Math.floor(Math.random() * 6);

     if( playerturn == 1) {
          player1score += random+1;
     }
      else 
      if( playerturn == 2) {
           player2score +=random+1;
      }
 
        cleanTab();
        dices[random].classList.remove('hidden');
       dices[random].classList.add('turn');
        setTimeout( function () {
       
        dices[random].classList.remove('turn');
       
    }, 300);

     if( player1score >=50){
         screen1.classList.remove('page1');
        screen1.classList.add('page2');
         document.getElementById("winner").innerHTML ="congratulations player 1";
     }else if(player2score>=50){
        screen1.classList.remove('page1');
        screen1.classList.add('page2'); 
        document.getElementById("winner").innerHTML ="congratulations player 2";
     }
 
      next();
   
}

function setTitles(){
      title.innerHTML="Player"+playerturn+" Turn";
      score1.innerHTML=player1score
      score2.innerHTML=player2score;
}

function next(){
      playerturn = (playerturn== 1) ? 2: 1;
      setTitles();
}

function playAgain(){
    screen1.classList.remove('page2');
    screen1.classList.add('page1');
     player1score=0;
     player2score=0;
    let playerturn =Math.floor(Math.random() * 2)+1;
    setTitles();

}