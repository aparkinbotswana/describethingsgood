var Bounce = require('bounce.js');
document.addEventListener('DOMContentLoaded', function(){
  const topic = [' Object', 'Nature', 'Random', 'Person', 'Action', 'World'];
  var card = {Objects:['object0', 'object1', 'object2', 'object3', 'object4'],
    Nature:['nature0', 'nature1', 'nature2', 'nature3', 'nature4'],
    Random:['random0', 'random1', 'random2', 'random3', 'random4'],
    Person:['person0', 'person1', 'person2', 'person3', 'person4'],
    Action:['action0', 'action1', 'action2', 'action3', 'action4'],
    World:['world0', 'world1', 'world2', 'world3', 'world4']};

    // console.log(Object.entries(card)[0][1][0]);
    // console.log(Object.entries(card)[1][1]);
    // console.log(Object.entries(card)[2][1]);
    // console.log(Object.entries(card)[3][1]);
    // console.log(Object.entries(card)[4][1]);
    // console.log(Object.entries(card)[5][1]);
    console.log(card);


  function changeAttr(el, attr, attrProperty){
    document.querySelector(el).setAttribute(attr, attrProperty);
  }


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  function topicSelect() {
    let choosenTopic = topic[getRandomInt(topic.length)]
    console.log(choosenTopic);
  }


  function drawCard(){
    var cardNum = getRandomInt(Object.entries(card)[0][1].length)
    let objectKey = 0
    if (Object.entries(card)[0][1].length <= 0) {
      console.log('No more cards');
      return
    }
    topicSelect()
    while (objectKey < 6) {
      if (objectKey == 6) {
      break;
      }
      //draw card ui stuff goes here YUMMY!!!
      console.log(Object.entries(card)[objectKey][1][cardNum]);
      objectKey++
    }
    discardCard(cardNum)
  }


  function discardCard(cardNum) {
    for (const key in card) {
      let removed = `${card[key].splice(cardNum, 1)}`
    }
  } // takes drawn card out of card array so that it is not drawn again


  function animationPlay() {
    let bounce = new Bounce();
    bounce
    .rotate({
        from: 0,
        to: 360,
        easing: "bounce",
        duration: 1000,
        delay: 0,
        bounce: 4,
        stiffness: 3
    })
    .skew({
        easing: "sway",
        duration: 1000,
        delay: 0,
        bounce: 4,
        stiffness: 3
    })
    .applyTo(document.querySelectorAll(".animation-target"));
  } //animation for cards


  document.getElementById('draw').addEventListener('click', drawCard);
  document.getElementById('draw').addEventListener('click', animationPlay);
}, false);
