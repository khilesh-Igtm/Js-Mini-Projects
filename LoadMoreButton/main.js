// selecting the container where products will be displayed
const productsContainer = document.querySelector('.products-container');

// selecting the button used to load more products
const loadmorebtn = document.querySelector('.load-more-btn');

// initializing a variables to keep track of current step of pagination
let currentStep = 0;


// function to fetch a list of products asynchronously
async function fetchListOfProducts(getCurrentStep) {
  try {
    // fetching products data from a dummy API, with  pagination handled by limit and skip parameters
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${getCurrentStep === 0 ? 0 : getCurrentStep * 10}`,
      { method: 'GET' });

      // parsing the JSON response
    const result = await response.json();

    // logging the fetched result
    console.log(result);
    // displaying the products if available
    if (result && result.products) displayProducts(result.products);
  } catch (error) {
    // logging any errors that occur during the fetching process
    console.log(error);
  }
}

// function to display the fetched products on the webpage
function displayProducts(result) {
  console.log(result);
  // iterating through each product item in the result
  result.forEach((productItem) => {
    // creating dom element for each product item
    const productItemWrapper = document.createElement('div');
    const productTitle = document.createElement('p');
    const productThumbnail = document.createElement('img');
    const productDescription = document.createElement("p");
    const productPrice = document.createElement("p");

    // setting content and attributes for each product element
    productTitle.textContent = productItem.title;
    productDescription.textContent = productItem.description;
    productThumbnail.src = productItem.thumbnail;
    productPrice.textContent = productItem.price;

    // adding CSS classes to style the product elements
    productItemWrapper.classList.add('product-item-wrapper')
    productTitle.classList.add('product-title')
    productThumbnail.classList.add('product-img')
    productPrice.classList.add('product-price')
    productDescription.classList.add('product-desc')


    // appending product elements to the wrapper div
    productItemWrapper.appendChild(productThumbnail);
    productItemWrapper.appendChild(productTitle);
    productItemWrapper.appendChild(productPrice);
    productItemWrapper.appendChild(productDescription);

    // appending the wrapper div to the products container
    productsContainer.appendChild(productItemWrapper);
  });

  // disabling the load more button if the total number of displayed products reaches 100
  if(productsContainer.children.length === 100){
    loadmorebtn.setAttribute('disabled',true)
  }
}

// INitially fetching the list of products when the page loads
fetchListOfProducts(currentStep);

// adding an event listener to load more button to fetch more products when clicked
loadmorebtn.addEventListener('click',()=>{
  // this is called after every step, so that intially it fetch 10 product then increment currentStep and skip those above 10 products and get next 10 product
fetchListOfProducts((currentStep += 1))
})

// The await keyword is used here because fetch returns a Promise, and await waits for that Promise to resolve.

// (getCurrentStep = 1):

// skip = getCurrentStep * 10 = 1 * 10 = 10
// Now, it skips the first 10 products and retrieves the next 10 products, which are products 11 to 20.