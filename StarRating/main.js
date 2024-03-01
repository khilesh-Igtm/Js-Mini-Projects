const stars = document.querySelectorAll('.fa-star-o');
const selectedRatingValueText = document.querySelector('.selected-rating-value');

//If currentTotalSelectedStars remains -1, it indicates that no star has been selected.
// If currentTotalSelectedStars becomes 0, it represents the first star being selected.
// If currentTotalSelectedStars becomes 1, it represents the second star being selected.

let currentTotalSelectedStars = -1; //The reason for choosing -1 could be to indicate that initially, no stars are selected.

stars.forEach((starItem, index)=>{
   // Assign a 'rating' attribute to each star element with its index + 1
  starItem.dataset.rating = index+1;
  // Add event listeners for mouseover, click, and mouseleave events to each star element
  starItem.addEventListener('mouseover',handleMouseOver);
  starItem.addEventListener('click',handleOnClick);
  starItem.addEventListener('mouseleave',handleMouseLeave);
})

// function to handle mouse over event
function handleMouseOver(event){
// this means 1 star will have value 1 2 star will have 2 value and so on.
    console.log(event.target.dataset); 
        // Retrieve the current rating value from the data attribute of the event target or it mean whatever the rating value is on star will be stored in currentRatingValue
  const currentRatingValue = event.target.dataset.rating;
  // If no rating value is present, exit the function
  if(!currentRatingValue) return;
   // Otherwise, call the function to update the rating state
  else handleUpdateRatingState(currentRatingValue);
}

/////////////////// This is for making star colored based in their state value means whatevr the rating value is there , this function will make star yellow
// Function to update the rating state based on the current rating value
function handleUpdateRatingState(getCurrentRatingValue){
  // Loop through each star element
  for(let i=0;i<5;i++){
     // If the index is less than the current rating value, replace the empty star with a filled star icon or it means whenver we try to hover on star and let say it is 4th star and currently colored star was 2 , so this if condition will replace 3rd and 4th uncolored star with colored star
    if(i < getCurrentRatingValue){
      // fa-star-o is just star icon and fa-star is colored one
      stars[i].classList.replace("fa-star-o","fa-star");
    }
    // Otherwise, replace the filled star with an empty star icon
    else{
      stars[i].classList.replace("fa-star","fa-star-o");
    }
  }
}

// Function to handle click event on a star, SO whenver any star is clicked this function will called
function handleOnClick(event){
   // Retrieve the current rating value from the data attribute of the event target
  const currentRatingValue = event.target.dataset.rating;
  // Update the total selected stars
  currentTotalSelectedStars = currentRatingValue;
   // Update the rating state
  handleUpdateRatingState(currentTotalSelectedStars)
  // Update the text content to display the selected rating value
  selectedRatingValueText.textContent = currentTotalSelectedStars

}

function handleMouseLeave(){
  // Restore the rating state to the total selected stars when the mouse leaves the star area
  handleUpdateRatingState(currentTotalSelectedStars)
}


// So, starItem.dataset.rating = index+1; is setting a custom data attribute rating on each star element (starItem) to a value corresponding to its position in the NodeList plus 1. 