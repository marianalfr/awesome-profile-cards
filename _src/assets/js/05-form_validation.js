'use strict';

//// Individual validation

const emailError = document.querySelector('#error-email');

const validateEmail = () => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) ? (
  inputEmail.classList.remove('input-error'),
  emailError.classList.add('hidden'),
  true
) : (
  inputEmail.classList.add('input-error'),
  emailError.classList.remove('hidden'),
  false);

const phoneError = document.querySelector('#error-phone');
const validatePhone = () => (/^[0-9]{9}/.test(inputPhone.value) || inputPhone.value === '') ? (
  inputPhone.classList.remove('input-error'),
  phoneError.classList.add('hidden'),
  true
) : (
  inputPhone.classList.add('input-error'),
  phoneError.classList.remove('hidden'),
  false
);

inputEmail.addEventListener('change', validateEmail);
inputPhone.addEventListener('keyup', validatePhone);

const globalError = document.querySelector('#error-name-job');

const validateFullName = () => (inputFullName.value !== '') ? (
  inputFullName.classList.remove('input-error'),
  true
) : (
  inputFullName.classList.add('input-error'),
  false
);

const validateJob = () => (inputJob.value !== '') ? (
  inputJob.classList.remove('input-error'),
  true
) : (
  inputJob.classList.add('input-error'),
  false
);

/*const imageInput = document.querySelector('#image-input');
const imageError = document.querySelector('#error-image');
const validateImage = () => {
  const localStoredData = JSON.parse(localStorage.getItem('Details'));
  (/.(gif|jpeg|jpg|png)$/i.test(imageInput.value) || localStoredData.photo !== '') ? (
    imageError.classList.add('hidden'),
    true
  ) : (
    imageError.classList.remove('hidden'),
    false
  )
};*/

const imageInput = document.querySelector('#image-input');
function validateImage() {
  const imageError = document.querySelector('#error-image');
  const localStoredData = JSON.parse(localStorage.getItem('Details'));
  if (/.(gif|jpeg|jpg|png)$/i.test(imageInput.value) === false || localStoredData.photo === '') {
    imageError.classList.remove('hidden');
    return (false);
  } else {
    imageError.classList.add('hidden');
    return (true);
  }
}
imageInput.addEventListener('change', validateImage);

const linkedinError = document.querySelector('#error-linkedin');

const validateLinkedin = () => (inputLinkedin.value === '') ? (
  inputLinkedin.classList.add('input-error'),
  linkedinError.classList.remove('hidden'),
  false
) : (
  inputLinkedin.classList.remove('input-error'),
  linkedinError.classList.add('hidden'),
  true
);

const githubError = document.querySelector('#error-github');

const validateGithub = () => (inputGithub.value !== '') ? (
  inputGithub.classList.remove('input-error'),
  githubError.classList.add('hidden'),
  true
) : (
  inputGithub.classList.add('input-error'),
  githubError.classList.remove('hidden'),
  false
);

const cardForm = document.querySelector('#card__form');
const buttonCreate = document.querySelector('#btn-create');

const validateAll = () => (validateJob() && validateFullName() && validateEmail() && validateLinkedin() && validateGithub() && validateImage() && validatePhone()) ? (
  globalError.classList.add('hidden'),
  buttonCreate.classList.remove('btn-create-inactive'),
  true
) : (
  globalError.classList.remove('hidden'),
  buttonCreate.classList.add('btn-create-inactive'),
  validateJob(),
  validateFullName(),
  validateEmail(),
  validateLinkedin(),
  validateGithub(),
  validateImage(),
  false
);

formTopShare.addEventListener('click', validateAll);
