const allCards = {
  topic: [' Object', 'Nature', 'Random', 'Person', 'Action', 'World'],
  card: { 
    Objects:['Brick', 'Laptop', 'Vending Machine', 'object3', 'object4'],
    Nature:['nature0', 'nature1', 'nature2', 'nature3', 'nature4'],
    Random:['Salad', 'Paint', 'Cock Ring', 'Satellite', 'Certificate', 'Traffic Light', 'Tome', 'Bumblebee', ],
    Person:['Angela Merkel', 'Marcus Aurelius', 'Rene Descartes', 'Alan Turing', 'King Arthur', 'Anna Winter', 'Jesus Christ', 'Kathy Freeman', 'Arnold Schwarzenegger', 'Estee Lauder', 'Chairman Mao', 'George Washington', 'Emperor Constantine', 'Socrates', 'Karl Marx', 'Napoleon Bonaparte', 'Sir Isaac Newton', 'Confucius', 'Ramses II', 'Alexander the Great', 'Moses', 'Galileo Galilei', 'Aristotle', 'Saladin', 'Voltaire', 'Catherine the Great', 'Mozart', 'Ataturk', 'Bach', 'Johann Gutenberg', 'Genghis Kahn', 'Dwight Eisenhower', 'William Wilberforce', 'Nikola Tesla', 'Alexander Fleming', 'Princess Diana', 'Muhammad', 'William Shakespeare', 'Brigitte Bardot', 'Hillary Clinton', 'Joan of Arc', 'Marie Antoinette', 'Cristiano Ronaldo', 'Emmeline Pankhurst', 'Julie Andrews', 'Florence Nightingale', 'Marie Curie', 'Stephen Hawking', 'Tim Berners Lee', 'Lance Armstrong', 'Shakira', 'Jon Stewart', 'Wright Brothers', 'Rupert Murdoch', 'Al Gore', 'Sacha Baron Cohen', 'George Clooney', 'Kylie Minogue', 'Stephen King', 'Your Mum', 'Marilyn Monroe', 'Ian Thorpe', 'Big Kev', 'Abraham Lincoln', 'Mother Teresa', 'John F. Kennedy', 'Martin Luther King', 'Nelson Mandela', 'Queen Elizabeth II', 'Winston Churchill', 'Donald Trump', , 'Bill Gates', 'Muhammad Ali', 'Mahatma Gandhi', 'Margaret Thatcher', 'Christopher Columbus', 'Charles Darwin', 'Elvis Presley', 'Albert Einstein', 'Paul McCartney', 'Queen Victoria', 'Pope Francis', 'Leonardo da Vinci', 'Vincent Van Gogh', 'Franklin D. Roosevelt','Pope John Paul II', 'Thomas Edison', 'Rosa Parks', 'Ludwig Beethoven', 'Oprah Winfrey', 'Indira Gandhi', 'Julius Caesar', 'Edmund Barton', 'George Orwell', 'Dalai Lama', 'Walt Disney', 'Neil Armstrong', 'Peter Sellers', 'Barack Obama', 'Malcolm X', 'J.K.Rowling', 'Richard Branson', 'Pele', 'Angelina Jolie', 'John Lennon', 'Henry Ford', 'Joseph Stalin', 'Lord Baden Powell', 'Michael Jordon', 'George Bush', 'Vladimir Lenin', 'Fidel Castro', 'Leo Tolstoy', 'Pablo Picasso', 'Oscar Wilde', 'Coco Chanel', 'Charles de Gaulle', 'Amelia Earhart', 'John Keynes', 'Louis Pasteur', 'Adolf Hitler', 'Sting', 'Mary Magdalene', 'Alfred Hitchcock', 'Michael Jackson', 'Madonna', 'Mata Hari', 'Cleopatra', 'Grace Kelly', 'Steve Jobs', 'Ronald Reagan', 'Bob Geldof', 'Leon Trotsky', 'Roger Federer', 'Sigmund Freud', 'Sun Tzu', 'Katherine Hepburn', 'Audrey Hepburn', 'David Beckham', 'Tiger Woods', 'Usain Bolt', 'Prince Charles', 'Jacqueline Kennedy', 'C.S. Lewis', 'Harper Lee', 'Billie Holiday', 'J.R.R. Tolkien', 'Anne Frank', 'Prince'],
    Action:['action0', 'action1', 'action2', 'action3', 'action4'],
    World:['Statue of Liberty', 'Eiffel Tower', 'Big Ben', 'Leaning Tower of Pisa', 'Colosseum', 'Empire State Building', 'Hollywood Sign', 'Golden Gate Bridge', 'Notre Dame', 'Tokyo Tower', 'London Eye', "St. Peter's Basilica", 'Sagrada Familia', 'Little Mermaid', 'Great Wall of China', 'Terracotta Army', 'Hagia Sophia', 'Oriental Pearl Tower', 'Ponte Vecchio', 'Wailing Wall', 'Loch Ness', 'Mecca', 'Sydney Harbor Bridge', 'Sistine Chapel', 'Spanish Steps', 'Bridge of Sighs', 'Summer Palace', 'Mount Etna', 'Lascaux Caves', 'Bryce Canyon National Park', 'Freedom Tower', 'Mykonos Windmills', 'Gateway Arch', 'Shanghai World Finacial Center', 'Moulin Rouge', 'Redwood National Park', 'Santorini', "Juliet's Balcony", 'Berlin Cathedral', 'Helsinki Cathedral', 'Tivoli Gardens', 'Yellowstone National Park', 'Petra', 'Potala Palace', 'Victoria Falls', 'Angkor Wat', 'Cloud Gate', 'Mayan Pyramids', 'Vesuvio', 'Pentagon', 'Cologne Cathedral', 'Brandenburg Gate', 'Temple of Luxor', 'Central Park', 'The Gherkin', 'The Shard', 'Washington Monument', 'Iguazu National Park', 'White Cliffs of Dover', 'Alcatraz', 'Rock of Gibraltar', 'Westminster Abbey', 'Space Needle', 'Arena Di Verona', 'Rialto Bridge', 'Mount Fuji', 'Mount Rushmore', "St. Paul's Cathedral", 'Sacre Coeur', 'Windsor Castle', 'Great Barrier Reef', 'Petronas Twin Towers', 'Las Vegas', 'Mont St. Michel', 'Madrid Palace', 'Tower of London', 'Niagara Falls', 'The Grand Canyon', 'CN Tower', 'Christ the Redeemer', 'Machu Picchu', 'Edinburgh Castle', 'Florence Cathedral', 'Pompeii', 'Matterhorn', 'Versailles', 'Buckingham Palace', 'Manneken Pis', 'Louvre Museum', 'The White House', 'Times Square', "St. Mark's Basilica", 'Trevi Fountain', 'Acropolis', 'Brooklyn Bridge', 'Willis Tower', 'Capitol Hill', 'Mount Everest', 'The Forbidden City', 'Tower Bridge', 'The Great Sphinx', 'Pyramids of Giza', 'Taj Mahal', 'Uluru', 'Kilimanjaro', 'Stonehenge', 'Berlin Wall', 'Arc de Triomphe', "St. Basil's Cathedral", 'Sydney Opera House', 'Bath, England', 'Disneyland', 'Portofino', 'Atomium', 'Piazza Del Campo', 'Chapel Bridge', 'Pond Du Garre', 'Papel Palace', 'Brighton Pier', 'Everglades National Park', 'Table Mountain', 'Newgrange', 'Trafalgar Square', 'Piccadilly Circus', 'Kremlin', 'Blue Lagoon', 'Blue Mosque', 'Oxford University', 'British Museum', 'Winter Palace', 'Hollywood Walk of Fame', 'Death Valley', 'Guggenheim Museum', "Giant's Causeway"]
  }
};

module.exports={allCards}

 






 