document.addEventListener("DOMContentLoaded", () => {
  
  const mobileBtn = document.getElementById("mobile_btn");
  const mobileMenu = document.getElementById("mobile_menu");
  const mobileIcon = mobileBtn.querySelector("i");

  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    mobileIcon.classList.toggle("fa-bars");
    mobileIcon.classList.toggle("fa-x");
  });

  
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const scrollPosition = window.scrollY - header.offsetHeight;

    if (scrollPosition <= 0) {
      header.style.boxShadow = "none";
    } else {
      header.style.boxShadow = "5px 1px 5px rgba(0, 0, 0, 0.1)";
    }

    let activeSectionIndex = 0;

    sections.forEach((section, i) => {
      const sectionTop = section.offsetTop - 96;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
      }
    });

    navItems.forEach((item) => item.classList.remove("active"));
    if (navItems[activeSectionIndex]) {
      navItems[activeSectionIndex].classList.add("active");
    }
  });

  
  const heroContent = document.querySelector(".hero-content");
  heroContent.style.opacity = 0;
  heroContent.style.transform = "translateY(20px)";

  setTimeout(() => {
    heroContent.style.transition = "all 1s ease";
    heroContent.style.opacity = 1;
    heroContent.style.transform = "translateY(0)";
  }, 300);

  
  const slides = document.querySelectorAll(".slide");
  const leftArrow = document.querySelector(".nav-arrow.left");
  const rightArrow = document.querySelector(".nav-arrow.right");

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  rightArrow.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  leftArrow.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  let interval = setInterval(nextSlide, 5000);

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }
});







function animateCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;

      const increment = Math.ceil(target / 100);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}


let counted = false;
window.addEventListener("scroll", () => {
  const aboutSection = document.getElementById("about");
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (!counted && sectionTop < screenHeight - 100) {
    animateCounters();
    counted = true;
  }
});





  let currentSlide = 0;
  const slides = document.querySelectorAll(".galeria-slide");

  function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

    const offset = -currentSlide * 100;
    document.querySelector(".galeria-slides").style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  setInterval(nextSlide, 5000); 

  
  ScrollReveal().reveal('.reveal-fade', {
    origin: 'bottom',
    distance: '20px',
    duration: 800,
    delay: 200,
    opacity: 0,
    easing: 'ease-in-out',
    reset: false
  });

  ScrollReveal().reveal('.reveal-slide', {
    origin: 'left',
    distance: '60px',
    duration: 800,
    delay: 300,
    opacity: 0,
    easing: 'ease-in-out',
    reset: false
  });


  ScrollReveal().reveal('.reveal-fade', {
    origin: 'bottom',
    distance: '40px',
    duration: 800,
    opacity: 0,
    delay: 200,
    easing: 'ease-in-out',
    reset: false
  });



 
  const slider = document.getElementById('slider');
  const items = slider.children;
  const total = items.length;

  for (let i = 0; i < total; i++) {
    const clone = items[i].cloneNode(true);
    slider.appendChild(clone);
  }




  const avaliacoes = document.querySelectorAll('.avaliacao');
  let index = 0;

  setInterval(() => {
    avaliacoes[index].classList.remove('ativa');
    index = (index + 1) % avaliacoes.length;
    avaliacoes[index].classList.add('ativa');
  }, 5000); // troca a cada 5 segundos




function enviarWhatsApp() {
  const nome = document.querySelector('input[placeholder="Nome Completo *"]').value;
  const email = document.querySelector('input[placeholder="E-mail *"]').value;
  const telefone = document.getElementById('telefone').value;
  const data = document.querySelector('input[type="date"]').value;
  const idade = document.querySelector('select').value;
  const mensagem = document.querySelector('textarea').value;

  const texto = `Olá! Gostaria de planejar a minha festa´:
   Nome: ${nome}
  E-mail: ${email}
   Telefone: ${telefone}
   Data da Festa: ${data}
   Idade do Aniversariante: ${idade}
  Mensagem: ${mensagem}`;

  const telefoneDestino = '5548992464707'; 
  window.open(`https://wa.me/${telefoneDestino}?text=${encodeURI(texto)}`, '_blank');
}

