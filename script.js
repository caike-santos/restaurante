// 1. Selecionar os elementos do HTML
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.carousel__item');

// 2. Definir variáveis de controle
let currentIndex = 0; // Começa no primeiro slide (índice 0)
const slideCount = slides.length; // Quantidade total de slides
const slideWidth = slides[0].clientWidth; // Largura de um slide

// 3. Função para mover o carrossel
function moveToSlide(index) {
    // Calcula o deslocamento necessário para mover o trilho
    const offset = -index * slideWidth;
    
    // Aplica o estilo CSS 'transform' para mover o carrossel
    carousel.style.transform = `translateX(${offset}px)`;
    
    // Atualiza o índice atual
    currentIndex = index;
}

// 4. Adicionar "escutadores" de eventos de clique nos botões

// Botão "Próximo"
nextBtn.addEventListener('click', () => {
    // Verifica se não está no último slide
    if (currentIndex < slideCount - 1) {
        moveToSlide(currentIndex + 1);
    } else {
        // Opcional: voltar para o primeiro slide (efeito de loop)
        moveToSlide(0); 
    }
});

// Botão "Anterior"
prevBtn.addEventListener('click', () => {
    // Verifica se não está no primeiro slide
    if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
    } else {
        // Opcional: ir para o último slide (efeito de loop)
        moveToSlide(slideCount - 1);
    }
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Se o elemento estiver visível na tela
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        // Opcional: para a animação acontecer sempre que rolar para cima e para baixo
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

// Seleciona todos os elementos com a classe 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// Pede ao observador para "observar" cada um desses elementos
hiddenElements.forEach((el) => observer.observe(el));
// --- CÓDIGO PARA O MENU HAMBÚRGUER ---
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  // Previne o comportamento padrão de toque (abrir o teclado, etc.)
  if (event.type === 'touchstart') event.preventDefault();
  
  const header = document.querySelector('header');
  header.classList.toggle('active');
  
  const active = header.classList.contains('active');
  // Acessibilidade: informa se o menu está expandido ou não
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
// Adiciona evento de toque para melhor responsividade em celulares
btnMobile.addEventListener('touchstart', toggleMenu);


// --- SEU CÓDIGO DO CARROSSEL (pode deixar como está) ---
// ... (seu código do carrossel continua aqui)
// --- NOVO CÓDIGO PARA FECHAR O MENU AO CLICAR NO LINK ---

// 1. Seleciona todos os links que estão dentro do menu de navegação
const navLinks = document.querySelectorAll('#menu-navegacao a');

// 2. Cria a função que será responsável por fechar o menu
function fecharMenuComClique() {
    const header = document.querySelector('header');
    header.classList.remove('active'); // Remove a classe 'active' para fechar

    // Também atualizamos os atributos de acessibilidade do botão principal
    const btnMobile = document.getElementById('btn-mobile');
    btnMobile.setAttribute('aria-expanded', 'false');
    btnMobile.setAttribute('aria-label', 'Abrir Menu');
}

// 3. Adiciona um "ouvinte de clique" para CADA link do menu
navLinks.forEach(link => {
    link.addEventListener('click', fecharMenuComClique);
});
