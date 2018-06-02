const cards = require('./cards')

document.addEventListener('DOMContentLoaded', function(){
  let newCard = cards.allCards.card
  let currentTopic = cards.allCards.topic
  let count = 30
  const cardDom = document.getElementById('card') 
  const drawCard = document.getElementById('draw')
  let firstTurn = true


  const choosenCard = function(){
    choosenTopic()

    if (count === 30) {
      const countInterval = setInterval(timer, 1000)
    } else if (count === 0){
      count = 30
    }

    if (firstTurn === false) {    
      let previousCard = document.getElementsByClassName('current-card');
      for (let i = 5; i > -1; i--) {
        previousCard[i].remove()
      }
    }


    for (const key in newCard) {
      let index = randomNum(newCard[key].length)
      // console.log(index);
      // console.log(newCard[key][index]);
      let p = document.createElement('p')
      p.innerHTML = newCard[key][index]
      p.setAttribute('class', 'current-card')
      cardDom.appendChild(p)

    }  
    firstTurn = false
  }

  const randomNum = function(max){
    return Math.floor(Math.random() * max)
  }


  const choosenTopic = function(){
    if (firstTurn === false) {
      document.getElementsByClassName('active-topic')[0].classList.remove('active-topic')  
    }
    let index = randomNum(currentTopic.length)
    console.log(currentTopic[index]);
    document.getElementById(currentTopic[index]).classList.add('active-topic')
  }

  const timer = function (){
    if (count > -1) {
      console.log(count);
      document.getElementById('timer').innerHTML = count
      count -= 1
    }
  }

  drawCard.addEventListener('click', choosenCard)
}, false);
