
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
    event.preventDefault();
    const { email, password } = event.target.elements;
    if (email.value === "" || password.value === "") {
        return alert ("Всі поля мають бути заповнені!")
    }

   const formData = new FormData(event.currentTarget);

     console.log(Object.fromEntries(formData));
     form.reset();

      }



 
