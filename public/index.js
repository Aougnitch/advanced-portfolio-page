let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shape = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
  
    for (let i = 0; i < shape.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      // Added rotate after tutorial
      shape[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
  }

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme"
    }
    else {
      document.body.classList.remove("dark-theme")
    }
  }

function contact(event) {
    event.preventDefault()
    const Sent = document.querySelector('.modal__overlay--sent') 
    Sent.classList += ' modal__overlay--visiable'
    
emailjs
    .sendForm ( 
        'service_ptkb2d6',
        'template_ozifaa5',
        event.target, 
        'Szfot3iCegl2LY4Gn'
     ) .then (() => {
        Sent.classList.remove ('modal__overlay--visiable')
        Sent.classList += ' modal__overlay--visiable'
    }).catch(() => {
        Sent.classList.remove ('modal__overlay--visiable')
        alert(
            "The email service is temporarily unavailable. Contact me directly at alexaougnitch@gmail.com"
        )
    })


    setTimeout (() => {

        console.log ('it worked')
    }, 1000);
}



function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }
  