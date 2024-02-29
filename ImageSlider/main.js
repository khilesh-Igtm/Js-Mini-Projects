const slider = document.querySelector('.slider')
const dotsContainer = document.querySelector('.dotsContainer');


// Function to fetch list of images from an external API
async function fetchListOfImages() {
  try {
    const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10', { method: 'GET', })
    const result = await response.json();
     // If images are fetched successfully, display them
    if (result && result.length > 0) displayImages(result)
    console.log(result);
  } catch (error) {
    console.log(error)
  }

}


// Function to display fetched images in the slider
function displayImages(getImagesList) {
  slider.innerHTML = getImagesList.map((item) => `
  <div class ="slide">
  <img src = ${item.download_url} alt = ${item.id} />
  </div>
  `).join(" ")

  // Create dots for each slide to indicate current slide position

  //  adds the class "active" to the dot if its index is 0 (meaning it's the first dot), and it adds an empty string if it's not the first dot
  dotsContainer.innerHTML = getImagesList.map((item, index) => `
  <span class="dot ${index === 0 ? 'active' : " "}" data-slide=${index}></span>
  `).join(" ")
}

fetchListOfImages();

// Slider functionality begins after 1 second delay
// This sets up a delay of 1000 milliseconds (1 second) before executing the code inside the setTimeout callback function. This delay allows time for the images to load before setting up the slider functionality.
// 
setTimeout(() => {

  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  // Initializes a variable currentSlide to keep track of the index of the currently displayed slide.
  let currentSlide = 0;

  // Function to highlight the active dot based on current slide
  function activeDot(slide) {
    document.querySelectorAll('.dot').forEach(dotItem => dotItem.classList.remove('active'));

    // ${slide} represents the index of the current slide.
    // It then adds the class 'active' to the selected dot, indicating that it represents the current slide.
    // It removes the 'active' class from all dots and then adds the 'active' class to the dot representing the current slide, ensuring that only the dot corresponding to the current slide appears as active.
    document.querySelector(`.dot[data-slide="${slide}"]`).classList.add("active");

  }

  // Function to change the position of slides based on current slide
  // Overall, this function adjusts the position of each slide in the slider container based on the difference between its index and the index of the current slide. This creates a sliding effect where the current slide is positioned at the center, while the adjacent slides are positioned to its left and right accordingly.
  function changeCurrentSlide(currentSlide) {
    slides.forEach((slideItem, index) => (slideItem.style.transform = `translateX(${100 * (index - currentSlide)}%)`));

  }
  nextBtn.addEventListener('click', () => {
    currentSlide++;

    // Check if the 'currentSlide' is greater than the number of slides minus 1.
    // If so, it means we have reached the last slide, so reset 'currentSlide' to 0 to loop back to the first slide.
    if (slides.length - 1 < currentSlide) {
      currentSlide = 0
    }
    // Call the function 'changeCurrentSlide' to display the current slide based on the updated 'currentSlide' value.
    changeCurrentSlide(currentSlide)
    // Call the function 'activeDot' to update the active dot indicator based on the updated 'currentSlide' value.
    activeDot(currentSlide)

  })
  prevBtn.addEventListener('click', () => {
    // The 'currentSlide' variable keeps track of the index of the currently displayed slide.
    currentSlide--;
    if (0 > currentSlide) {
      currentSlide = slides.length - 1;
    }
    // 'changeCurrentSlide(currentSlide)' updates the display to show the slide corresponding to the new 'currentSlide' value.
    changeCurrentSlide(currentSlide)
    // 'activeDot(currentSlide)' updates the indicator dots to highlight the dot corresponding to the current slide.
    activeDot(currentSlide)

  })


  // When a dot is clicked, the event listener triggers the callback function to handle the click event.
  dotsContainer.addEventListener('click', (event) => {
    // Check if the clicked element has the class 'dot'.
    if (event.target.classList.contains('dot')) {
       // If the clicked element is a dot, extract the 'data-slide' attribute value,
        // which represents the index of the slide associated with the clicked dot.
      const currentSlide = event.target.dataset.slide
      changeCurrentSlide(currentSlide)
      activeDot(currentSlide)
    }

  })



}, 1000);

