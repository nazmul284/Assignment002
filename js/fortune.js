var fortunes = [
  "Don't cry because it's over, smile because it happened. -Dr. Seuss",
  "Good things come when you least expect them.",
  "Happy is the bride that the sun shines on.",
  "Be yourself; everyone else is already taken. -Oscar Wilde",
  "May the wind be always at your back.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. -Albert Einstein",
  "The new boat will find the old stones.",
  "Be the change that you wish to see in the world. -Mahatma Gandhi",
  "When fortune calls, offer her a chair. ",
  "When in doubt, don't. -Benjamin Franklin",
  "Every strike brings me closer to the next home run. -Babe Ruth",
  "Strive not to be a success, but rather to be of value. -Albert Einstein",
  "We become what we think about. -Earl Nightingale",
  "The mind is everything. What you think you become.  -Buddha",
  "An unexamined life is not worth living. -Socrates",
  "Eighty percent of success is showing up. -Woody Allen",
  "Whether you think you can or you think you can't, you're right. -Henry Ford",
  "The best revenge is massive success. -Frank Sinatra",
  "Believe you can and you're halfway there. -Theodore Roosevelt",
  "Fall seven times and stand up eight. -Japanese Proverb"
]

var fortune1 = document.getElementById('fortune1');

fortuneGenerator();

var changeAfter = setInterval(fortuneGenerator,10000);


function fortuneGenerator() {
  fortune1.textContent = fortunes[randomGenarator()];
}

function randomGenarator() {
  return Math.floor(Math.random() * fortunes.length);
}
