let slideIndex = 0;
const slides = document.getElementsByClassName("slides");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 5000); 
}

showSlides();



  const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav ul");
const hero = document.querySelector(".hero");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  hero.classList.toggle("hide-content"); 
});


const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");      
    hero.classList.remove("hide-content"); 
  });
});


//efeito de rolar a tela sobre nos


document.addEventListener("DOMContentLoaded", () => {
  const texto = document.querySelector(".sobre-nos-texto");
  const imagem = document.querySelector(".sobre-nos-imagem");

  if (!texto || !imagem) return;


  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0
  };

  const textoObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        texto.classList.add("aparecer");
      
        setTimeout(() => {
          imagem.classList.add("aparecer");
        }, 350);
        obs.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  textoObserver.observe(texto);


  if (!("IntersectionObserver" in window)) {
  
    const checkOnScroll = () => {
      const posTexto = texto.getBoundingClientRect().top;
      const alturaTela = window.innerHeight;
      if (posTexto < alturaTela - 100) {
        texto.classList.add("aparecer");
        setTimeout(() => imagem.classList.add("aparecer"), 350);
        window.removeEventListener("scroll", checkOnScroll);
      }
    };
    window.addEventListener("scroll", checkOnScroll);
    checkOnScroll(); 
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  let iniciou = false;

  function startCount() {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const duration = 2000; // 2 segundos
      const step = target / (duration / 16);

      let count = 0;
      const updateCount = () => {
        count += step;
        if (count < target) {
          counter.textContent = Math.floor(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      };
      updateCount();
    });
  }


  const sectionNumeros = document.querySelector(".numeros");
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !iniciou) {
        iniciou = true;
        startCount();
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(sectionNumeros);
});




document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('planejamento');
  if (!section) return;

  const titleSmall = section.querySelector('h3.reveal');
  const titleMain  = section.querySelector('h2.reveal');
  const cardsContainer = section.querySelector('.planejamento-container.reveal');
  const cards = section.querySelectorAll('.planejamento-card');
  const btnWrap = section.querySelector('.btn-planejamento.reveal');
 



  const getOr = (el, selector) => el ? el.querySelector(selector) : null;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -120px 0px',
    threshold: 0
  };

  const revealSequence = () => {
   
    if (titleSmall) {
      titleSmall.classList.add('active');
    }

  
    if (titleMain) {
      setTimeout(() => titleMain.classList.add('active'), 200);
    }

    
    if (cardsContainer) {
      setTimeout(() => cardsContainer.classList.add('active'), 350);
    }

 
    if (cards && cards.length) {
      cards.forEach((card, i) => {
     
        setTimeout(() => card.classList.add('active'), 500 + i * 150);
      });
    }

   
    if (btnWrap) {
      const delay = 500 + (cards.length ? cards.length * 150 : 0) + 150;
      setTimeout(() => btnWrap.classList.add('active'), delay);
    }
  };

  
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealSequence();
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  io.observe(section);


  if (!('IntersectionObserver' in window)) {
   
    const tryFallback = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        revealSequence();
        window.removeEventListener('scroll', tryFallback);
      }
    };
    window.addEventListener('scroll', tryFallback);
    tryFallback();
  }
});



 
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const items = Array.from(slider.children);

 
  items.forEach(item => {
    const clone = item.cloneNode(true);
    slider.appendChild(clone);
  });
});

//form


document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const duvida = document.getElementById("duvida").value.trim();

  if (!nome || !email || !duvida) {
    alert("Por favor, preencha todos os campos.");
    return;
  }


  const mensagem = `Olá! Meu nome é ${nome}.\nEmail: ${email}.\nMinha dúvida é: ${duvida}`;

 
  const numeroDestino = "5511947645216"; 

  const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;


  window.open(url, "_blank");
});
