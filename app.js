const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("your-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerText = userChoice
    generateComputerChoices()
    generateResult()
}))

function generateComputerChoices(){
    let randomNumber = Math.floor(Math.random()*possibleChoices.length)+1
    console.log(randomNumber)
    if(randomNumber===1){
        computerChoiceDisplay.innerText="stone"
    }
    else if(randomNumber===2){
        computerChoiceDisplay.innerText= "paper"
    }
    else if(randomNumber===3) {
        computerChoiceDisplay.innerText="scissors"
    }
}
function generateResult(){
    if(computerChoiceDisplay.innerText===userChoiceDisplay.innerText){
        resultDisplay.innerText = "game tie!"
    }
    else if(computerChoiceDisplay.innerText==="stone" && userChoiceDisplay.innerText==="paper"){
        resultDisplay.innerText="You Won!"
    }
    else if(computerChoiceDisplay.innerText==="stone" && userChoiceDisplay.innerText==="scissors"){
        resultDisplay.innerText="You Lost!"
    }
    else if(computerChoiceDisplay.innerText==="paper" && userChoiceDisplay.innerText==="scissors"){
        resultDisplay.innerText="You Won!"
    }
    else if(computerChoiceDisplay.innerText==="paper" && userChoiceDisplay.innerText==="stone"){
        resultDisplay.innerText="You Lost!"
    }
    else if(computerChoiceDisplay.innerText==="scissors" && userChoiceDisplay.innerText==="paper"){
        resultDisplay.innerText="You Lost!"
    }
    else if(computerChoiceDisplay.innerText==="scissors" && userChoiceDisplay.innerText==="stone"){
        resultDisplay.innerText="You Won!"
    }
}