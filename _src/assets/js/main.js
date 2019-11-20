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

/////////////////////////////////////////////////////////
// Add color preview

const palette1 = document.querySelector('#palette1');
const palette2 = document.querySelector('#palette2');
const palette3 = document.querySelector('#palette3');
const cardPreview = document.querySelector('#cardId');
const contactIcons = document.querySelectorAll('.contact-icon');



    function previewPalette1 () {
        cardPreview.classList.add('select-palette1');
        cardPreview.classList.remove('select-palette2');
        cardPreview.classList.remove('select-palette3');

        for (let icon of contactIcons){
        icon.classList.add('contact-icon-palette1');
        icon.classList.remove('contact-icon-palette2');
        icon.classList.remove('contact-icon-palette3');
        };
    };
     function previewPalette2() {
        cardPreview.classList.add('select-palette2');
        cardPreview.classList.remove('select-palette1');
        cardPreview.classList.remove('select-palette3');

        for (let icon of contactIcons){
        icon.classList.add('contact-icon-palette2');
        icon.classList.remove('contact-icon-palette1');
        icon.classList.remove('contact-icon-palette3');
        };
    };
    function previewPalette3() {
        cardPreview.classList.add('select-palette3');
        cardPreview.classList.remove('select-palette2');
        cardPreview.classList.remove('select-palette1');

        for (let icon of contactIcons){
        icon.classList.add('contact-icon-palette3');
        icon.classList.remove('contact-icon-palette2');
        icon.classList.remove('contact-icon-palette1');
        };
    };

palette1.addEventListener ('change',previewPalette1);
palette2.addEventListener ('change',previewPalette2);
palette3.addEventListener ('change',previewPalette3);


/////////////////////////////////////////////////////////
//  toggle 

const formTopDesign = document.querySelector('#form-top-design');
const formBottomDesign = document.querySelector('#form-bottom-design');
const formTopFill = document.querySelector('#form-top-fill');
const formBottomFill = document.querySelector('#form-bottom-fill');
const formTopShare = document.querySelector('#form-top-share');
const formBottomShare = document.querySelector('#form-bottom-share');

const arrowDesign = document.querySelector('#arrow-design');
const arrowFill = document.querySelector('#arrow-fill');
const arrowShare = document.querySelector('#arrow-share');


function toggleDesign(){
    formBottomDesign.classList.toggle('form-bottom-collapse');
    formBottomFill.classList.remove('form-bottom-collapse');
    formBottomShare.classList.remove('form-bottom-collapse');

    arrowDesign.classList.toggle('form-arrow-collapse');
    arrowFill.classList.remove('form-arrow-collapse');
    arrowShare.classList.remove('form-arrow-collapse');
}

function toggleFill() {
    formBottomFill.classList.toggle('form-bottom-collapse');
    formBottomDesign.classList.remove('form-bottom-collapse');
    formBottomShare.classList.remove('form-bottom-collapse');

    arrowFill.classList.toggle('form-arrow-collapse');
    arrowDesign.classList.remove('form-arrow-collapse');
    arrowShare.classList.remove('form-arrow-collapse');
}
function toggleShare() {
    formBottomShare.classList.toggle('form-bottom-collapse');
    formBottomDesign.classList.remove('form-bottom-collapse');
    formBottomFill.classList.remove('form-bottom-collapse');

    arrowShare.classList.toggle('form-arrow-collapse');
    arrowFill.classList.remove('form-arrow-collapse');
    arrowDesign.classList.remove('form-arrow-collapse');
}
formTopDesign.addEventListener('click', toggleDesign);
formTopFill.addEventListener('click', toggleFill);
formTopShare.addEventListener('click', toggleShare);


/////////////////////////////////////////////////////////
// form validation

const cardForm = document.querySelector('#card__form');
const buttonCreate = document.querySelector('#btn-create');

function inactiveButton (){
    if (cardForm.checkValidity() === true){
        buttonCreate.classList.remove('btn-create-inactive');
    }
}

formTopShare.addEventListener('click', inactiveButton);


/////////////////////////////////////////////////////////
// Show share link on click

const cardShare = document.querySelector('#card-share');

function shareLink(event){
    if (cardForm.checkValidity() === true) {
        cardShare.classList.remove('hidden');
        event.preventDefault();
    }
    else {
        alert('No se puede crear la tarjeta. Revisa tus datos, por favor.')
        event.preventDefault();
    }
}

buttonCreate.addEventListener('click', shareLink);









