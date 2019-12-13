'use strict';

///////////////////////////////////// Show share link on click

const cardShare = document.querySelector('#card-share');

const shareLink = (event) => (validateAll()) ? (
    cardShare.classList.remove('hidden'),
    event.preventDefault()
) : (
    cardShare.classList.add('hidden'),
    event.preventDefault()
);