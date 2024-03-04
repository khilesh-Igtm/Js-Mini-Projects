// selecting the DOM elements
const qrContainer = document.querySelector('.qr-container');
const qrTextInput = document.querySelector('.qr-text')
const qrbtn = document.querySelector('.qr-btn');
const errormessage = document.querySelector('.error-message');


// adding event listener to the QR button
qrbtn.addEventListener('click', () => {
  // calling function to validate input field when button is clicked
  validateInputField()
})

// function to validate input field
function validateInputField() {
  // logging the value of input field
  console.log(qrTextInput.value);

  // check if input field value is not empty
  if (qrTextInput.value.trim().length > 0) {
    // if input field is not empty, generate QR code
    generateQRCode()
  }
  else {
    // if the input field is empty and button is clicked, then display error message
    qrContainer.innerHTML = "";
    errormessage.textContent = "Enter some valid Text!";
  }
}

// function to generate QR code
function generateQRCode(){
  // clearing any existing content in QR container
  qrContainer.innerHTML = "";

  // generating QR code using the input value
  new QRCode(qrContainer,{
    text: qrTextInput.value,
    height: 400,
    width: 400,
    colorLight: "#fff",
    colorDark: "#000",
  });

  // resetting input field value and clearing error message
  qrTextInput.value = '';
  errormessage.textContent = '';
}