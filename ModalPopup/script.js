const openmodalBtn = document.querySelector('.openModal');
const modalBackground = document.querySelector('.modal-background');
const closeIcon = document.querySelector('.close-icon');
const closeBtn = document.querySelector('.close')

openmodalBtn.addEventListener('click',()=>{
  modalBackground.style.display = "block";
});

closeIcon.addEventListener('click',()=>{
  modalBackground.style.display = "none"
})

window.addEventListener('click',(event)=>{
  // so whenever i click any part of bg when popup box is visible
  // then class of modal-background is shown in console
  console.log(event.target);
  if(event.target === modalBackground){
    modalBackground.style.display = "none";
  }
})

closeBtn.addEventListener('click',()=>{
  modalBackground.style.display = "none"
})