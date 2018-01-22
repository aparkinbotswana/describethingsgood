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


  function changeAttr(el, attr, attrProperty){
    document.querySelector(el).setAttribute(attr, attrProperty);
  }


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  function topicSelect() {
    let choosenTopic = topic[getRandomInt(topic.length)]
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

  // function animationPlay() {
  //   document.querySelector('.animation-target').setAttribute('style', 'animation-play-state:running;');
  // }

  document.getElementById('draw').addEventListener('click', drawCard);
  // document.getElementById('draw').addEventListener('click', animationPlay);

  function animationPlay() {
    var bounce = new Bounce();
    bounce
    .translate({
      from: { x: -300, y: 0 },
      to: { x: 0, y: 0 },
      duration: 600,
      stiffness: 4
    })
    .scale({
      from: { x: 1, y: 1 },
      to: { x: 0.1, y: 2.3 },
      easing: "sway",
      duration: 800,
      delay: 65,
      stiffness: 2
    })
    .scale({
      from: { x: 1, y: 1},
      to: { x: 5, y: 1 },
      easing: "sway",
      duration: 300,
      delay: 30,
    })
    .applyTo(document.querySelectorAll(".animation-target"));
  }
  animationPlay();
}, false);
