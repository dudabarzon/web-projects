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


/*primeira parte*/


const hero = document.querySelector(".hero");


const desktopImages = [
  "capasub.png",
  "capa2.png",
  "capa1.png",
  "capa3.png"
];


const mobileImages = [
  "capasub2.png",
  "capa55.png",
  "capa44.png",
  "capa66.png"
  
];

let current = 0;
let interval;
let currentSet = [];


function startCarousel() {
  clearInterval(interval);

  if (window.innerWidth <= 768) {
    currentSet = mobileImages; 
  } else {
    currentSet = desktopImages; 
  }

  current = 0;
  hero.style.backgroundImage = `url(${currentSet[current]})`;

  interval = setInterval(() => {
    current = (current + 1) % currentSet.length;
    hero.style.backgroundImage = `url(${currentSet[current]})`;
  }, 4000);
}


const heroContent = document.querySelector(".hero-content");
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + window.innerHeight;
  if (scrollPos > heroContent.offsetTop + 100) {
    heroContent.classList.add("show");
  }
});

// Inicia o carrossel
startCarousel();


window.addEventListener("resize", () => {
  startCarousel();
});

//segunda parte do site


const sobreTexto = document.querySelector(".sobre-texto");
const sobreImg = document.querySelector(".sobre-img");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + window.innerHeight;

  if (scrollPos > sobreTexto.offsetTop + 100) {
    sobreTexto.classList.add("show");
    setTimeout(() => {
      sobreImg.classList.add("show");
    }, 400); // aparece a imagem 0.4s depois do texto
  }
});


//terceira parte do site

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const trigger = window.scrollY + window.innerHeight;

  cards.forEach((card, i) => {
    if (trigger > card.offsetTop + 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = `all 0.6s ease ${i * 0.05}s`;
    }
  });
});


cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
});


//parte quatro

 ScrollReveal().reveal('.card-servico', {
    duration: 1000,
    distance: '40px',
    origin: 'bottom',
    interval: 150,
    reset: false
  });


  //fac 5 parte


   const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");

      // Fecha as outras perguntas
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });


  //avaliações


  const carrossel = document.querySelector('.carrossel');
  const avaliacoes = Array.from(carrossel.children);
  const btnEsquerda = document.querySelector('.seta.esquerda');
  const btnDireita = document.querySelector('.seta.direita');

  let index = 0;
  const gap = 25; 
  const largura = avaliacoes[0].offsetWidth;

 
  carrossel.innerHTML += carrossel.innerHTML;

  function moverCarrossel() {
    carrossel.style.transition = 'transform 0.6s ease';
    carrossel.style.transform = `translateX(${-index * (largura + gap)}px)`;
  }

  function proximo() {
    index++;
    moverCarrossel();

    if (index >= avaliacoes.length) {
      setTimeout(() => {
        carrossel.style.transition = 'none';
        index = 0;
        carrossel.style.transform = `translateX(0px)`;
      }, 600);
    }
  }

  function anterior() {
    if (index <= 0) {
      index = avaliacoes.length;
      carrossel.style.transition = 'none';
      carrossel.style.transform = `translateX(${-index * (largura + gap)}px)`;
    }
    setTimeout(() => {
      index--;
      moverCarrossel();
    }, 20);
  }

  btnDireita.addEventListener('click', proximo);
  btnEsquerda.addEventListener('click', anterior);

  
  setInterval(proximo, 4000);



document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();

    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    
    const numero = "5532991358281"; 

   
    const texto = `Olá! 👋%0A%0A*Nome:* ${nome}%0A*Telefone:* ${telefone}%0A*Cidade:* ${cidade}%0A*E-mail:* ${email}%0A*Mensagem:* ${mensagem}`;

 
    const url = `https://wa.me/${numero}?text=${texto}`;

   
    window.open(url, '_blank');
  });


  (function(){
    const el = document.getElementById('whatsapp-float');
    if (!el) return;
    el.addEventListener('click', function(){
     
    });
  })();


    window.addEventListener('scroll', function () {
    const heroContent = document.querySelector('.hero-content');
    const position = heroContent.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      heroContent.classList.add('show');
    }
  });



 

  ScrollReveal().reveal('.conteudo-vantagens h4', {
    duration: 800,
    distance: '40px',
    origin: 'left',
    delay: 100
  });
  ScrollReveal().reveal('.conteudo-vantagens h2', {
    duration: 900,
    distance: '40px',
    origin: 'left',
    delay: 200
  });
  ScrollReveal().reveal('.lista-vantagens li', {
    duration: 1000,
    distance: '40px',
    origin: 'bottom',
    interval: 150
  });
  ScrollReveal().reveal('.conteudo-vantagens p', {
    duration: 900,
    distance: '40px',
    origin: 'left',
    delay: 700
  });
  ScrollReveal().reveal('.botao-vantagens', {
    duration: 1000,
    distance: '40px',
    origin: 'bottom',
    delay: 900
  });
