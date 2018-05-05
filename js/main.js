// let Bounce = require('bounce.js');
const Oridomi = require('oridomi')
const cards = require('./cards')


document.addEventListener('DOMContentLoaded', function(){
  const topic = Object.entries(cards)[0][1].topic
  const card = Object.entries(cards)[0][1].card
  // console.log(cards);
  // console.log(topic); // This is an object with all the topics. Whoop.
  // console.log(card.World[0]);

    // console.log(Object.entries(cards)[0][1].topic);
    // console.log(Object.entries(cards)[0][1].card.World);
    
  function changeAttr(el, attr, attrProperty){
    document.querySelector(el).setAttribute(attr, attrProperty);
  };


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };


  function topicSelect() {
    let choosenTopic = topic[getRandomInt(topic.length)]
    // console.log(choosenTopic);
  };


  function drawCard(){
    let cardNum = getRandomInt(card.Random.length);//grabs random number to act as index for all cards
    const cardDom = document.getElementById('card');
    
    // console.log(cardNum);
    if (card.Random.length <= 0) {
      console.log('No more cards');
      return
    };
    topicSelect()


    

    for (const key in card) {
      if (card.hasOwnProperty(key)) {
        const element = card[key][cardNum];
        p = document.createElement('p')
        p.setAttribute('class', 'current-card')
        p.innerHTML = element
        cardDom.appendChild(p)

        // console.log(element);
        // ui rendering goes in here
      } ;
    };
    discardCard(cardNum)
  };


  function discardCard(cardNum) {
    for (const key in card) {
      let removed = `${card[key].splice(cardNum, 1)}`
    };
  }; // takes drawn card out of card array so that it is not drawn again


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
