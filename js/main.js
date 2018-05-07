const Oridomi = require('oridomi')
const cards = require('./cards')
let firstTurn = true



document.addEventListener('DOMContentLoaded', function(){
  const topicCard = document.getElementById('topic-card')
  const topic = Object.entries(cards)[0][1].topic
  const card = Object.entries(cards)[0][1].card
  console.log(cards);
  // console.log(topic); // This is an object with all the topics. Whoop.
  // console.log(card.World[0]);

    
  // function changeAttr(el, attr, attrProperty){
  //   document.querySelector(el).setAttribute(attr, attrProperty);
  // };


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };


  function topicSelect() {
    let choosenTopic = topic[getRandomInt(topic.length)]
    topicCard.innerHTML = choosenTopic
    // console.log(choosenTopic);
  }; // Selects the topic for the current round

  function drawCard(){
    if (card.Random.length <= 0) {
      console.log('No more cards');
      return
    };

    const currentCards = [];
    const cardDom = document.getElementById('card');
    let currentCardLength = card.Random.length // Because we splice the card out of the array of all cards, You need to save the array.length before this happens so that you can get a consistent number being passed through as the max for getRandomInt

    if (firstTurn === false) {
      let previousCards = document.getElementsByClassName('current-card');
      for (let i = 5; i > -1; i--) {
        previousCards[i].remove();
      }
    } // Removes previous cards from DOM.
    
    // console.log(cardNum);
    topicSelect() //chooses the topic for the round.

    
    for (const key in card) {
      if (card.hasOwnProperty(key)) {
        let cardNum = getRandomInt(currentCardLength)
        // currentCards.push(`${card[key].splice(cardNum, 1)}`);
        currentCards.push(`${card[key].splice(cardNum, 1)}`)
        // console.log(currentCards);
        // console.log(card[key].length);
      } ;
    };


    for (let i = 0; i < currentCards.length; i++) {
      // console.log(currentCards[i]);
      p = document.createElement('p')
      p.setAttribute('class', 'current-card')
      p.innerHTML = currentCards[i]
      cardDom.appendChild(p)

    } // ui rendering goes in here

    firstTurn = false
  };
  document.getElementById('draw').addEventListener('click', drawCard);
  // document.getElementById('draw').addEventListener('click', animationPlay);
}, false);
