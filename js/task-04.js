
const refs = {
    spanEl: document.querySelector('#value'),
    decremetBtn : document.querySelector("[data-action='decrement']"),
    incrementBtn: document.querySelector("[data-action='increment']"),
}

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    
    refs.spanEl.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    refs.spanEl.textContent = counterValue;
};

refs.decremetBtn.addEventListener('click', decrement);
refs.incrementBtn.addEventListener('click', increment)