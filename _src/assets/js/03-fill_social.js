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

function fillPhone() {
  if (inputPhone.value.length !== 0){
    cardPhone.classList.remove('hidden');
    linkPhone.href= `tel:${inputPhone.value}`;
  }
  else {
    cardPhone.classList.add('hidden');
  }
}

function fillEmail() {
  if (inputEmail.value.length !== 0){
    cardEmail.classList.remove('hidden');
    linkEmail.href = `mailto:${inputEmail.value}`;
  }
  else {
    cardEmail.classList.add('hidden');
  }
}

function fillLinkedin() {
  if (inputLinkedin.value.length !== 0){
    cardLinkedin.classList.remove('hidden');
    linkLinkedin.href= `https://www.linkedin.com/in/${inputLinkedin.value}/`;
  }
  else {
    cardLinkedin.classList.add('hidden');
  }
}

function fillGithub() {
  if (inputGithub.value.length !== 0){
    cardGithub.classList.remove('hidden');
    linkGithub.href= `https://www.github.com/${inputGithub.value}`;
  }
  else {
    cardGithub.classList.add('hidden');
  }
}

inputPhone.addEventListener('keyup', fillPhone);
inputEmail.addEventListener('keyup', fillEmail);
inputLinkedin.addEventListener('keyup', fillLinkedin);
inputGithub.addEventListener('keyup', fillGithub);