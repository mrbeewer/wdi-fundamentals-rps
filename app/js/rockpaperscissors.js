////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    var answer = prompt();
    return answer;
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should 
    // equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should 
    // equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' 
    // based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 
    // 'rock', 'paper', and 'scissors'. The rules of the game are that 'rock' 
    // beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
    switch (playerMove) {
        case 'rock':
                if (computerMove === 'scissors') {
                    winner = 'player';
                } else if (computerMove === 'paper') {
                    winner = 'computer';
                } else {
                    winner = 'tie';
                }
                break;
        case 'scissors':
                if ( computerMove === 'paper') {
                    winner = 'player';
                } else if (computerMove === 'rock') {
                    winner = 'computer';
                } else {
                    winner = 'tie';
                }
                break;
        case 'paper':
                if (computerMove === 'rock') {
                    winner = 'player';
                } else if (computerMove === 'scissors') {
                    winner = 'computer';
                } else {
                    winner = 'tie';
                }
                break;
        case 'exit':
                winner = 'exit';
                break;
        default:
                console.log('\n' + '\t' + 'Player -- Invalid Move!!');
                console.log('\t' + 'Player -- Invalid Move!!');
                winner = null;
                break;
    } 
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or 
    // the computer has won five times.
    
    var idx = 0;
    var gameOver = false;
    
    while (gameOver === false) {
        
        // When using repl.it to test, the player prompt tends to freeze on the
        //   second request. If tested on repl.it with computer vs computer
        //   the code functions properly. Tested with player input on the
        //   Codecademy Labs site, it does not freeze on input. After seeing the
        //   physical prompt display on Codecademy, perhaps repl.it doesn't 
        //   display prompts?
        //
        //var playerMove = getComputerMove();
        
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        
        var winner = getWinner(playerMove, computerMove);
        
        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === 'computer') {
            computerWins += 1;
        } else if (winner === 'exit') {
            return;
        }
        
        console.log('\n');
        console.log('Player Move: ' + playerMove + ' .... Computer Move: ' + computerMove);
        console.log('Currently Score: ' + playerWins + ' vs. ' + computerWins + '\n');
        
        if (playerWins >= 5 || computerWins >= 5) {
            gameOver = true;
        }
    }
            
    return [playerWins, computerWins];
}

function playToNum(num) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or 
    // the computer has won five times.
    
    var idx = 0;
    var gameOver = false;
    
    while (gameOver === false) {
        
        // When using repl.it to test, the player prompt tends to freeze on the
        //   second request. If tested on repl.it with computer vs computer
        //   the code functions properly. Tested with player input on the
        //   Codecademy Labs site, it does not freeze on input. After seeing the
        //   physical prompt display on Codecademy, perhaps repl.it doesn't 
        //   display prompts?
        //
        //var playerMove = getComputerMove();
        
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        
        var winner = getWinner(playerMove, computerMove);
        
        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === 'computer') {
            computerWins += 1;
        } else if (winner === 'exit') {
            return;
        }
        
        console.log('\n');
        console.log('Player Move: ' + playerMove + ' Computer Move: ' + computerMove);
        console.log('Current Score: ' + playerWins + ' vs. ' + computerWins + '\n');
        
        if (playerWins >= num || computerWins >= num) {
            gameOver = true;
        }
    }
            
    return [playerWins, computerWins];
}
