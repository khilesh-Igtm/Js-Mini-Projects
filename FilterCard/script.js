// define an array of categories
const categories = ['All', 'Men', 'Women', 'Kids'];

// define an array of content items with ids and labels
const content = [
  {
    id: 'Men',
    label: 'Men Shirt 1'
  },
  {
    id: 'Men',
    label: 'Men Shirt 2'
  },
  {
    id: 'Men',
    label: 'Men Shirt 3'
  },
  {
    id: 'Men',
    label: 'Men Shirt 4'
  },
  {
    id: 'Men',
    label: 'Men Shirt 5'
  },
  {
    id: 'Women',
    label: 'Women Shirt 1'
  },
  {
    id: 'Women',
    label: 'Women Shirt 2'
  },
  {
    id: 'Women',
    label: 'Women Shirt 3'
  },
  {
    id: 'Women',
    label: 'Women Shirt 4'
  },
  {
    id: 'Women',
    label: 'Women Shirt 5'
  },
  {
    id: 'Kids',
    label: 'Kids Shirt 1'
  },
  {
    id: 'Kids',
    label: 'Kids Shirt 2'
  },
  {
    id: 'Kids',
    label: 'Kids Shirt 3'
  },
  {
    id: 'Kids',
    label: 'Kids Shirt 4'
  },
  {
    id: 'Kids',
    label: 'Kids Shirt 5'
  }
]

// get the dom elements for filter button and content wrapper
const filterButtons = document.querySelector('.filter-buttons-wrapper');
const contentWrapper = document.querySelector('.content-wrapper')


// function to create filter button based on categories
function createCategory(){
  categories.forEach(category=>{
    // create a button element
    const buttonEle = document.createElement('button');
    // set button text to category name
    buttonEle.innerText = category;
    // add classes and attribute to button
    buttonEle.classList.add('filter-button');
    buttonEle.setAttribute('data-filter',category);

    // append button to filter buttons wrapper
    filterButtons.appendChild(buttonEle);
  })
}


// function to create content items

function createContent(){
  content.forEach(contentItem=>{
    // create a div for each content item
    const singleContentItem = document.createElement('div')
    // add classes and text content to content item
    singleContentItem.classList.add('card',contentItem.id);
    singleContentItem.textContent = contentItem.label

    // append content item to content wrapper
    contentWrapper.appendChild(singleContentItem)
  })
}

// call functions to create categroires and content
createCategory();
createContent()


// get all filter buttons and content cards
const allFilterButtons = document.querySelectorAll('.filter-button')
const allCards = document.querySelectorAll('.card')


console.log(allCards,allFilterButtons);

// function to filter cards based on category
function filterCardByCategory(extractCurrentCategory,allCards){
  // Loop through each card element in the allCards array
  allCards.forEach(item=>{
    // Check if the current category is 'All'
    const isShowAllCards = extractCurrentCategory.toLowerCase() === 'all';
    // Check if the current card does not belong to the extracted category
    const isItemFiltered = !item.classList.contains(extractCurrentCategory);

    // toggle 'hide' class based on category
    if(isItemFiltered && !isShowAllCards){
      // If the card does not belong to the extracted category and the category is not 'All', hide the card
      item.classList.add("hide");
    }
    else{
      // If the card belongs to the extracted category or the category is 'All', show the card
      item.classList.remove("hide");
    }
  })
}

// add click event listener to each filter button

allFilterButtons.forEach(singleFilterButtonItem=>{
  singleFilterButtonItem.addEventListener('click',()=>{
    // get the category from data-filter attribute
    const extractCurrentCategory = singleFilterButtonItem.dataset.filter;
    // call function to filter cards by category
    console.log(extractCurrentCategory);
    filterCardByCategory(extractCurrentCategory,allCards);
  })
})