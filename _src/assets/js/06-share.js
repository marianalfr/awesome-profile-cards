'use strict';

/////////////////////////////////////////////////////////
// Show share link on click

const cardShare = document.querySelector('#card-share');

function shareLink(event) {
    if (validateAll() === true) {
        cardShare.classList.remove('hidden');
        event.preventDefault();
    }
    else {
        cardShare.classList.add('hidden');
        event.preventDefault();
    }
}

 //buttonCreate.addEventListener('click', shareLink);