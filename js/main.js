// let Bounce = require('bounce.js');
const Oridomi = require('oridomi')
const cards = require('./cards')
let firstTurn = true



document.addEventListener('DOMContentLoaded', function(){
  const topic = Object.entries(cards)[0][1].topic
  const card = Object.entries(cards)[0][1].card
  console.log(cards);
  // console.log(topic); // This is an object with all the topics. Whoop.
  // console.log(card.World[0]);

    // console.log(Object.entries(cards)[0][1].topic);
    // console.log(Object.entries(cards)[0][1].card.World);
    
  // function changeAttr(el, attr, attrProperty){
  //   document.querySelector(el).setAttribute(attr, attrProperty);
  // };


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };


  function topicSelect() {
    let choosenTopic = topic[getRandomInt(topic.length)]
    // console.log(choosenTopic);
  }; // Selects the topic for the current round

  function drawCard(){

    if (firstTurn === false) {
      let previousCards = document.getElementsByClassName('current-card');
      for (let i = 5; i > -1; i--) {
        previousCards[i].remove();
      }
    } // Removes cards altogether from DOM.
    

    // Following code to be used to get random cards all the time ////////////////////
    const currentCards = [];
    let currentCardLength = card.Random.length // Because we splice the card out of the array of all cards, You need to save the array.length before this happens so that you can get a consistent number being passed through as the max for getRandomInt

    // let cardNum = getRandomInt(currentCardLength); // CHECK THIS SHIT BRO This line of code will need to get put in with the FOR LOOP so that a random number is generate for every card pick
    ////////////////////////////////

    // let cardNum = getRandomInt(currentCardLength);//grabs random number to act as index for all cards
    const cardDom = document.getElementById('card');
    
    // console.log(cardNum);
    if (card.Random.length <= 0) {
      console.log('No more cards');
      return
    };
    topicSelect()

    const cardsSelect = function(currentCardLength) {
      
    } 
    
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


    // discardCard(cardNum)
    firstTurn = false
  };


  // function discardCard(cardNum) {
  //   for (const key in card) {
  //     let removed = `${card[key].splice(cardNum, 1)}`
  //   };
  // }; // takes drawn card out of card array so that it is not drawn again
    // May not need this function anymore based on current flow of code. Decide this later when everything comes together.


  // function animationPlay() {
  //   let bounce = new Bounce();
  //   bounce
  //   .rotate({
  //       from: 0,
  //       to: 360,
  //       easing: "bounce",
  //       duration: 1000,
  //       delay: 0,
  //       bounce: 4,
  //       stiffness: 3
  //   })
  //   .skew({
  //       easing: "sway",
  //       duration: 1000,
  //       delay: 0,
  //       bounce: 4,
  //       stiffness: 3
  //   })
  //   .applyTo(document.querySelectorAll(".animation-target"));
  // } //animation for cards


  document.getElementById('draw').addEventListener('click', drawCard);
  // document.getElementById('draw').addEventListener('click', animationPlay);
}, false);
