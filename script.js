const form = document.getElementById('form');
const password1EL = document.getElementById('password1');
const password2EL = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
  // using contraint API
  isValid = form.checkValidity();
  // Style main message for error
  message.textContent = 'Please fill out all fields.';
  message.style.color = 'red';
  messageContainer.style.borderColor = 'red';
}

function processFormData(e) {
  e.preventDefault();
  // validate form
  validateForm();
}

// Event listner
form.addEventListener('submit', processFormData);