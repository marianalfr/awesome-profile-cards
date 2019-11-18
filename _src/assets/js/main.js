'use strict';

/////////////////////////////////////////////////////////
// Add text from form inputs to card

let inputFullName = document.querySelector('#fullName');
let inputJob = document.querySelector('#job');

const cardName = document.querySelector('#cardName');
const cardJob = document.querySelector('#cardJob');

function printName(){
    cardName.innerHTML = inputFullName.value;
};

function printJob(){
    cardJob.innerHTML = inputJob.value;
};

inputFullName.addEventListener('keyup', printName);
inputJob.addEventListener('keyup', printJob);



/////////////////////////////////////////////////////////
// Add text from form inputs to card

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
    if (inputTelf.value !== null){
        cardTelf.classList.remove('hidden');
        linkTelf.href= `tel:${inputTelf.value}`;
    }
    else if (inputTelf.value === null){
        cardTelf.classList.add('hidden');
    }
};


function fillEmail() {
    if (inputEmail.value !== null){
        cardEmail.classList.remove('hidden');
        linkEmail.href = `mailto:${inputEmail.value}`;
    }
};

function fillLinkedin() {
    if (inputLinkedin.value !== null){
        cardLinkedin.classList.remove('hidden');
        linkLinkedin.href= `https://www.linkedin.com/in/${inputLinkedin.value}/`;
    }
    else if (inputLinkedin.value === null){
        cardLinkedin.classList.add('hidden');
    }
};

function fillGithub() {
    if (inputGithub.value !== null){
        cardGithub.classList.remove('hidden');
        linkGithub.href= `https://www.github.com/${inputGithub.value}`;
    }
    else if (inputGithub.value === null){
        cardGithub.classList.add('hidden');
    }
};

inputTelf.addEventListener('change', fillTelf);
inputEmail.addEventListener('change', fillEmail);
inputLinkedin.addEventListener('change', fillLinkedin);
inputGithub.addEventListener('change', fillGithub);
