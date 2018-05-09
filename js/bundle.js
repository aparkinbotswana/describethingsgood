(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const allCards = {
  topic: [" Object", "Nature", "Random", "Person", "Action", "World"],
  card: { 
    Object:["Brick", "Laptop", "Vending Machine", "A Spanner", "A Locket", "A Tyre", "A Licence", "A Ball", "A Hamburger", "A Stone", "A Coin", "A Tennis Racket", "A Test Tube", "A Quill", "A Lobby", "A Loaf", "A Bag", "A Kiln", "An Organ", "A Tube", "A Noodle", "A Boulder", "A Lyre", "A Safety Pin", "A Penny", "A Noose", "A Sack", "A Label", "A Dumpling", "A Lamp", "A Video Tape", "A Hamper", "A Saddle", "A Singlet", "A Microwave", "A Pitch", "A Pip", "A Helicopter", "A Rug", "A Ruby", "A Set Square", "A Microfilm", "A Wrench", "A Hammock", "An Overcoat", "A Van", "A Hose", "A Shotgun", "A Mitre", "A Model", "A Vulture", "A Mineral", "A Microscope", "A Bed", "A Prize", "A Present", "A Sketch", "A Clock", "A Fork", "A Laser", "A Jib", "A Bar Of Soap", "A Nappy", "A Knickerbocker", "A Knife", "A Jet", "A Lever", "A Letter", "A Ledge", "A Kebab", "A Jumper", "A Lip", "A Line", "A Log", "A Loft", "Contraband", "A Dungeon", "A Kettle", "A List", "A Sanction", "A Sanction", "Toothbrush", "A Saloon", "A Minesweeper", "A Portrait", "A Golf Club", "A Lantern", "Toffee", "A Latch", "A Honeycomb", "A Hod", "A Tool", "A Pistol", "A Steak", "A Lance", "A Fillet", "A Hub", "A House", "A Volcano", "Wax", "A Kimono", "A Harp", "A Ferry", "Gravy", "A Bonfire", "A Machete", "Wire", "A Fence", "A Carpet", "A Skateboard", "A Television", "A Tea Towel", "A Tail", "A Spud", "A Hob", "A Piano", "A Rainbow", "A Mud Hut", "A Fountain", "An Invoice", "Semtex", "A Hamstring", "A Grate", "A Granule", "A Grain", "A Haggis", "A Computer", "A Unit", "A Snare", "Tweezers", "An Aeroplane", "A Bikini", "A Poster", "A Drain", "A Compass", "A Shoulder", "A Cage", "A Snowman", "A Cricket Ball", "A Hatchery", "A Dial", "A Tee", "A Viola ", "A Road", "A Fish Hook", "An Accessory", "An Ace", "A Syringe", "A Stethascope", "A Scarf"],
    Nature:["A Silverfish", "A Meerkat", "A Sole", "A Frog", "A Conifer", "A Bluebell", "A Lilly-of-the-valley", "A Lemming", "A Laburnum", "A Puma", "A Gerbli", "A Curlew", "A Prawn", "A Deciduous Tree", "A Dab", "A Tick", "A Condor", "A Cod", "A Brussell Sprout", "A Grape", "An Apricot", "Salmon", "Rice", "A Walnut", "A Chaffinch", "A Centipede", "A Dragonfly", "A Dormouse", "A Pheasant", "A Baboon", "A Eucalyptus Tree", "A Reindeer", "A Dog", "A Rat", "A Wombat", "A Reed", "An Invertebrate", "A Genie", "A Wasp", "A Fire-fly", "A Finch", "A Flounder", "An Orangutan", "A Swede", "A Lobster", "A Cockatoo", "A Mollusc", "A Cucumber", "A Goldfish", "A Gecko", "Dill", "A Gene", "A Goose", "Rushes", "A Root", "A Mushroom", "Mackerel", "A Grouse", "An Earwig", "A Jackal", "A Beetle", "A Sloth", "A Bustard", "A Bedbug", "A Bear", "A Bat", "A Boa Constrictor", "A Giraffe", "A Turkey", "Bison", "A Venus Fly Trap", "Fungus", "A Vine", "Parsley", "An Ostrich", "A Rhinoceros", "A Werewolf", "A Bullock", "A Crab Apple", "A Hen", "A Carrot", "A Cobra", "A Chub", "A Gull", "A Hazel Nut", "A Herb", "A Crab", "A Caterpiller", "A Clam", "A Chameleon", "A Sycamore", "A Hedge", "A Limpet", "Jasmine", "A Penguin", "Mint", "Dove", "A Cherry", "A Clover", "A Salamander", "A Mule", "Seaweed", "A Potatoe", "A Fig", "Coral", "Lavender", "A Cricket", "A Crane", "A Magpie", "A Shark", "A Piranha", "A Roach", "A Bacterium", "A Peacock", "An Elephant", "An Electric Fish", "A Cygnet", "Cauliflower", "A Grass Snake", "A Redwood Tree", "A Marlin", "A Primrose", "A Bush Baby", "Fish", "A Daisy", "A Panda", "Larva", "A Flying-fish", "An Armadillo", "A Cicada", "A Hare", "A Guinea Fowl", "A Flea", "A Hedgehog", "A Hawk", "A Carnivore", "A Gannet", "Fruit", "A Ladybird", "A Leaf", "A Gosling", "A Black Mamba", "A Mammal", "A Glow-worm", "A Puppy", "A Lichen", "A Praying Mantis", "A Termite", "A Plant", "A Pike"],
    Random:["Salad", "Paint", "Cock Ring", "Satellite", "Certificate", "Traffic Light", "Tome", "Bumblebee", "A Barn Dance", "Consecutive", "Ad Lib", "A Conscience", "Vain", "A 'B' Movie", "Ventriloquy", "The Koran", "A Guarantee", "A Flyover", "A Furlong", "Morse Code", "Fluorescent", "A Wrestler", "A Horoscope", "Horizontal", "Hooligan", "Gremlin", "A Greengrocer", "Ugly", "Insufficient", "Retina", "Leisure", "An Impersonation", "Genial", "Presentation", "The Taxation Office", "Pegasus", "Basketball", "Barren", "A Punt", "A Snob", "Hypocrisy", "Magic", "Width", "Humanitarian", "Hesitant", "Flamenco", "An Influx", "Jealousy", "A Heap", "A Hermit", "Peculiar", "An Illusion", "Grog", "Gratitude", "Brittle", "A Groom", "In", "Rhythm", "Ultimate", "A Crush", "Devonshire Tea", "A Thunder Clap", "Laundry", "Unanimous", "Health", "An Umpire", "Dissent", "Arabic", "Perpetuate", "African National Congress", "Insobriety", "Obesity", "Insomnia", "Mimic", "Dyslexia", "Philanthropy", "Gracious", "Bogus", "Gradient", "Tomato Ketchup", "Equilibrium", "A Swab", "A Web", "Shame", "An Apocalypse", "Vodka", "A Verb", "Pretentious", "Geriatric", "A Broadside", "A Limerick", "Summer", "Evidently", "Credit", "Oxidisation", "A Fantasy", "A Genius", "An Expanse", "A Cafeteria", "Suction", "Indigenous", "Kind", "Idle", "A Knack", "A Remote Control", "A Signature", "Altruism", "Soap Opera", "A Soothsayer", "Liquid Paper", "The Queen's English", "A Graph", "Grammar", "An Injection", "A Seance", "Baked Beans", "Caustic", "An Ideal", "A Harness", "Merchandise", "Beforehand", "Anticlimax", "An Anogram", "Fractionality", "A Denture", "Despicable", "Desperate", "Alright", "A Boulevard", "Abrasive", "Acupuncture", "Actual", "Abroad", "Courage", "An Anticyclone", "Initiating", "A Demon", "Petrol", "An X-Ray", "Stew", "An Accountant", "An Accomplice", "An Accident", "An Abyss", "Absolute", "An Aboriginal", "Abscence", "A Logarithm", "A Camera Lens", "Sulphuric Acid"],
    Person:["Angela Merkel", "Marcus Aurelius", "Rene Descartes", "Alan Turing", "King Arthur", "Anna Winter", "Jesus Christ", "Kathy Freeman", "Arnold Schwarzenegger", "Estee Lauder", "Chairman Mao", "George Washington", "Emperor Constantine", "Socrates", "Karl Marx", "Napoleon Bonaparte", "Sir Isaac Newton", "Confucius", "Ramses II", "Alexander the Great", "Moses", "Galileo Galilei", "Aristotle", "Saladin", "Voltaire", "Catherine the Great", "Mozart", "Ataturk", "Bach", "Johann Gutenberg", "Genghis Kahn", "Dwight Eisenhower", "William Wilberforce", "Nikola Tesla", "Alexander Fleming", "Princess Diana", "Muhammad", "William Shakespeare", "Brigitte Bardot", "Hillary Clinton", "Joan of Arc", "Marie Antoinette", "Cristiano Ronaldo", "Emmeline Pankhurst", "Julie Andrews", "Florence Nightingale", "Marie Curie", "Stephen Hawking", "Tim Berners Lee", "Lance Armstrong", "Shakira", "Jon Stewart", "Wright Brothers", "Rupert Murdoch", "Al Gore", "Sacha Baron Cohen", "George Clooney", "Kylie Minogue", "Stephen King", "Your Mum", "Marilyn Monroe", "Ian Thorpe", "Big Kev", "Abraham Lincoln", "Mother Teresa", "John F. Kennedy", "Martin Luther King", "Nelson Mandela", "Queen Elizabeth II", "Winston Churchill", "Donald Trump", , "Bill Gates", "Muhammad Ali", "Mahatma Gandhi", "Margaret Thatcher", "Christopher Columbus", "Charles Darwin", "Elvis Presley", "Albert Einstein", "Paul McCartney", "Queen Victoria", "Pope Francis", "Leonardo da Vinci", "Vincent Van Gogh", "Franklin D. Roosevelt","Pope John Paul II", "Thomas Edison", "Rosa Parks", "Ludwig Beethoven", "Oprah Winfrey", "Indira Gandhi", "Julius Caesar", "Edmund Barton", "George Orwell", "Dalai Lama", "Walt Disney", "Neil Armstrong", "Peter Sellers", "Barack Obama", "Malcolm X", "J.K.Rowling", "Richard Branson", "Pele", "Angelina Jolie", "John Lennon", "Henry Ford", "Joseph Stalin", "Lord Baden Powell", "Michael Jordon", "George Bush", "Vladimir Lenin", "Fidel Castro", "Leo Tolstoy", "Pablo Picasso", "Oscar Wilde", "Coco Chanel", "Charles de Gaulle", "Amelia Earhart", "John Keynes", "Louis Pasteur", "Adolf Hitler", "Sting", "Mary Magdalene", "Alfred Hitchcock", "Michael Jackson", "Madonna", "Mata Hari", "Cleopatra", "Grace Kelly", "Steve Jobs", "Ronald Reagan", "Bob Geldof", "Leon Trotsky", "Roger Federer", "Sigmund Freud", "Sun Tzu", "Katherine Hepburn", "Audrey Hepburn", "David Beckham", "Tiger Woods", "Usain Bolt", "Prince Charles", "Jacqueline Kennedy", "C.S. Lewis", "Harper Lee", "Billie Holiday", "J.R.R. Tolkien", "Anne Frank", "Prince"],
    Action:["Guzzling", "Feeding", "Lingering", "Linking", "Conning", "Expecting", "Prancing", "Roaming", "Laughing", "Fleecing", "Activating", "Imbibing", "Contaminating", "Stealing", "Sneezing", "Doubting", "Naming", "Struggling", "Joining", "Cornering", "Jeopardizing", "Sewing", "Gripping", "Immunizing", "Happening", "Immigrating", "Huddling", "Howling", "Heating", "Hurrying", "Hurdling", "Hoping", "Bedraggled", "Grading", "Hailing", "Containing", "Beckoning", "Repeating", "Erecting", "Hugging", "Humming", "Withdrawing", "Earning", "Fretting", "Steaming", "Hooking", "Herding", "Pinching", "Swiping", "Revealing", "Sailing", "Hallucinating", "Halting", "Snoring", "Abusing", "Absconding", "Abiding", "Coming", "Interviewing", "Overflowing", "Undress", "Affecting", "Overtaking", "Adding", "Pacing", "Cleansing", "Feasting", "Ageing", "Conveying", "Captivating", "Peddling", "Constraining", "Dozing", "Blocking", "Existing", "Cooling", "Borrowing", "Bioling", "Practising", "Reporting", "Conquering", "Carrying", "Capitalising", "Connecting", "Bubbling", "Carving", "Aspiring", "Blooming", "Grating", "Repenting", "Rebelling", "Bustling", "Congregating", "Consolidating", "Striking", "Bugging", "Push Starting", "Parachuting", "Governing", "Throwing", "Lying", "Drooping", "Studying", "Bobbing", "Unscrewing", "Premeditating", "Stargazing", "Weaving", "Frying", "Gloating", "Converting", "Hatching", "Immersing", "Fielding", "Performing", "Equating", "Abdicating", "Charging", "Contravening", "Sprinting", "Signing", "Constructing", "Growing Up", "Acting", "Trying", "Seating", "Traveling", "Coughing", "Blowing", "Manufacturing", "Sleeping", "Nibbling", "Fighting", "Camping", "Jilting", "Walking", "Interbreeding", "Softening", "Yodeling", "Proving", "Threatening", "Picketing", "Insulting", "Accruring", "Jarring", "Aching", "Typing", "Acquiring", "Acknowledging", "Scanning"],
    World:["Statue of Liberty", "Eiffel Tower", "Big Ben", "Leaning Tower of Pisa", "Colosseum", "Empire State Building", "Hollywood Sign", "Golden Gate Bridge", "Notre Dame", "Tokyo Tower", "London Eye", "St. Peter's Basilica", "Sagrada Familia", "Little Mermaid", "Great Wall of China", "Terracotta Army", "Hagia Sophia", "Oriental Pearl Tower", "Ponte Vecchio", "Wailing Wall", "Loch Ness", "Mecca", "Sydney Harbor Bridge", "Sistine Chapel", "Spanish Steps", "Bridge of Sighs", "Summer Palace", "The Red Sea", "Heaven", "The Congo", "Freedom Tower", "Mykonos Windmills", "Gateway Arch", "Shanghai World Finacial Center", "Moulin Rouge", "Tehran", "Santorini", "Juliet's Balcony", "The Dead Sea", "Goa", "Guatemala", "The River Ganges", "Petra", "Germany", "Iceland", "Bombay", "Dehli", "Mayan Pyramids", "Vesuvio", "Pentagon", "Madagascar", "Brandenburg Gate", "Temple of Luxor", "Central Park", "The Gherkin", "The Shard", "Washington Monument", "Israel", "Happy Valley", "Alcatraz", "Rock of Gibraltar", "Westminster Abbey", "Space Needle", "Arena Di Verona", "The River Thames", "Mount Fuji", "Mount Rushmore", "The River Nile", "Sacre Coeur", "Windsor Castle", "Great Barrier Reef", "Alaska", "Las Vegas", "Antarctica", "Madrid Palace", "Tower of London", "Niagara Falls", "The Grand Canyon", "Mexico", "Christ the Redeemer", "Machu Picchu", "Edinburgh Castle", "Milan", "Pompeii", "Matterhorn", "Versailles", "Buckingham Palace", "Utopia", "Louvre Museum", "The White House", "Times Square", "Disneyland", "Trevi Fountain", "Acropolis", "Brooklyn Bridge", "Willis Tower", "Capitol Hill", "Mount Everest", "The Forbidden City", "Europe", "The Great Sphinx", "Pyramids of Giza", "Taj Mahal", "Uluru", "Kilimanjaro", "Stonehenge", "Berlin Wall", "Arc de Triomphe", "Swiss Alps", "Sydney Opera House", "Bath", "England", "Belgrade", "Portofino", "Atomium", "California", "Chapel Bridge", "Brittany", "Cambridge", "Brighton Pier", "Rhodesia", "Table Mountain", "Newgrange", "Trafalgar Square", "Piccadilly Circus", "Kremlin", "Blue Lagoon", "Blue Mosque", "Oxford University", "British Museum", "Winter Palace", "Hollywood Walk of Fame", "Death Valley", "Guggenheim Museum", "Giant's Causeway", "Dunkirk", "The Serengeti Plains", "East Timor", "Fiji", "Bali", "Damascus", "Thailand", "South Africa", "France", "The Tasman Sea", "Canada", "Zurich", "Marrakesh", "Greenland", "The Arctic Circle"]
  }
};

module.exports={allCards}

 






 
},{}],2:[function(require,module,exports){
const cards = require('./cards')
let firstTurn = true


document.addEventListener('DOMContentLoaded', function(){
  const topicCard = document.getElementById('topic-card')
  const topic = Object.entries(cards)[0][1].topic
  const card = Object.entries(cards)[0][1].card
  console.log(cards);

    
  // function changeAttr(el, attr, attrProperty){
  //   document.querySelector(el).setAttribute(attr, attrProperty);
  // };


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };


  function topicSelect() {
    let choosenTopic = topic[getRandomInt(topic.length)]
    topicCard.innerHTML = choosenTopic
  }; // Selects the topic for the current round

  function drawCard(){

    if (card.Random.length <= 0) {
      console.log('No more cards');
      return
    }; // breaks out of function if all cards have been used.

    document.getElementById("timer").innerHTML = ''
    let countDown = 30
    const currentCards = [];
    const cardDom = document.getElementById('card');
    let currentCardLength = card.Random.length // Because we splice the card out of the array of all cards, You need to save the array.length before this happens so that you can get a consistent number being passed through as the max for getRandomInt


    if (firstTurn === false) {
      let previousCards = document.getElementsByClassName('current-card');
      for (let i = 5; i > -1; i--) {
        previousCards[i].remove();
      }
    } // Removes previous cards from DOM. IF statement is required because, initially, there is nothing in the curren-card class so it will through an error
    
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


    const timer = function(){
      console.log(countDown);
      if (countDown === 0) {
        document.getElementById("timer").innerHTML = "FINISHED!";
        clearInterval(timerInterval);
        return
      }
      document.getElementById("timer").innerHTML = countDown + "s ";
      countDown -= 1
    } // MUST FIX TIMED
    // CURRENTLY RUNS AND RESETS AT EVERY CLICK. SHOULD CONTINUE TO COUNTDOWN AND NOT STOP. 
    // CONSIDER USING BOOLEAN WHICH IS CHECKED?


    const timerInterval = setInterval(timer, 1000);
  };



  document.getElementById('draw').addEventListener('click', drawCard);
  // document.getElementById('draw').addEventListener('click', animationPlay);
}, false);

},{"./cards":1}]},{},[2]);
