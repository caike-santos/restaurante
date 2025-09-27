// =========================
// CÓDIGO DA ANIMAÇÃO SCROLL
// =========================

const observer = new IntersectionObserver((entries) => {
    // Itera sobre cada 'entrada' (elemento) que o observador está vigiando
    entries.forEach((entry) => {
        // Se o elemento está agora visível na tela...
        if (entry.isIntersecting) {
            // ...adiciona a classe 'show' para torná-lo visível.
            entry.target.classList.add('show');
        }
    });
});

// Seleciona todos os elementos no HTML que têm a classe 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// Manda o observador vigiar cada um desses elementos
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