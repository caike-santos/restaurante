
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.carousel__item');

let currentIndex = 0; 
const slideCount = slides.length; 
const slideWidth = slides[0].clientWidth; 


function moveToSlide(index) {
    
    const offset = -index * slideWidth;
    
    
    carousel.style.transform = `translateX(${offset}px)`;
    
    
    currentIndex = index;
}


nextBtn.addEventListener('click', () => {
    
    if (currentIndex < slideCount - 1) {
        moveToSlide(currentIndex + 1);
    } else {
      
        moveToSlide(0); 
    }
});


prevBtn.addEventListener('click', () => {
   
    if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
    } else {
       
        moveToSlide(slideCount - 1);
    }
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
       
    });
});


const hiddenElements = document.querySelectorAll('.hidden');


hiddenElements.forEach((el) => observer.observe(el));

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
 
  if (event.type === 'touchstart') event.preventDefault();
  
  const header = document.querySelector('header');
  header.classList.toggle('active');
  
  const active = header.classList.contains('active');
  
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);

btnMobile.addEventListener('touchstart', toggleMenu);



const navLinks = document.querySelectorAll('#menu-navegacao a');


function fecharMenuComClique() {
    const header = document.querySelector('header');
    header.classList.remove('active'); 

    
    const btnMobile = document.getElementById('btn-mobile');
    btnMobile.setAttribute('aria-expanded', 'false');
    btnMobile.setAttribute('aria-label', 'Abrir Menu');
}


navLinks.forEach(link => {
    link.addEventListener('click', fecharMenuComClique);
});
