var scores , roundScore, activePlayer, dice, gamePlaying, previousScore, score;

init();

function diceRoll(){
    if(gamePlaying){
        previousScore = dice;
        dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').style.display = 'block';
        document.getElementById('dice').src="dice-"+dice+".png";
        if((previousScore == 6) && (dice == 6)){
            document.querySelector('#score-'+activePlayer).textContent = '0';
            scores[activePlayer] = 0;
            nextPlayer();
        }
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
        if(scores[activePlayer]<score){
            scores[activePlayer] += roundScore;        
            document.getElementById('score-'+activePlayer).innerHTML=scores[activePlayer];
            if(scores[activePlayer]>=score){
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
    dice = 0;
    score = 0;

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

document.getElementById('limit-btn').addEventListener('click', function(){
        score = Number(document.getElementById('limit').value);
        document.getElementById('limit').value = null;
        document.getElementById('limit').style.display = 'none';
        document.querySelector('.btn-new').style.display = 'block';
        document.querySelector('.btn-hold').style.display = 'block';
        document.querySelector('.btn-roll').style.display = 'block';
        document.getElementById('title').style.display = 'none';
        document.getElementById('limit-btn').style.display = 'none';
        document.querySelectorAll('.dull').forEach(function(cls){
            cls.classList.remove('dull');
        });
    }    
)



