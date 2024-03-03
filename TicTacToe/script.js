
// get necessary DOM element
const board = document.querySelector('.board')
const squares = document.querySelectorAll('.square')
const message = document.querySelector('.message')
const restartBtn = document.querySelector('.restart-btn')

// define current player and initalize current player
const players = ['X', 'O']
let currentPlayer = players[0];

//bcz in players array , X is 1st that's why it will always be first, so we provide intially as X turn
message.textContent = `X's Turn`;

// deifne winning patterns
const winningPatterns = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonals
  [0, 4, 8],
  [2, 4, 6],
];

// add event listener to each squares
for(let i =0;i<squares.length;i++){
  squares[i].addEventListener('click',()=>{
    // Check if square is empty or there's no winner
    if(squares[i].textContent !== "" || checkWinner(currentPlayer)){
      // If square is already filled or there's a winner, do nothing
      return
    }

    // Place player's symbol in the square
    squares[i].textContent = currentPlayer;


    // check if current player wins
    if(checkWinner(currentPlayer)){
      message.textContent = `Game Over. ${currentPlayer} wins the Game. Please restart`;
      return
    }

    // check if game ends in tie
    if(checkTieResult()){
      message.textContent = `Game Tie. Please restart. `
      return
    }


    // switch to next player, if one placed his chance of game
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];

    // update messages to display whose turn it is
    if(currentPlayer === players[0]){
      message.textContent = `X's Turn`;
    }
    else{
      message.textContent = `O's Turn`;
    }
  })
}

// function to check if player wins
function checkWinner(currentPlayer){
  for(let i =0;i<winningPatterns.length;i++){
    const [a,b,c] = winningPatterns[i];

    // check if current player occupies all positions in any winning pattern
    if(
      squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer
    ){
      return true; //return true if player wins
    }
  }
  return false; // return false if no player wins
}


// Function to check if the game ends in a tie
function checkTieResult(){
  for(let i =0;i<squares.length;i++){
    if(squares[i].textContent === ''){
      return false //rerturn false if there are still empty squares
    }
  }
  return true //return true if all squares are filled
}


// function to restart the game
function restartGame(){
  // clear all squares
  for(let i =0;i<squares.length;i++){
    squares[i].textContent = "";
  }
  // reset message and current player
  message.textContent = `X's turn`;
  currentPlayer = players[0];
}

// add click event listener to the restart button
restartBtn.addEventListener('click',()=>{
  restartGame(); //restart the game when restart button is clicked
})