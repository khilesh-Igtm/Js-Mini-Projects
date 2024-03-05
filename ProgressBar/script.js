const progress = document.querySelector('.progress');
const previousbtn = document.querySelector('.previous')
const nextbtn = document.querySelector('.next')
const iconWrapper = document.querySelectorAll('.icon-wrapper')

let currentSelectedStep = 1;
nextbtn.addEventListener('click',()=>{
  if(currentSelectedStep < iconWrapper.length){
    currentSelectedStep++
  }
  handleUpdateStep()
})

previousbtn.addEventListener('click',()=>{
  if(currentSelectedStep > 1){
    currentSelectedStep--
  }
  handleUpdateStep()
})

function handleUpdateStep(){
  iconWrapper.forEach((item,index)=>{
    if(index < currentSelectedStep){
      item.classList.add('active')
    }
    else{
      item.classList.remove('active')
    }
  });

  progress.style.width = ((currentSelectedStep - 1)/(iconWrapper.length - 1)) * 100 + "%";

  if(currentSelectedStep === 1){
    previousbtn.disabled = true
  }
  else if(currentSelectedStep === iconWrapper.length){
    nextbtn.disabled = true
  }
  else{
    previousbtn.disabled = false
    nextbtn.disabled = false
  }
}