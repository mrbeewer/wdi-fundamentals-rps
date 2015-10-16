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


////////////////////////////////////////////////
/*               Get Player Move              */
////////////////////////////////////////////////
function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should 
    // equal `getInput()`.
    return move || getInput();
}


////////////////////////////////////////////////
/*             Get Computer Move              */
////////////////////////////////////////////////
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should 
    // equal `randomPlay()`.
    return move || randomPlay();
}


////////////////////////////////////////////////
/*             Determine Winner               */
////////////////////////////////////////////////
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


////////////////////////////////////////////////
/*             Play to 5 Wins                 */
////////////////////////////////////////////////
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
            
    console.log('\n\n' + '5 Games Complete!');
    console.log('\t' + 'Final Score: Player-' + playerWins + '... Computer-' + computerWins);
    return [playerWins, computerWins];
}


////////////////////////////////////////////////
/*             Play for # Wins                */
////////////////////////////////////////////////
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
          
    console.log('\n\n' + num + ' Games Complete!');
    console.log('\t' + 'Final Score: Player-' + playerWins + '... Computer-' + computerWins);
    return [playerWins, computerWins];
}


////////////////////////////////////////////////
/*           Calculate Win Ratio              */
////////////////////////////////////////////////
function playCvC(num) {
    var startTime = Date.now();
    
    console.log("Computer vs Computer for " + num + " WINS...");
    var computer1Wins = 0;
    var computer2Wins = 0;
    var idx = 0;
    var gameOver = false;
    
    while (gameOver === false) {
        
        idx++; //Total Game Counter
        
        var computer1Move = getComputerMove();
        var computer2Move = getComputerMove();
        
        var winner = getWinner(computer1Move, computer2Move);
        
        if (winner === 'player') {
            computer1Wins += 1;
        } else if (winner === 'computer') {
            computer2Wins += 1;
        } else if (winner === 'exit') {
            return;
        }
        
        if (computer1Wins >= num || computer2Wins >= num) {
            gameOver = true;
        }
    }
    
    var endTime = Date.now();
    var elapsedTime = (endTime - startTime) / 1000;
    
    console.log('\t' + idx + ' Games Complete!');
    console.log('\t' + 'Final Score:');
    console.log('\t\t' +'[Computer1 -- ' + computer1Wins + '] ... [Computer2 -- ' + computer2Wins +']');
    var ratio = computer1Wins / idx * 100;
    console.log('\t\t' + 'Win Ratio(Computer1): ' + 
        new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format(ratio));
    console.log('\t\t' + 'Test took ' + 
        new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format(elapsedTime) + ' seconds');
    
    return [computer1Wins, computer2Wins];
}