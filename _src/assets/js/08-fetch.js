'use strict';

const urlBase = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
const cardLink = document.querySelector('#card-link');
let photoSend = '';

function sendData(){

  //  event.preventDefault(); *********

  fetch (urlBase,{
      method: 'POST',
      body: localStorage.getItem('Details'),
      headers: {
          'content-type': 'application/json'
      }
  })
  .then (response => response.json())
  .then (data => showURL(data))
.catch (function(error){console.log(error)})


  shareLink(event);
  

}

function showURL(data){
    if(data.success){
        cardLink.innerHTML = `<a class="twitter-url" href=${data.cardURL} target="_blank">${data.cardURL}</a>`;
        shareTwitter(data.cardURL);
    } else {
        cardLink.innerHTML = 'ERROR: ' + data.error;
    }
}

buttonCreate.addEventListener('click', sendData);


