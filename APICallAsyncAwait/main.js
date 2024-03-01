const postlistcontainer = document.querySelector('.posts-list-container');


// fetch using Async Await Method


async function fetchUsingAsyncAwaitMethod(){
   // Making a fetch request to the specified URL with the GET method and awaiting the response.
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: "GET", });
  // Extracting the JSON data from the response and awaiting the result.
  const result = await response.json();

  // Once the JSON data is extracted, calling the displayResults function with the data.
  displayResults(result);
} 

fetchUsingAsyncAwaitMethod()

function displayResults(posts) {
  postlistcontainer.innerHTML = posts.map((postItem) => `
  <div class="post-item">
  <h3> ${postItem.title}</h3>
  <p>${postItem.body}</p>
  </div>
  `).join(" ");
}

// async: This keyword is used to define an asynchronous function. An asynchronous function returns a Promise implicitly, allowing you to use await within it. In simpler terms, it tells JavaScript that the function will perform asynchronous operations, and you can use await inside it to wait for the completion of those operations.


// await: This keyword is used inside an async function to pause the execution of the function until a Promise is resolved. When await is used with a Promise, it waits for the Promise to settle (either resolve or reject) and then resumes the execution of the async function. In this code, await is used with both the fetch() method and the response.json() method.


/////////////////Here's How it works: /////////////////////////////
// fetchUsingAsyncAwaitMethod() is declared as an async function, which means it can use await inside it.
// Inside fetchUsingAsyncAwaitMethod(), await fetch() is used to pause the function execution until the HTTP request initiated by fetch() is complete and the server responds.
// After receiving the response from the server, await response.json() is used to pause the function execution until the JSON data is extracted from the response.
// Once the JSON data is obtained, it is assigned to the result variable, and the function execution continues.
// Finally, the displayResults() function is called with the obtained JSON data to display it on the webpage.

// In summary, async and await make asynchronous code look synchronous, improving readability and making it easier to handle asynchronous operations, such as fetching data from a server, in a more sequential and organized manner.