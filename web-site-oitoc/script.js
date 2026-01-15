const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.style.display =
    mobileMenu.style.display === 'block' ? 'none' : 'block';
});



const hero = document.querySelector(".hero");


const desktopImages = [
  "capa7.png",
  "capa8.png",
  "capa9.png"
  
];


const mobileImages = [
  "capa10.png",
  "capa11.png",
  "capa12.png"
  
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



document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const images = carouselTrack.querySelectorAll('img');
    const imageWidth = images[0].offsetWidth + (parseFloat(getComputedStyle(images[0]).paddingLeft) * 2);
    const totalImages = images.length / 2;
    
    carouselTrack.style.width = `${imageWidth * images.length}px`;
});


//fac


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Animação ao rolar — aparece uma pergunta por vez
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  faqItems.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 150); // atraso para aparecer uma por vez
    }
  });
});


        //depoimentos

        
  document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const cardCount = cards.length;
    let currentIndex = 0;
    const transitionTime = 5000; // 5000ms = 5 segundos

    // Função para mover o carrossel para o próximo depoimento
    function moveToNextCard() {
        // Incrementa o índice. Se for o último, volta para o primeiro (0)
        currentIndex = (currentIndex + 1) % cardCount;
        
        // Calcula a posição de deslocamento
        // Multiplica o índice atual pela largura de 100% de um card
        const offset = -currentIndex * 100;
        
        // Aplica a transformação CSS para mover o 'track'
        track.style.transform = `translateX(${offset}%)`;
    }

    // Inicia a transição automática
    // O setInterval executa a função moveToNextCard a cada 5 segundos
    setInterval(moveToNextCard, transitionTime);
    
    // Opcional: Para garantir que o carrossel inicie corretamente, 
    // chama a função uma vez após um pequeno delay.
    setTimeout(moveToNextCard, transitionTime);
});

document.getElementById('whatsappForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const servico = document.getElementById('servico').value;
            
            // Validar campos obrigatórios
            if (!nome || !telefone || !servico) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Formatar mensagem para WhatsApp
             const mensagem = `Olá! Gostaria de solicitar um orçamento para o serviço de *${servico}*.\n\n*Dados do Cliente:*\n📋 Nome: ${nome}\n📞 Telefone: ${telefone}\n\nPor favor, entre em contato comigo!`;
            
            // Número do WhatsApp (substitua pelo número real)
            const numeroWhatsApp = '5511948249592';
            
            // Codificar mensagem para URL
            const mensagemCodificada = encodeURIComponent(mensagem);
            
            // Criar URL do WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
            
            // Abrir WhatsApp
            window.open(urlWhatsApp, '_blank');
        });

        // Máscara para telefone
        document.getElementById('telefone').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length <= 11) {
                value = value.replace(/(\d{2})(\d)/, '($1) $2');
                value = value.replace(/(\d{5})(\d)/, '$1-$2');
            }
            
            e.target.value = value;
        });


        document.getElementById('whatsappFloat').addEventListener('click', function() {
            // Número do WhatsApp (substitua pelo número real)
            const numeroWhatsApp = '5511948249592';
            
            // Mensagem padrão
            const mensagemPadrao = 'Olá! Gostaria de mais informações sobre os serviços de Dedetização.';
            const mensagemCodificada = encodeURIComponent(mensagemPadrao);
            
            // Criar URL do WhatsApp
            const urlWhatsApp = `https://wa.me/${5511948249592}?text=${mensagemCodificada}`;
            
            // Abrir WhatsApp
            window.open(urlWhatsApp, '_blank');
        });

        // Opcional: Adicionar tooltip
        const whatsappFloat = document.getElementById('whatsappFloat');
        
        whatsappFloat.addEventListener('mouseenter', function() {
            // Criar tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'whatsapp-tooltip';
            tooltip.innerHTML = 'Fale conosco no WhatsApp!';
            tooltip.style.cssText = `
                position: absolute;
                bottom: 100%;
                right: 0;
                background: #333;
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 14px;
                white-space: nowrap;
                margin-bottom: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            `;
            
            // Adicionar setinha
            tooltip.style.position = 'absolute';
            tooltip.style.bottom = '100%';
            tooltip.style.right = '0';
            tooltip.style.marginBottom = '10px';
            
            const setinha = document.createElement('div');
            setinha.style.cssText = `
                position: absolute;
                top: 100%;
                right: 20px;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 5px solid #333;
            `;
            
            tooltip.appendChild(setinha);
            this.appendChild(tooltip);
        });
        
        whatsappFloat.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.whatsapp-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });

        //video

        
  document.addEventListener("DOMContentLoaded", function() {
    // SCRIPT DOS SERVIÇOS
    const servicoCards = document.querySelectorAll(".servico-card");

    servicoCards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("ativo");
      });

      card.addEventListener("mouseleave", () => {
        card.classList.remove("ativo");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // SCRIPT DO VÍDEO
    function openVideo() {
      document.querySelector('.thumbnail').style.display = 'none';
      const video = document.getElementById('videoPlayer');
      video.style.display = 'block';
      video.play();
    }

    // Faz a função ficar acessível globalmente (para o onclick funcionar)
    window.openVideo = openVideo;
  });



  document.addEventListener("DOMContentLoaded", () => {
  const promoSection = document.querySelector(".promocao-content");

  const aparecer = () => {
    const sectionTop = promoSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      promoSection.style.opacity = "1";
    }
  };

  window.addEventListener("scroll", aparecer);
  aparecer(); // ativa se já estiver visível
});


  function openVideo() {
    document.querySelector('.thumbnail').style.display = 'none';
    document.getElementById('videoPlayer').style.display = 'block';
    document.getElementById('videoPlayer').play();
  }

