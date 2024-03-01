const postlistcontainer = document.querySelector('.posts-list-container');


// fetch using Fetch Method

function fetchUsingFetchMethod() {
   // Making a fetch request to the specified URL with the GET method.
  const fetchRequest = fetch('https://jsonplaceholder.typicode.com/posts', { method: "GET", })
    // Handling the promise returned by fetch.
  fetchRequest
  // Extracting the JSON data from the response.
    .then((response) => response.json())
     // Once the JSON data is extracted, calling the displayResults function with the data.
    .then((result) => displayResults(result))
     // Catching any errors that might occur during the fetch process.
    .catch((e) => console.log(e))
}

fetchUsingFetchMethod();

function displayResults(posts) {
  postlistcontainer.innerHTML = posts.map((postItem) => `
  <div class="post-item">
  <h3> ${postItem.title}</h3>
  <p>${postItem.body}</p>
  </div>
  `).join(" ");
}

