// Getting Random Number
const compGuess = Math.floor((Math.random()*100) +1)
let moveCount = 0;  // Initialize move counter
const maxMoves = 10;  // Set the maximum allowed moves

const form = document.querySelector('form')

form.addEventListener('submit' , function(e){
   e.preventDefault();  // Prevent form submission
   const userGuess = parseInt(document.querySelector('#userGuess').value)
   const message = document.querySelector('.message')
   const moveShower = document.querySelector('.move-shower')

   if(moveCount < maxMoves){
    // Check if input is a valid number
     if (!isNaN(userGuess) && userGuess>0 && userGuess<100) {
      moveCount++ // Increase the movecount
      const moveRemaining =  parseInt(maxMoves) - parseInt(moveCount)
      moveShower.innerHTML = `The Move Remaining : ${moveRemaining}`;
        if(userGuess == compGuess){
            message.innerHTML = 'Congratulation You Won'
            disableForm();
        }
        else if ( userGuess < compGuess) {
            message.innerHTML = 'Your Guess is smaller than Real Number'
        }
        else if(userGuess > compGuess){
            message.innerHTML = 'Your Guess is Greater than Real Number'
        }
        createHistory(userGuess)
        CreateScore(userGuess)
        resetInput(userGuess)
        //to check whether the moves have reached the limit or not
        if(moveCount === maxMoves && userGuess !== compGuess){
            message.innerHTML = `Game Over! You've used all your ${maxMoves} moves. The correct number was ${compGuess}.`;
            disableForm();  // Disable the form once the game is over
        }

     } else{
        message.innerHTML = 'Enter The Number Between 1 and 100'
     }

   } else{
    message.innerHTML = `Game Over! You've used all your ${maxMoves} moves.`;
   }
   
})


function createHistory(userGuess){
    const historyBoard = document.querySelector("#historyBoard")
    const newHistory = document.createElement('li')
    newHistory.innerHTML = `${userGuess}`
    historyBoard.appendChild(newHistory)
}

function CreateScore(userGuess){
    const scoreBoard = document.querySelector("#scoreBoard")
    const newScore = document.createElement('li')
    const score = (( 100 - userGuess ) * 0.5)
    newScore.innerHTML = `${score}`
    scoreBoard.appendChild(newScore)
}


// Function to disable the form after game over or win
function disableForm() {
    document.querySelector('#userGuess').disabled = true;
}

function resetInput(userGuess){
    userGuess.value = ''
}
