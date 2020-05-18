var scores , roundScore, activePlayer, dice, gamePlaying;

init();

function diceRoll(){
    if(gamePlaying){
        dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').style.display = 'block';
        document.getElementById('dice').src="dice-"+dice+".png";
        if(dice == 1){
            nextPlayer();
        }
        else{
        roundScore += dice;
        document.getElementById('current-'+activePlayer).innerHTML=roundScore;
        }
    }
}

function hold(){
    if(gamePlaying){
        if(scores[activePlayer]<100){
            scores[activePlayer] += roundScore;        
            document.getElementById('score-'+activePlayer).innerHTML=scores[activePlayer];
            if(scores[activePlayer]>=100){
                document.querySelector('#name-'+activePlayer).textContent = 'WINNER!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');   
                gamePlaying = false;
            }
            else{
                document.querySelector('.dice').style.display = 'none';
                nextPlayer();
            }  
        }
    }
}
    
function nextPlayer(){
    roundScore=0;
    document.getElementById('current-'+activePlayer).innerHTML=roundScore;
    (activePlayer == 0) ? (activePlayer=1) : (activePlayer=0);
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');  
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    dice = 6;
    document.querySelector('.dice').style.display = 'none';
    gamePlaying = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}
       

