

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
