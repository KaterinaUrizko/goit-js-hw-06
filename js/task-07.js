const inputForm = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

inputForm.addEventListener('input', onInputChange);
    
function onInputChange(){

    span.style.fontSize = `${inputForm.value}px`;
}

