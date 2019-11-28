'use strict';

/////////////////////////////////////////////////////////
// Define variables to store data
const inputImage = document.querySelector('#image-input');

let palette1Value = palette1.value;
let palette2Value = palette2.value;
let palette3Value = palette3.value;
let fullNameValue = inputFullName.value;
let jobValue = inputJob.value;
let imageSource = inputImage.scr;
let telfValue = inputTelf.value;
let emailValue = inputEmail.value;
let linkedinValue = inputLinkedin.value;
let githubValue = inputGithub.value;

let storedData = {};

function storePalette(){
    if(palette2.checked){
        storedData.theme = palette2.value;
        console.log(storedData);
    } else if (palette3.checked){
        storedData.theme = palette3.value;
        console.log(storedData);
    }  else {
        storedData.theme = palette1.value;
        console.log(storedData);
    }
    storeData();
}

function storeFullName(){
    storedData.name = inputFullName.value;
    storeData();
}
function storeJob(){
    storedData.job = inputJob.value;
    storeData();
}
function storeImage(){
    storedData.image = inputImage.value;
    storeData();
}
function storeEmail(){
    storedData.email = inputEmail.value;
    storeData();
}
function storeTelf(){
    storedData.telf = inputTelf.value;
    storeData();
}
function storeLinkedin(){
    storedData.linkedin = inputLinkedin.value;
    storeData();
}
function storeGithub(){
    storedData.github = inputGithub.value;
    storeData();
}

function storeData(){
    localStorage.setItem('Details', JSON.stringify(storedData));
};

function retrieveData(){
    storedData = JSON.parse(localStorage.getItem('Details'));

    if (storedData.name !== ''){
        inputFullName.value = storedData.name;
    }
    if (storedData.job !== ''){
        inputJob.value = storedData.job;
    }
    if (storedData.image !== ''){
        inputImage.src = storedData.image;
    }
    if (storedData.email !== ''){
        inputEmail.value = storedData.email;
    }
    if (storedData.telf !== ''){
        inputTelf.value= storedData.telf;
    }
    if (storedData.linkedin !== ''){
        inputLinkedin.value = storedData.linkedin;
    }
    if (storedData.github !== ''){
        inputGithub.value = storedData.github;
    }
}

window.addEventListener('load', retrieveData);
palette1.addEventListener('click', storePalette);
palette2.addEventListener('click', storePalette);
palette3.addEventListener('click', storePalette);
inputFullName.addEventListener('change', storeFullName);
inputJob.addEventListener('change', storeJob);
inputImage.addEventListener('change', storeImage);
inputEmail.addEventListener('change', storeEmail);
inputTelf.addEventListener('change', storeTelf);
inputLinkedin.addEventListener('change', storeLinkedin);
inputGithub.addEventListener('change', storeGithub);









