document.addEventListener('DOMContentLoaded', function(){
  const topic = [' Object', 'Nature', 'Random', 'Person', 'Action', 'World'];
  const card = {Objects:[],
    Nature:[],
    Random:[],
    Person:[],
    Action:[],
    World:[]};

  function getAppendElement(element, behaviour, attribute){
    var el = document.querySelectorAll(element);
    switch (behaviour) {
      case 'html':
      el.innerHTML

        break;
      case 'attr':
      el.getAttribute(attribute)

        break;
      default:

    }
  }
}, false);
