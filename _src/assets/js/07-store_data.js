'use strict';

/////////////////////////////////////////////////////////
// Define variables to store data
const inputImage = document.querySelector('#image-input');
const btnReset = document.querySelector('#btn-reset');

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


let storedData = {
    palette: '',
    name: '',
    job: '',
    photo: '',
    email: '',
    phone: '',
    linkedin: '',
    github: ''
};

function storePalette(){
    if(palette2.checked){
        storedData.palette = palette2.value;
        console.log(storedData);
    } else if (palette3.checked){
        storedData.palette = palette3.value;
        console.log(storedData);
    }  else {
        storedData.palette = palette1.value;
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
function storeEmail(){
    storedData.email = inputEmail.value;
    storeData();
}
function storeTelf(){
    storedData.phone = inputTelf.value;
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

// function storeImage(){
//     storedData.image = inputImage.value;
//     storeData();
// }

function checkLocalStorage (){
    if (localStorage.getItem('Details')!== null){
        retrieveData();
        init();
    }
}

function retrieveData(){
    storedData = JSON.parse(localStorage.getItem('Details'));
    if(storedData.palette !== undefined){
        if(storedData.palette === palette2.value){
            palette2.checked = true;
            palette1.checked = false;
            palette3.checked = false
        } else if(storedData.palette === palette3.value){
            palette3.checked = true;
            palette2.checked = false;
            palette1.checked = false
        } else{
            palette3.checked = false;
            palette2.checked = false;
            palette1.checked = true;
        }
    }

    if (storedData.name !== ''){
        inputFullName.value = storedData.name;
    }
    if (storedData.job !== ''){
        inputJob.value = storedData.job;
    }
    if (storedData.email !== ''){
        inputEmail.value = storedData.email;
    }
    if (storedData.phone !== ''){
        inputTelf.value= storedData.phone;
    }
    if (storedData.linkedin !== ''){
        inputLinkedin.value = storedData.linkedin;
    }
    if (storedData.github !== ''){
        inputGithub.value = storedData.github;
    }
}

function setTheme(){
    if(palette2.checked){
        previewPalette2();
    } else if(palette3.checked){
        previewPalette3();
    } else {
        previewPalette1();
    }
}

function setImage(){
    if (storedData.photo !== ''){
        profileImage.style.backgroundImage = `url(${storedData.photo})`;
        profilePreview.style.backgroundImage = `url(${storedData.photo})`;
    }

    
}

function init(){

    if(inputFullName.value === ''){
        cardName.innerHTML = 'Nombre Apellidos';
    } else {
        printName();
    }

    if(inputJob.value === ''){
        cardJob.innerHTML = 'Front-end developer';
    } else { 
        printJob();
    }
    
    
    fillTelf();
    fillEmail();
    fillLinkedin();
    fillGithub();
    setTheme();
    setImage();
}

function reset(){
    localStorage.removeItem('Details');
    inputFullName.value = '';
    inputJob.value = '';
    inputEmail.value = '';
    inputTelf.value = '';
    inputLinkedin.value = '';
    inputGithub.value = '';
    cardName.innerHTML = 'Nombre Apellidos';
    cardJob.innerHTML = 'Front-end developer';
    palette1.checked = true;

    const imageUrl = './assets/images/profile-picture.gif';
    profileImage.style.backgroundImage = `url(${imageUrl})`;
    profilePreview.style.backgroundImage = `url(${imageUrl})`;

    fillTelf();
    fillEmail();
    fillLinkedin();
    fillGithub();
    setTheme();

    validateAll();
    toggleDesign()

    cardShare.classList.add('hidden');
}

window.addEventListener('load', checkLocalStorage);
palette1.addEventListener('click', storePalette);
palette2.addEventListener('click', storePalette);
palette3.addEventListener('click', storePalette);
inputFullName.addEventListener('change', storeFullName);
inputJob.addEventListener('change', storeJob);
inputEmail.addEventListener('change', storeEmail);
inputTelf.addEventListener('change', storeTelf);
inputLinkedin.addEventListener('change', storeLinkedin);
inputGithub.addEventListener('change', storeGithub);
btnReset.addEventListener('click', reset);









