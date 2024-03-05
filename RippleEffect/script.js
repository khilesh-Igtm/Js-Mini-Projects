// Selecting all elements with the class name 'ripple-effect' and storing them in 'getAllButtons'
const getAllButtons = document.querySelectorAll('.ripple-effect');

// iterated through each button selected
getAllButtons.forEach((btn)=>{
  // adding a click event listener when button is clicked
  btn.addEventListener("click",(event)=>{

    // logging the horizontal and vertical coordinates of the mouse click relative to browser window and the position of the clicked button relative to the window -> google these
    console.log(event.clientX, event.target.offsetLeft, event.clientY, event.target.offsetTop);

    // Calculating the position of the ripple effect relative to the clicked button
    let xCoordinateValue = event.clientX - event.target.offsetLeft;
    let yCoordinateValue = event.clientY - event.target.offsetTop;

    console.log(xCoordinateValue);
    console.log(yCoordinateValue);

    // Creating a new span element to represent the ripple effect
    let rippleElement = document.createElement("span");

     // Setting the position of the ripple effect within the button
    rippleElement.style.left = `${xCoordinateValue}px`;
    rippleElement.style.top = `${yCoordinateValue}px`;

     // Appending the ripple element to the clicked button
    btn.appendChild(rippleElement);

    // Removing the ripple effect after 500 milliseconds (0.5 seconds)
    window.setTimeout(()=>{
      rippleElement.remove();

    },500);
  })
});