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

// function validateTelf() {
//     const telfError = document.querySelector('#error-telf');
//     if (/^\d+$/.test(inputTelf.value)) {
//         inputTelf.classList.remove('input-error');
//         telfError.classList.add('hidden');
//         return (true);
//     } else {
//         inputTelf.classList.add('input-error');
//         telfError.classList.remove('hidden');
//         return (false);
//     }
// }

inputEmail.addEventListener('change', validateEmail);
// inputTelf.addEventListener('change', validateTelf);

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

const imageInput = document.querySelector('#image-input');
function validateImage() {
    const imageError = document.querySelector('#error-image');
    const localStoredData = JSON.parse(localStorage.getItem('Details'));
    if (/.(gif|jpeg|jpg|png)$/i.test(imageInput.value) || localStoredData.photo !== '') {
        imageError.classList.add('hidden');
        return (true);
    } else {
        imageError.classList.remove('hidden');
        return (false);
    }
}
imageInput.addEventListener('change', validateImage);

function validateLinkedin() {
    const linkedinError = document.querySelector('#error-linkedin');

    if (inputLinkedin.value === '') {
        inputLinkedin.classList.add('input-error');
        linkedinError.classList.remove('hidden');
        return (false);
    } else {
        inputLinkedin.classList.remove('input-error');
        linkedinError.classList.add('hidden');
        return (true);
    }
}

function validateGithub() {
    const githubError = document.querySelector('#error-github');

    if (inputGithub.value === '') {
        inputGithub.classList.add('input-error');
        githubError.classList.remove('hidden');
        return (false);
    } else {
        inputGithub.classList.remove('input-error');
        githubError.classList.add('hidden');
        return (true);
    }
}

const cardForm = document.querySelector('#card__form');
const buttonCreate = document.querySelector('#btn-create');

function validateAll() {
    if (validateJob() === true && validateFullName() === true && validateEmail() === true && validateLinkedin() === true && validateGithub() === true && validateImage() === true) {
        globalError.classList.add('hidden');
        buttonCreate.classList.remove('btn-create-inactive');
        return true;
    }
    else {
        globalError.classList.remove('hidden');
        buttonCreate.classList.add('btn-create-inactive');
        validateJob();
        validateFullName();
        validateEmail();
        validateLinkedin();
        validateGithub();
        validateImage();
        return false;
    }

};

formTopShare.addEventListener('click', validateAll);






