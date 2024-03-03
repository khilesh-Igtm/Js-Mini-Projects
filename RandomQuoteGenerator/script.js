const quoteWrapper = document.querySelector('.quote-wrapper');
const refreshbtn = document.querySelector('.refresh-btn');
const loader = document.querySelector('.loader');

// Function to show loader animation
function showLoader(){
  loader.classList.add('show')
  quoteWrapper.classList.add('.hide')
}

// Function to remove loader animation
function removeLoader(){
  loader.classList.remove('show')
  quoteWrapper.classList.remove('hide');
}

// Function to fetch a random quote from the API
function fetchRandomQuote() {
  showLoader()
  fetch("https://api.quotable.io/quotes/random")
    .then((response) => response.json())
    .then((result) => {
       // If quote is fetched successfully
      if(result){
        // Remove loader and display the quote
        removeLoader()
        displayQuote(result[0])
      }
    })
    .catch((e) => console.log(e));
}

function displayQuote(getQuote) {
  console.log(getQuote);
   // Update the inner HTML of the quote wrapper with the fetched quote data
  quoteWrapper.innerHTML = `
  <div class="quote-item">
  <p> ${getQuote.author}</p>
  <p> ${getQuote.content}</p>
  <p> ${getQuote.dateAdded}</p>
  <p> ${getQuote.tags[0]}</p>
  </div>
  `;
}

fetchRandomQuote();

refreshbtn.addEventListener('click', () => {
  fetchRandomQuote();
})