const postlistcontainer = document.querySelector('.posts-list-container');


// fetch using XHR

function fetchUsingXHR(){
  // Creating a new instance of XMLHttpRequest.
  const xhr = new XMLHttpRequest();
  // Setting up the request method (GET) and the URL we want to fetch data from.
  xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
   // Specifying the expected response type.
  xhr.responseType = 'json';
   // Sending the request.
  xhr.send();


    // Event handler for when the response is loaded.
  xhr.onload =()=>{
    // Checking if the response status is 200, which means success.
    if(xhr.status === 200){
       // Calling the displayResults function and passing the response data.
      displayResults(xhr.response)
    }
    else{
      // Logging an error message if the response status is not 200.
      console.log("Some error");
    }
  }
}


// Function to display the fetched results on the webpage.
function displayResults(posts){
  // Clearing the inner HTML content of the postlistcontainer.
  postlistcontainer.innerHTML = posts.map((postItem) => `
  <div class="post-item">
  <h3> ${postItem.title}</h3>
  <p>${postItem.body}</p>
  </div>
  `).join(" ");
}

fetchUsingXHR();