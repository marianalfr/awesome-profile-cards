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