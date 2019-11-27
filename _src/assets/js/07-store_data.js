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
        storedData.theme = palette2Value;
        console.log(storedData);
    } else if (palette3.checked){
        storedData.theme = palette3Value;
        console.log(storedData);
    }  else {
        storedData.theme = palette1Value;
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
    const savedData = JSON.parse(localStorage.getItem('Details'));

    if (savedData.name !== ''){
        inputFullName.value = savedData.name;
    }
    if (savedData.job !== ''){
        inputJob.value = savedData.job;
    }
    if (savedData.image !== ''){
        inputImage.src = savedData.image;
    }
    if (savedData.email !== ''){
        inputEmail.value = savedData.email;
    }
    if (savedData.telf !== ''){
        inputTelf.value= savedData.telf;
    }
    if (savedData.linkedin !== ''){
        inputLinkedin.value = savedData.linkedin;
    }
    if (savedData.github !== ''){
        inputGithub.value = savedData.github;
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










