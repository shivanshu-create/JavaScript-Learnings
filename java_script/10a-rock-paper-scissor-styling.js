let Score = JSON.parse(localStorage.getItem('score')) || {
      win: 0,
      lose: 0,
      tie: 0
    }; // if the score is not present in the local storage then it will be initialized to 0
    // if we didn't set the score to 0 then score will be null and we will get an error when we try to access the properties of the score object.

    currentScore(); // it will show the score on the page always and it needs to be placed after the score variable used in it has been initiliazed

    function resetScore() {
      Score.win = 0;
      Score.lose = 0;
      Score.tie = 0;

      localStorage.removeItem('score'); // removing the score from local storage so that it will not be saved in the browser and will be reset to 0 when the page is refreshed

      currentScore();
    }

    function playGame(myMove) {
      const computerMove = computerChoice();

      if (myMove === computerMove) {
        Score.tie++;
        document.querySelector('.js-result').innerHTML = 'Tie';
      } else if (
        (myMove === '✊' && computerMove === '✌️') ||
        (myMove === '✋' && computerMove === '✊') ||
        (myMove === '✌️' && computerMove === '✋')
      ) {
        Score.win++;
        document.querySelector('.js-result').innerHTML = 'You Won';

      } else {
        Score.lose++;
        document.querySelector('.js-result').innerHTML = 'You Lose';

      }

      document.querySelector('.js-moves').innerHTML = `You chose ${myMove} - Computer chose ${computerMove}`;

      localStorage.setItem('score', JSON.stringify(Score)); // this will store the score in the local storage so that it will be saved in the browser and will not be reset to 0 when the page is refreshed

      currentScore();
    }

    function computerChoice() {
      const computerTrun = Math.random();
      let computerMove = '';

      if(computerTrun >= 0 && computerTrun < 1/3) computerMove = '✊';

      if(computerTrun >= 1/3 && computerTrun < 2/3) computerMove = '✋';

      if(computerTrun >= 2/3 && computerTrun < 1) computerMove = '✌️';

      return computerMove;
    }

    function currentScore(){
      const para = document.querySelector('.js-score');
      para.innerHTML = `Score: Wins ${Score.win} ,Losses ${Score.lose} ,Ties ${Score.tie}`;
    }