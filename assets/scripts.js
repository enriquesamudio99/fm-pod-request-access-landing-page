const form = document.getElementById('form');
const emailInput = document.getElementById('emailInput');

const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

document.addEventListener('DOMContentLoaded', () => initApp());

const initApp = () => {

    emailInput.value = '';
    form.addEventListener('submit', submitForm);

}

const submitForm = (e) => {

    e.preventDefault();

    const email = emailInput.value.toLowerCase();

    if (!email.match(re)) {
        emailInput.classList.add('form__input--invalid');
        return;
    } 

    emailInput.classList.remove('form__input--invalid');
    window.location.reload();

}