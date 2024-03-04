// selecting DOM elements
const userlist = document.querySelector('.users-list');
const loader = document.querySelector('.loader')
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn')
const scrollToBottomBtn = document.querySelector('.scroll-to-bottom-btn')


// function to show loader
function showLoader(){
  loader.classList.add('show-loader');
  userlist.classList.add('hide-user-list');
}

// function to remove loader
function removeLoader(){
  loader.classList.remove('show-loader');
  userlist.classList.remove('hide-user-list');
}

// function to fetch users list
async function fetchUsersList(){
  showLoader();
  const response = await fetch('https://dummyjson.com/users?limit=100',{
    method: 'GET'
  })
  const result = await response.json();

  if(result && result.users) displayUsersList(result.users);
  console.log(result)

  removeLoader();
}
fetchUsersList()

// function to display users list
function displayUsersList(getUsers){
  console.log(getUsers);
  userlist.innerHTML = getUsers.map((userItem)=>`
  <li>
  <p> ${userItem.firstName} ${userItem.lastName}</p>
  </li>
  `).join(" ");

}

// adding event listener for scroll to top button
scrollToTopBtn.addEventListener('click',()=>{
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  })
})

// adding event listener for scroll to bottom button
scrollToBottomBtn.addEventListener('click',()=>{
  // this will print the height of till scrolling is available
  console.log(document.body.scrollHeight);
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
})