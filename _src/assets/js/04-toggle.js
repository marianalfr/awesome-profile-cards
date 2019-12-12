'use strict'; 

const formTopDesign = document.querySelector('#form-top-design');
const formBottomDesign = document.querySelector('#form-bottom-design');
const formTopFill = document.querySelector('#form-top-fill');
const formBottomFill = document.querySelector('#form-bottom-fill');
const formTopShare = document.querySelector('#form-top-share');
const formBottomShare = document.querySelector('#form-bottom-share');

const arrowDesign = document.querySelector('#arrow-design');
const arrowFill = document.querySelector('#arrow-fill');
const arrowShare = document.querySelector('#arrow-share');


function toggleDesign(){
  formBottomDesign.classList.toggle('form-bottom-collapse');
  formBottomFill.classList.remove('form-bottom-collapse');
  formBottomShare.classList.remove('form-bottom-collapse');

  arrowDesign.classList.toggle('form-arrow-collapse');
  arrowFill.classList.remove('form-arrow-collapse');
  arrowShare.classList.remove('form-arrow-collapse');
}

function toggleFill() {
  formBottomFill.classList.toggle('form-bottom-collapse');
  formBottomDesign.classList.remove('form-bottom-collapse');
  formBottomShare.classList.remove('form-bottom-collapse');

  arrowFill.classList.toggle('form-arrow-collapse');
  arrowDesign.classList.remove('form-arrow-collapse');
  arrowShare.classList.remove('form-arrow-collapse');
}
function toggleShare() {
  formBottomShare.classList.toggle('form-bottom-collapse');
  formBottomDesign.classList.remove('form-bottom-collapse');
  formBottomFill.classList.remove('form-bottom-collapse');

  arrowShare.classList.toggle('form-arrow-collapse');
  arrowFill.classList.remove('form-arrow-collapse');
  arrowDesign.classList.remove('form-arrow-collapse');
}
formTopDesign.addEventListener('click', toggleDesign);
formTopFill.addEventListener('click', toggleFill);
formTopShare.addEventListener('click', toggleShare);