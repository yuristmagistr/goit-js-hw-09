const storageKey = '"feedback-form-state"'
const message = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

form.addEventListener('input', formInput);
form.addEventListener('submit', formSubmit)

function formInput() {
    const emailInp = form.email.value;
    const messageInp = form.message.value;
    const data = {
        email: emailInp.trim(),
        message: messageInp.trim(),
    }
    addToLocalStorage(storageKey, data);
}

function addToLocalStorage(key, value) {
    const zipValue = JSON.stringify(value);
    localStorage.setItem(key, zipValue)
}



function formSubmit(event) {
const emailInp = form.elements.email.value;
const messageInp = form.elements.message.value;

  if (emailInp === '' || messageInp === '') {
    return
  }
    event.preventDefault();


  const data = {
    email: emailInp.trim(),
    message: messageInp.trim(),
  };
 
  console.log(data);
form.reset();
  localStorage.removeItem(storageKey);
  
}

function loadFromLS(key) {
  const zipValue = localStorage.getItem(key);
  try {
    return JSON.parse(zipValue);
  } catch {
    return zipValue;
  }
}

function init() {
  const data = loadFromLS(storageKey) || {};
  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

init();