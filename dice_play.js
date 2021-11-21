

let roll = document.querySelector('#btn-roll').addEventListener('click', function () {

      if (game) {
            // random number
            let dice = Math.floor(Math.random() * 6) + 1;

            // show the image of the dice
            let diceDOM = document.querySelector('#dice');

            diceDOM.src = 'images/dice_' + dice + '.png';

            // add score + change player
            if (dice !== 1) {
                  roundScore += dice;
                  document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
            else {
                  nextPlayer()

            }
      }
})
      ;

let hold = document.querySelector('#btn-hold').addEventListener('click', () => {
      if (game) {
            // adding overall score
            scores[activePlayer] += roundScore;
            // registration of the overall score
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            // if the player wins the game
            if (scores[activePlayer] >= 100) {
                  document.querySelector('#num-' + activePlayer).textContent = 'Winner!';
                  document.querySelector('#player' + activePlayer).classList.remove('active');
                  game = false;
            } else {
                  //Next player
                  nextPlayer();


            }
      }
})
      ;

function nextPlayer() {
      //condition ? exprIfTrue : exprIfFalse
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      roundScore = 0;
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';
      document.querySelector('#player1').classList.toggle('active');
      document.querySelector('#player2').classList.toggle('active');
      document.querySelector('#num-1').classList.toggle('nextplayer');
      document.querySelector('#num-0').classList.toggle('nextplayer');
}

;

// game initialization
let init = document.querySelector('#new-game').addEventListener('click', () => {
      scores = [0, 0];
      activePlayer = 0;
      roundScore = 0;
      game = true;

      document.querySelector('#score-0').textContent = '0';
      document.querySelector('#score-1').textContent = '0';
      document.querySelector('#current-0').textContent = '0';
      document.querySelector('#current-1').textContent = '0';
      document.querySelector('#num-0').textContent = 'player 1';
      document.querySelector('#num-1').textContent = 'player 2';
      document.querySelector('#player1').classList.remove('active');
      document.querySelector('#player2').classList.remove('active');
      document.querySelector('#player1').classList.add('active');
      document.querySelector('#num-0').classList.add('nextplayer');

})
      ;
