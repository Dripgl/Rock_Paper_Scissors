game = function() {
    let playerPT = 0;
    let systemPT = 0;
  
    const startBTN = document.querySelector('.start button');
    const startSCN = document.querySelector('.start');
    const vs = document.querySelector('.vs');
    const check = document.querySelectorAll('.check button');
    const playerHand = document.querySelector('.player_game');
    const systemHand = document.querySelector('.system_game');
    const ps_win = document.querySelector('.ps_win');
    const playerScore = document.querySelector('.player_pt p');
    const systemScore = document.querySelector('.system_pt p');
    const ps_winend = document.querySelector('.ps_winend');
    const ps_win_stop = document.querySelector('.ps_win_stop');
    const reStart = document.querySelector('.ps_winend button');
  
    const systemcheck = ['rock', 'paper', 'scissors'];
  
    const startGame = function() {
      startBTN.addEventListener('click', function() {
        startSCN.classList.add('gameout');
        vs.classList.add('gamein');
        vs.classList.remove('gameout');
      });
    };
  
    const playvs = function() {
      check.forEach((opt1) => {
        opt1.addEventListener('click', function() {
          const systemNumber = Math.floor(Math.random() * 3);
          const systemChoice = systemcheck[systemNumber];
  
          setTimeout(() => {
            compareLaunch(this.textContent, systemChoice);
  
            playerHand.src = `${this.textContent}.png`;
            systemHand.src = `${systemChoice}.png`;
          }, 2000);
        });
      });
    };
  
    const compareLaunch = (playerChoice, systemChoice) => {
      if (playerChoice === systemChoice) {
        ps_win.textContent = 'Draw';
      } else if (
        (playerChoice === 'rock' && systemChoice === 'scissors') ||
        (playerChoice === 'paper' && systemChoice === 'rock') ||
        (playerChoice === 'scissors' && systemChoice === 'paper')
      ) {
        ps_win.textContent = 'Player Wins';
        playerPT++;
        updatescore();
        endGame();
      } else {
        ps_win.textContent = 'System Wins';
        systemPT++;
        updatescore();
        endGame();
      }
    };
  
    const updatescore = function() {
      playerScore.textContent = playerPT.toString();
      systemScore.textContent = systemPT.toString();
    };
  
    const restartGame = () => {
      reStart.addEventListener('click', () => {
        window.location.reload();
      });
    };
  
    const endGame = () => {
      if (playerPT === 3) {
        vs.classList.remove('gamein');
        vs.classList.add('gameout');
        setTimeout(() => {
          ps_winend.classList.add('gamein');
          ps_winend.classList.remove('gameout');
          ps_win_stop.textContent = 'Player won the game';
        }, 2000);
      } else if (systemPT === 3) {
        vs.classList.remove('gamein');
        vs.classList.add('gameout');
        setTimeout(() => {
          ps_winend.classList.add('gamein');
          ps_winend.classList.remove('gameout');
          ps_win_stop.textContent = 'System won the game';
        }, 2000);
      }
    };
  
    startGame();
    playvs();
    restartGame();
  };
  
  game();
  