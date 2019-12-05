'use strict';

const urlBase = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
const cardLink = document.querySelector('#card-link');
let photoSend = '';

function sendData() {

    fetch(urlBase, {
        method: 'POST',
        body: localStorage.getItem('Details'),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => showURL(data))
        .catch(function (error) { console.log(error) })

    shareLink(event);
}

function showURL(data) {
    if (data.success) {
        cardLink.innerHTML = `<a class="twitter-url" href=${data.cardURL} target="_blank">${data.cardURL}</a>`;
        twitterLink(data.cardURL);

    } else {
        cardLink.innerHTML = 'ERROR: ' + data.error;
    }
}

buttonCreate.addEventListener('click', sendData);


//https://twitter.com/intent/tweet?text=Hello%0AWorld
//href="https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards%20:%0A${data.cardURL}"

function twitterLink(URL) {
    const twitterLink = document.querySelector('#twitter-share');
    twitterLink.href = `https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards:%0A;hashtags=Adalab, AwesomeProfileCards, promoHamilton ${URL}`;
}
