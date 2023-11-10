const sayings = [
  "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.",
  "The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent.",
  "The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not a champion. That's what most people lack, having the guts to go on and just say they'll go through the pain no matter what happens.",
  "My relationship to power and authority is that I'm all for it. People need somebody to watch over them. Ninety-five percent of the people in the world need to be told what to do and how to behave.",
  "I'm sure a lot of people out there make mistakes."
];

const getRandomSaying = () => {
  return sayings[Math.floor(Math.random()*sayings.length)];
};

const runApp = () => {
  let saying = getRandomSaying();
  console.log(`Arnie says "Relax."`)
  setTimeout(() => {
    console.log(`Just kidding! He thinkgs that "${saying}"`);
  }, 1500);
};

runApp();