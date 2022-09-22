function getComputerChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  let ComputerSelection
  let PlayerSelection
  let ResultRound
  let PlayerScore=0
  let ComputerScore=0
  let game = 0
  const container = document.querySelector('#container')
  const resultcont = document.querySelector('#resultcont')

  function PlayRound(a){
  ComputerSelection = getComputerChoice(1,4);
      if(a == ComputerSelection){
          ResultRound = "Its a tie!"
      }
      else if(a == 1 & ComputerSelection == 2){
          ResultRound = "You Win this Round! Scissors beats Paper!"
      }
      else if(a == 1 & ComputerSelection == 3){
          ResultRound = "You Lose this Round! Rock beats Scissors!"
      }
      else if(a == 2 & ComputerSelection == 1){
          ResultRound = "You Lose this Round! Scissors beats Paper!"
      }
      else if(a == 2 & ComputerSelection == 3){
          ResultRound = "You Win this Round! Paper beats Rock!"
      }
      else if(a == 3 & ComputerSelection == 1){
          ResultRound = "You Win this Round! Rock beats Scissors!"
      }
      else if(a == 3 & ComputerSelection == 2){
          ResultRound = "You Lose this Round! Paper beats Rock!"
      }
      console.log(ResultRound) 
      if(ResultRound.match(/Win/)){
        PlayerScore += 1
        }
        else if(ResultRound.match(/Lose/)){
        ComputerScore += 1
        }  
        game += 1

        if(game === 1){
            const content = document.createElement('div')
            content.classList.add('content')
            resultcont.appendChild(content)
            content.textContent = ResultRound
            const PlayerDisplay = document.createElement('div')
            PlayerDisplay.classList.add('PlayerDisplay')
            resultcont.appendChild(PlayerDisplay)
            PlayerDisplay.textContent = "Player Score " + PlayerScore
            const ComputerDisplay = document.createElement('div')
            ComputerDisplay.classList.add('ComputerDisplay')
            resultcont.appendChild(ComputerDisplay)
            ComputerDisplay.textContent = "Computer Score " + ComputerScore
        }
        if (game === 5){
            endGame()
        }
  }

  const btt = document.querySelectorAll('.btt')
  btt.forEach(button =>{
    button.addEventListener('click', function(){
        PlayerSelection = button.id
        if(PlayerSelection == "ROCK"){
            PlayerSelection = 3
        }
        else if(PlayerSelection == "PAPER"){
             PlayerSelection = 2
        }
        else if(PlayerSelection == "SCISSORS"){
             PlayerSelection = 1
        }
        PlayRound(PlayerSelection) 
        if (game > 1){
            document.querySelector('.content').textContent = ResultRound;
            document.querySelector('.PlayerDisplay').textContent = "Player Score " + PlayerScore;
            document.querySelector('.ComputerDisplay').textContent = "Computer Score " + ComputerScore;
    }
  })
})  

  function endGame(){
    const result = document.createElement('div')
    result.classList.add('result')
    resultcont.appendChild(result)
    if(PlayerScore == ComputerScore){
        result.textContent = "You tied with the computer"
      }
      else if(PlayerScore > ComputerScore){
          result.textContent = "You win this game!"
      }
      else if(PlayerScore < ComputerScore){
          result.textContent = "You lose this game!"
      }
      document.getElementsByClassName("btt").disabled =
      
      btt.forEach( elem =>{elem.disabled = true;  // Disabled options
      })
      
   }

