$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});


let current = 0;
const images = document.querySelectorAll(".carousel-img");

function showNextImage() {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}

setInterval(showNextImage, 4000);

// Menu mobile toggle
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("open");
}


document.addEventListener('DOMContentLoaded', () => {
  const sobreNos = document.querySelector('.sobre-nos');

  function checkVisibility() {
    const rect = sobreNos.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 0.75) {
      // Adiciona a classe que começa a animação do texto
      sobreNos.classList.add('animate-text');

      // Depois de 400ms, adiciona a classe que faz a imagem aparecer
      setTimeout(() => {
        sobreNos.classList.add('animate-image');
      }, 400);

      // Para de escutar o scroll depois que animar
      window.removeEventListener('scroll', checkVisibility);
    }
  }

  window.addEventListener('scroll', checkVisibility);
  // Verifica logo de início caso já esteja visível
  checkVisibility();
});


function showElements() {
  let allShown = true;

  cards.forEach((card, index) => {
    if (isInViewport(card)) {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 200);
    } else {
      allShown = false;
    }
  });

  if (allShown && isInViewport(button)) {
    setTimeout(() => {
      button.classList.add('show');
    }, cards.length * 200);
  }
}


const cards = document.querySelectorAll('.card');
const button = document.querySelector('.btn-container');
let cardsRevealed = false;
let buttonShown = false;

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight;
}

function showCardsSequentially() {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('show');
      if (index === cards.length - 1) {
        // último card → mostra o botão depois de 500ms
        setTimeout(() => {
          button.classList.add('show');
          buttonShown = true;
        }, 500);
      }
    }, index * 300);
  });
  cardsRevealed = true;
}

window.addEventListener('scroll', () => {
  const section = document.querySelector('#especialidades');
  if (isInViewport(section) && !cardsRevealed) {
    showCardsSequentially();
  }
});

window.addEventListener('load', () => {
  const section = document.querySelector('#especialidades');
  if (isInViewport(section) && !cardsRevealed) {
    showCardsSequentially();
  }
});


// Mostrar elementos da seção Sócios com animação ao rolar a página
const sociosSection = document.querySelector('#socios');
const sociosTitulo = sociosSection.querySelector('.titulo');
const sociosCards = sociosSection.querySelectorAll('.socio-card');

let sociosRevealed = false;

function showSocios() {
  if (!sociosRevealed && isInViewport(sociosSection)) {
    sociosTitulo.classList.add('show');

    sociosCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, (index + 1) * 300);
    });

    sociosRevealed = true;
  }
}

window.addEventListener('scroll', showSocios);
window.addEventListener('load', showSocios);



document.addEventListener("DOMContentLoaded", () => {
  // Efeito de scroll
  const faqItems = document.querySelectorAll(".faq-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  faqItems.forEach(item => observer.observe(item));

  // Acordeão com seta
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains("active");

      document.querySelectorAll(".faq-answer").forEach(a => {
        a.style.maxHeight = null;
      });
      document.querySelectorAll(".faq-question").forEach(q => {
        q.classList.remove("active");
      });

      if (!isOpen) {
        btn.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => observer.observe(card));
});







document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const duvida = document.getElementById("duvida").value.trim();

  if (!nome || !email || !whatsapp || !duvida) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Mensagem formatada com \n para separar linhas
  const mensagem = `Olá, meu nome é ${nome}.\nEmail: ${email}.\nWhatsApp: ${whatsapp}.\nMinha dúvida é: ${duvida}`;

  const numeroDestino = "5511943421062"; // número no formato internacional sem +
  const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});


