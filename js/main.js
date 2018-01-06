document.addEventListener('DOMContentLoaded', function(){
  const topic = [' Object', 'Nature', 'Random', 'Person', 'Action', 'World'];
  const card = {Objects:['object1', 'object2', 'object3', 'object4'],
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
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
  }

  console.log(Object.entries(card));


  function drawCard(){

  }
}, false);
