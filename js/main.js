document.addEventListener('DOMContentLoaded', function(){
  const topic = [' Object', 'Nature', 'Random', 'Person', 'Action', 'World'];
  var card = {Objects:['object1', 'object2', 'object3', 'object4'],
    Nature:['nature1', 'nature2', 'nature3', 'nature4'],
    Random:['random1', 'random2', 'random3', 'random4'],
    Person:['person1', 'person2', 'person3', 'person4'],
    Action:['action1', 'action2', 'action3', 'action4'],
    World:['world1', 'world2', 'world3', 'world4']};


  function changeAttr(el, attr, attrProperty){
    var el = document.querySelector(el);
    el.setAttribute(attr, attrProperty)
  }


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  function drawCard(){
    var cardNum = getRandomInt(Object.entries(card)[0][1].length)
    var objectKey = 0
    if (Object.entries(card)[0][1].length <= 0) {
      console.log('No more cards');
      return
    }
    while (objectKey < 6) {
      if (objectKey == 6) {
      break;
      }
      console.log(Object.entries(card)[objectKey][1][cardNum]);
      objectKey++
    }
    discardCard(cardNum)
  }


  function discardCard(cardNum) {
    // takes drawn card out of card array so that it is not drawn again
  }


  document.getElementById('draw').addEventListener('click', drawCard);


}, false);
