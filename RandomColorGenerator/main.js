const hexbtn = document.querySelector(".hex-btn");
const hexcolorvalue = document.querySelector(".hex-color-value");
const hexcolorcontainer = document.querySelector(".hex-color-container")
const hexCopyBtn = document.querySelector(".hex-copy-color");


//////////////////////////////////////////////////////// create random hex color

hexbtn.addEventListener("click", () => {
  // hex color has a range from 0 to 9 and A to F
  let characterSet = '0123456789ABCDEF';
  let hexColorOutput = "";

  // we are iterating 6 time in characterset , to get 6 random charcater ,so that we caan have a hex color
  for (let i = 0; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(Math.floor(Math.random() * characterSet.length))
  }

  // # is added in front of color code
  hexcolorvalue.textContent = `#${hexColorOutput}`;
  // changing the background according to color code
  hexcolorcontainer.style.backgroundColor = `#${hexColorOutput}`;
  // chnaging color of button
  hexbtn.style.color = `#${hexColorOutput}`;
})


//////////////////////////////////////////////////////// RGB Color Generator

const rgbBtn = document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getBlueInputRange = document.querySelector('#blue');
const getGreenInputRange = document.querySelector('#green');
const rgbColorContainer = document.querySelector('.rgb-color-container')
const rgbCopyBtn = document.querySelector(".rgb-copy-color");
const rgbcolorvalue = document.querySelector(".rgb-color-value");

rgbBtn.addEventListener('click',()=>{
  // getting the color value from the range button
  let extractRedValue = getRedInputRange.value;
  let extractBlueValue = getBlueInputRange.value;
  let extractGreenValue = getGreenInputRange.value;

  // getting rgb color format from range
  rgbcolorvalue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbBtn.style.color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

})

// for copying the hex color to clipboard
function copyHexColorToClipboard(){
  navigator.clipboard.writeText(hexcolorvalue.textContent);
  alert('Copied');
}
// calling the function when button is clicked
hexCopyBtn.addEventListener("click",copyHexColorToClipboard)


function copyRGBColorToClipboard(){
  navigator.clipboard.writeText(rgbcolorvalue.textContent);
  alert('Copied');
}
rgbCopyBtn.addEventListener("click",copyRGBColorToClipboard)