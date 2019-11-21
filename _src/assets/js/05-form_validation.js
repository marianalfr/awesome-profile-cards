'use strict';

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