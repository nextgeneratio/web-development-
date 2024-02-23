let MessageEl = document.getElementById("message-el")
let CardEl = document.getElementById("cards-el")
let SumEl = document.getElementById("sum-el")
let StartGameEl = document.querySelector(".startGame-el")
let NewCardEl = document.querySelector(".newCard-el")
Cards = []
let message = ""
let sum = 0
let hasBlackJack = false
let isAlive = false
let hasStart = false



function randomNumbers() {
      let random = Math.floor(Math.random() * 12) + 1
      if (random > 10){
            return 10
      } else if (random === 1) {
            return 11
      } else {
            return random
      }
}
function startGame() {
      if (hasStart === false) {
            StartGameEl.textContent = "New Game"
            isAlive = true
            hasBlackJack = false
            let firstCard = randomNumbers()
            let secondCard = randomNumbers()
            Cards = [firstCard, secondCard]
            sum = firstCard + secondCard
            renderGame()
            hasStart = true
      }
}
function renderGame() {
      CardEl.textContent = "Cards: "
      SumEl.textContent = "Sum: " + sum
      for (let i = 0; i < Cards.length; i++){
            CardEl.textContent += Cards[i] + " "
      }
      if (sum < 21) {
            message = "Do you want to draw a new Card?"
      }
      else if (sum === 21) {
            message = "Yeah! You got Black Jack 🥳🥳"
            hasBlackJack = true
            hasStart = false
      }
      else {
            message = "Oh! No you have lost 😭😭"
            isAlive = false
            hasStart = false
      }
      MessageEl.textContent = message
}
function newCard() {
      if (isAlive === true && hasBlackJack === false) {
            let card = randomNumbers()
            sum += card
            Cards.push(card)
            renderGame()
      }
}

