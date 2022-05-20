const inputForm = document.querySelector('#validation-input');

inputForm.addEventListener('blur', onInputBlur)

function onInputBlur() {

    
    if (inputForm.value.length === Number(inputForm.dataset.length) ) {

        inputForm.classList.remove('invalid')
        inputForm.classList.add('valid')
        
    }
    else
 {
        inputForm.classList.add('invalid')
        inputForm.classList.remove('valid')
    }
        
    }
    






// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);

// refs.input.addEventListener('input', onInputChange);
// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// function onInputFocus() {console.log('Инпут получил фокус - событие focus');}
// function onInputBlur() {console.log('Инпут потерял фокус - событие blur');}
// function onInputChange(event) {refs.nameLabel.textContent = event.currentTarget.value;}
// function onLicenseChange(event) {refs.btn.disabled = !event.currentTarget.checked;}