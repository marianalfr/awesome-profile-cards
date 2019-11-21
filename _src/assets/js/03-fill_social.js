'use strict';

/////////////////////////////////////////////////////////
// Add links to card

let inputEmail = document.querySelector('#email');
let inputTelf = document.querySelector('#telf');
let inputLinkedin = document.querySelector('#linkedin');
let inputGithub = document.querySelector('#github');

const cardEmail = document.querySelector('#cardEmail');
const cardTelf = document.querySelector('#cardTelf');
const cardLinkedin = document.querySelector('#cardLinkedin');
const cardGithub = document.querySelector('#cardGithub');

const linkEmail = document.querySelector('#linkEmail');
const linkLinkedin = document.querySelector('#linkLinkedin');
const linkGithub = document.querySelector('#linkGithub');
const linkTelf = document.querySelector('#linkTelf');



function fillTelf() {
    if (inputTelf.value.length !== 0){
        cardTelf.classList.remove('hidden');
        linkTelf.href= `tel:${inputTelf.value}`;
    }
    else {
        cardTelf.classList.add('hidden');
    }
};

function fillEmail() {
    if (inputEmail.value.length !== 0){
        cardEmail.classList.remove('hidden');
        linkEmail.href = `mailto:${inputEmail.value}`;
    }
    else {
        cardEmail.classList.add('hidden');
    }
};

function fillLinkedin() {
    if (inputLinkedin.value.length !== 0){
        cardLinkedin.classList.remove('hidden');
        linkLinkedin.href= `https://www.linkedin.com/in/${inputLinkedin.value}/`;
    }
    else {
        cardLinkedin.classList.add('hidden');
    }
};

function fillGithub() {
    if (inputGithub.value.length !== 0){
        cardGithub.classList.remove('hidden');
        linkGithub.href= `https://www.github.com/${inputGithub.value}`;
    }
    else {
        cardGithub.classList.add('hidden');
    }
};

inputTelf.addEventListener('keyup', fillTelf);
inputEmail.addEventListener('keyup', fillEmail);
inputLinkedin.addEventListener('keyup', fillLinkedin);
inputGithub.addEventListener('keyup', fillGithub);