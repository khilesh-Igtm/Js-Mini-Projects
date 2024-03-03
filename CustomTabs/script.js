// get the DOM ELement with the class 'container'
const tabContainer = document.querySelector('.container')

// get all DOM ELements with the class 'tab-button'
const tabButtons = document.querySelectorAll('.tab-button')
const tabContents = document.querySelectorAll('.content')

// add an event listener to the tabContainer for 'click' events
tabContainer.addEventListener('click',(event)=>{

  //log the dataset of the clicked element to the console
  console.log(event.target.dataset);

  // get the 'id' attribute from the clicked element's dataset
  const currentId = event.target.dataset.id;


// check if currentID is truthy i.e it exists
  if(currentId){

    // remove the 'active' class from all tab buttons
    tabButtons.forEach(btn=>{
      btn.classList.remove('active')
    })
    // add 'active' class to the clicked tab button
    event.target.classList.add('active')

    //remove the 'active' class from all content elements
    tabContents.forEach(content=>{
      content.classList.remove('active');
    })

    // get the DOM Elements with the ID stored in currentID
    const currentElement = document.getElementById(currentId)

    // add the 'active' class to the content element corresponding to the clicked tab button
    currentElement.classList.add("active");
  }

  
})

