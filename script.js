const form = document.getElementById('form');
const password1EL = document.getElementById('password1');
const password2EL = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // using contraint API
  isValid = form.checkValidity();
  // Style main message for error
 if (!isValid) {
  message.textContent = 'Please fill out all fields.';
  message.style.color = 'red';
  messageContainer.style.borderColor = 'red';
 } 
//  check if passwords match
if (password1EL.value === password2EL.value) {
  passwordsMatch = true;
  password1EL.style.borderColor = 'powderblue';
  password2EL.style.borderColor = 'powderblue';
} else {
  passwordsMatch = false;
  message.textContent = 'Make sure passwords match';
  message.style.color = 'red';
  messageContainer.style.borderColor = 'red';
  password1EL.style.borderColor = 'red';
  password2EL.style.borderColor = 'red';
}
// If form is valid and passwords match 
if (isValid && passwordsMatch) {
  message.textContent = 'Successfully Registered!';
  message.style.color = 'green';
  messageContainer.style.borderColor = 'green';

}
}

function processFormData(e) {
  e.preventDefault();
  // validate form
  validateForm();
}

// Event listner
form.addEventListener('submit', processFormData);