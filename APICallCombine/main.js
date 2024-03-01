const postlistcontainer = document.querySelector('.posts-list-container');


// fetch using XHR and  Async Await Method

function helperMethod(method,url){
  // creating a new promise
  const promise = new Promise((resolve,reject)=>{
    // creating a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // opening a connection with the specified method and url
    xhr.open(method,url);
    // setting response type to JSON
    xhr.responseType = 'json';
    // sending the request
    xhr.send();

    // event listener for when the request is loaded
    xhr.onload = ()=>{
      if(xhr.status === 200){
        // resolving the promise with the response
        resolve(xhr.response);
      }else{
        // rejecting the promise with the response 
        reject(xhr.response);
      }
    }
  })
  // returning the promise
  return promise;
}

async function fetchUsingXHRAndAsyncAwait(){
  // making an asynchronous XHR request to fetch posts
  const response = await helperMethod('GET',"https://jsonplaceholder.typicode.com/posts");
  // called the function to display in webpage
  displayResults(response);

}

// calling the function
fetchUsingXHRAndAsyncAwait();


// for displaying the result in webpage
function displayResults(posts) {
  postlistcontainer.innerHTML = posts.map((postItem) => `
  <div class="post-item">
  <h3> ${postItem.title}</h3>
  <p>${postItem.body}</p>
  </div>
  `).join(" ");
}

