const rollDice = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
rollDice.addEventListener('click', () => {
    diceImageEl.src = `images/dice${random(1, 6)}.png`;
    diceImageEl.classList.add('animation');

    setTimeout(() => {
        diceImageEl.classList.remove('animation');
    }, 700);
});