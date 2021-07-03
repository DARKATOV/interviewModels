/* inicio  23:30  02/07/2021 */

const valueCounter = document.getElementById('value');
const buttonDown = document.getElementById('buttonDown');
const buttonReset = document.getElementById('buttonReset');
const buttonPlus = document.getElementById('buttonPlus');
let interCounter = 0;

buttonDown.addEventListener("click", () => {
    interCounter = interCounter - 1;
    valueCounter.textContent = interCounter;
});

buttonReset.addEventListener("click", () => {
    interCounter = 0;
    valueCounter.textContent = interCounter;
});

buttonPlus.addEventListener("click", () => {
    interCounter = interCounter + 1;
    valueCounter.textContent = interCounter;
});
