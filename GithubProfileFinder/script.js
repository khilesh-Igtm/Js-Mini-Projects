// storing input element from html using DOM
const searchInput = document.querySelector('.search')
const searchBtn = document.querySelector('.search-btn')
// base url for github api
const BASE_URL = "https://api.github.com/users/";
const githubProfileDetails = document.querySelector('.github-profile-details')
const loader = document.querySelector('.loading-text')


// function to show loader
function showLoader() {
  loader.classList.add('show'); // Adding the 'show' class to display the loader
  githubProfileDetails.classList.add('hide') // Adding the 'hide' class to hide the profile details
} 

// function to removeloader

function removeLoader() {
  loader.classList.remove('show'); //removing show class to hide loader
  githubProfileDetails.classList.remove('hide') //removing hide class to display loader
}

// async function to fetch github profile details

async function fetchGithubProfileDetails() {
  showLoader(); //show loader while fetching data

  // fetching data from github api using entered username
  const response = await fetch(`${BASE_URL}${searchInput.value}`)
  // convverting response to json format
  const result = await response.json();

  console.log(result)

  // if data is fetched successfully
  if (result) {
    removeLoader(); //remove loader after data is fetched
    displayProfileDetails(result) //display result
    searchInput.value = '' //clear input field
  }
}

function displayProfileDetails(getProfileDetails) {
  //  // Extracting necessary details from the fetched profile details
  const { login, avatar_url, public_repos, followers, following } = getProfileDetails;

  // Displaying profile details in the HTML
  githubProfileDetails.innerHTML = `
  <p class="username"> ${login}</p>
  <img src=${avatar_url} alt=${login}>
  <p class="repos">Repos : ${public_repos}</p>
  <p class="followers">Followers: ${followers}</p>
  <p class="following"> Following: ${following}</p>
  `;

}


searchBtn.addEventListener('click', fetchGithubProfileDetails)