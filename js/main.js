document.addEventListener('DOMContentLoaded', function(){
  const topic = [' Object', 'Nature', 'Random', 'Person', 'Action', 'World'];
  const card = {Objects:[],
    Nature:[],
    Random:[],
    Person:[],
    Action:[],
    World:[]};


  function changeAttr(el, attr, attrProperty){
    var el = document.querySelector(el);
    el.setAttribute(attr, attrProperty)
  }


  changeAttr('#draw', 'style', 'color:red;')

}, false);
