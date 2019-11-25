'use strict';

//// Individual validation

function validateEmail() {
    const emailError = document.querySelector('#error-email');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
        inputEmail.classList.remove('input-error');
        emailError.classList.add('hidden');
        return (true);
    } else {
        inputEmail.classList.add('input-error');
        emailError.classList.remove('hidden');
        return (false);
    }
}

function validateTelf() {
    const telfError = document.querySelector('#error-telf');
    if (/^\d+$/.test(inputTelf.value)) {
        inputTelf.classList.remove('input-error');
        telfError.classList.add('hidden');
        return (true);
    } else {
        inputTelf.classList.add('input-error');
        telfError.classList.remove('hidden');
        return (false);
    }
}

inputEmail.addEventListener('change', validateEmail);
inputTelf.addEventListener('change', validateTelf);

const globalError = document.querySelector('#error-name-job');

function validateFullName() {
    if (inputFullName.value === '') {
        inputFullName.classList.add('input-error')
        return (false);
    } else {
        inputFullName.classList.remove('input-error')
        return (true);
    }
}

function validateJob() {
    if (inputJob.value === '') {
        inputJob.classList.add('input-error')
        return (false);
    } else {
        inputJob.classList.remove('input-error')
        return (true);
    }
}


function validateAll() {
    if (validateJob() === true && validateFullName() === true && validateEmail() === true && validateTelf() === true) {
        globalError.classList.add('hidden');
    }
    else {
        globalError.classList.remove('hidden');
    }

};

formTopShare.addEventListener('click', validateAll);




/////////////////////////////////////////////////////////
// form validation

const cardForm = document.querySelector('#card__form');
const buttonCreate = document.querySelector('#btn-create');

function inactiveButton() {
    if (cardForm.checkValidity() === true) {
        buttonCreate.classList.remove('btn-create-inactive');
    } else {
        buttonCreate.classList.add('btn-create-inactive');
    }
}

formTopShare.addEventListener('click', inactiveButton);

