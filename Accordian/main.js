const data = [
  {
    id: '1',
    name: "Adeel Solangi",
    bio: "Dec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas who but now. For the sad feugiat is a soft life. Maecenas who but now."
  },
  {
    id: '2',
    name: "Afzal Ghaffar",
    bio: "Some concern before the ligula, it needs to be done and. The mass of the children, the chocolate should be hateful, the course of the time, the career. Even the homework, the life of the person. The vestibule pharetra libero et velit gravida Euismod."
  },
  {
    id: '3',
    name: "Aamir Solangi",
    bio: "Vestibulum pharetra libero et velit gravida Euismod. Quisque mauris ligula, efficciate porttitor members ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque."
  },
  {
    id: '4',
    name: "Abla Dilmurat",
    bio: "Until the story of the eleifend sauce. Morbi and the land were."
  },
  {
    id: '5',
    name: "Adil Eli",
    bio: "Let's live if the throat wants it, I'll put it on. Morbi vitae if not lacinia, laoreet lorem nor, egestat orci. Suspendisse potenti."
  },
];

const accordianWrapper = document.querySelector('.accordian');

function createAccordianData() {
  // Clear the inner HTML of the accordianWrapper
  accordianWrapper.innerHTML = data.map(
    (dataItem) => `
    <div class="accordian_item">
      <div class="accordian_title">
        <h3>${dataItem.name}</h3>
        <i class="fa-solid fa-arrow-down"></i>
      </div>
      <div class="accordian_content">
        <p>${dataItem.bio}</p>
      </div>
    </div>
    `
  ).join(" "); // Using join because it will remove the comma from the end and join them using an empty space
}

// Call the function to create the accordion items
createAccordianData();

// Get all the accordion titles
const getAccordianTitles = document.querySelectorAll('.accordian_title');

console.log('========================================================');
console.log(getAccordianTitles);
console.log('========================================================');

// Add click event listener to each accordion title
getAccordianTitles.forEach(currentItem => {
  currentItem.addEventListener('click', (event) => {
    // Check if the current item already has 'active' class
    if (currentItem.classList.contains('active')) {
      // If yes, remove 'active' class
      currentItem.classList.remove('active')
    } else {
      // If not, remove 'active' class from all other accordion titles
      let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');
      getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });

      // Add 'active' class to the clicked accordion title
      currentItem.classList.add("active");
    }
  })
});
