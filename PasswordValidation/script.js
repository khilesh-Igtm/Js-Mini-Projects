document.getElementById("password").addEventListener("input", function() {
  var password = document.getElementById("password");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");

  var lowerCaseLetters = /[a-z]/g;
  if(password.value.match(lowerCaseLetters)) {
    letter.innerHTML = '&#x2714;'; // Green tick sign
    letter.style.color = 'green';
  } else {
    letter.innerHTML = '&#x2718;'; // Red cross sign
    letter.style.color = 'red';
  }

  var upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) {
    capital.innerHTML = '&#x2714;';
    capital.style.color = 'green';
  } else {
    capital.innerHTML = '&#x2718;';
    capital.style.color = 'red';
  }

  var numbers = /[0-9]/g;
  if(password.value.match(numbers)) {
    number.innerHTML = '&#x2714;';
    number.style.color = 'green';
  } else {
    number.innerHTML = '&#x2718;';
    number.style.color = 'red';
  }

  if(password.value.length >= 8) {
    length.innerHTML = '&#x2714;';
    length.style.color = 'green';
  } else {
    length.innerHTML = '&#x2718;';
    length.style.color = 'red';
  }
});
