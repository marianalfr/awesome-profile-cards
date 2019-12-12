'use strict';

let inputEmail = document.querySelector('#email');
let inputPhone = document.querySelector('#phone');
let inputLinkedin = document.querySelector('#linkedin');
let inputGithub = document.querySelector('#github');

const cardEmail = document.querySelector('#cardEmail');
const cardPhone = document.querySelector('#cardPhone');
const cardLinkedin = document.querySelector('#cardLinkedin');
const cardGithub = document.querySelector('#cardGithub');

const linkEmail = document.querySelector('#linkEmail');
const linkLinkedin = document.querySelector('#linkLinkedin');
const linkGithub = document.querySelector('#linkGithub');
const linkPhone = document.querySelector('#linkPhone');

const fillPhone = () => (inputPhone.value.length !== 0) ? (
  cardPhone.classList.remove('hidden'),
  linkPhone.href= `tel:${inputPhone.value}`
) : cardPhone.classList.add('hidden');

const fillEmail = () => (inputEmail.value.length !== 0) ? (
  cardEmail.classList.remove('hidden'),
  linkEmail.href = `mailto:${inputEmail.value}`
) : cardEmail.classList.add('hidden');

const fillLinkedin = () => (inputLinkedin.value.length !== 0) ? (
  cardLinkedin.classList.remove('hidden'),
  linkLinkedin.href= `https://www.linkedin.com/in/${inputLinkedin.value}/`
) : cardLinkedin.classList.add('hidden');

const fillGithub = () => (inputGithub.value.length !== 0) ? (
  cardGithub.classList.remove('hidden'),
  linkGithub.href= `https://www.github.com/${inputGithub.value}`
) : cardGithub.classList.add('hidden');

inputPhone.addEventListener('keyup', fillPhone);
inputEmail.addEventListener('keyup', fillEmail);
inputLinkedin.addEventListener('keyup', fillLinkedin);
inputGithub.addEventListener('keyup', fillGithub);