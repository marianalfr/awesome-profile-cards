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
        cardLEmail.classList.add('hidden');
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

inputTelf.addEventListener('change', fillTelf);
inputEmail.addEventListener('change', fillEmail);
inputLinkedin.addEventListener('change', fillLinkedin);
inputGithub.addEventListener('change', fillGithub);

/////////////////////////////////////////////////////////
// Add color preview

const palette1 = document.querySelector('#palette1');
const palette2 = document.querySelector('#palette2');
const palette3 = document.querySelector('#palette3');
const cardPreview = document.querySelector('#cardId');



    function previewPalette1 () {
        cardPreview.classList.add(select-palette1);
        cardPreview.classList.remove(select-palette2);
        cardPreview.classList.remove(select-palette3);
    };
     function previewPalette2() {
        cardPreview.classList.add(select-palette2);
        cardPreview.classList.remove(select-palette1);
        cardPreview.classList.remove(select-palette3);
    };
    function previewPalette3() {
        cardPreview.classList.add(select-palette3);
        cardPreview.classList.remove(select-palette2);
        cardPreview.classList.remove(select-palette1);
    };

palette1.addEventListener ('change',previewPalette1);
palette2.addEventListener ('change',previewPalette2);
palette3.addEventListener ('change',previewPalette3);

