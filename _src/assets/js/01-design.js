'use strict';

/////////////////////////////////////////////////////////
// Add color preview

const palette1 = document.querySelector('#palette1');
const palette2 = document.querySelector('#palette2');
const palette3 = document.querySelector('#palette3');
const cardPreview = document.querySelector('#cardId');
const contactIcons = document.querySelectorAll('.contact-icon');

const previewPalette1 = () => {
    cardPreview.classList.add('select-palette1');
    cardPreview.classList.remove('select-palette2');
    cardPreview.classList.remove('select-palette3');

    for (let icon of contactIcons){
    icon.classList.add('contact-icon-palette1');
    icon.classList.remove('contact-icon-palette2');
    icon.classList.remove('contact-icon-palette3');
    };
};
const previewPalette2 = () => {
    cardPreview.classList.add('select-palette2');
    cardPreview.classList.remove('select-palette1');
    cardPreview.classList.remove('select-palette3');

    for (let icon of contactIcons){
    icon.classList.add('contact-icon-palette2');
    icon.classList.remove('contact-icon-palette1');
    icon.classList.remove('contact-icon-palette3');
    };
};
const previewPalette3 = () => {
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


    

