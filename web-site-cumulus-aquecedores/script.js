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

document.addEventListener('DOMContentLoaded', () => {
      const searchIcon = document.getElementById('search-icon');
      const searchInput = document.getElementById('search-input');
      const searchContainer = document.querySelector('.search-container');

      if (!searchIcon || !searchInput || !searchContainer) {
        console.warn('Elementos de busca não encontrados. IDs esperados: #search-icon, #search-input, .search-container');
        return;
      }

   
      function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }

     
      function removeMarks() {
        document.querySelectorAll('mark').forEach(mark => {
          const parent = mark.parentNode;
          
          parent.replaceChild(document.createTextNode(mark.textContent), mark);
          parent.normalize();
        });
      }


      function showNoResultsToast() {
        const id = 'no-results-toast';
        if (document.getElementById(id)) return;
        const box = document.createElement('div');
        box.id = id;
        box.textContent = 'Nenhum resultado encontrado';
        Object.assign(box.style, {
          position: 'fixed',
          top: '12px',
          right: '12px',
          padding: '8px 12px',
          background: '#333',
          color: '#fff',
          borderRadius: '6px',
          zIndex: 99999,
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        });
        document.body.appendChild(box);
        setTimeout(() => { box.style.opacity = '0'; box.style.transition = 'opacity 0.35s'; }, 1800);
        setTimeout(() => box.remove(), 2200);
      }

      
      function searchSite(term) {
        removeMarks();
        if (!term) return;

        const escaped = escapeRegExp(term);
        const regex = new RegExp(escaped, 'gi');
        const termLower = term.toLowerCase();

        
        const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, span, a, td, label');

        let foundAny = false;
        elements.forEach(el => {
         
          if (el.children.length === 0) {
            const text = el.textContent || '';
            if (text.toLowerCase().includes(termLower)) {
            
              el.innerHTML = text.replace(regex, match => `<mark>${match}</mark>`);
              if (!foundAny) {
             
                const firstMark = el.querySelector('mark');
                if (firstMark) firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
              foundAny = true;
            }
          }
        });

        if (!foundAny) showNoResultsToast();
      }

  
      searchIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = searchInput.classList.toggle('active');
        if (isActive) {
          searchInput.focus();
          
          const len = searchInput.value.length;
          searchInput.setSelectionRange(len, len);
        } else {
          
        }
      });


      document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
          searchInput.classList.remove('active');
        }
      });

  
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const term = searchInput.value.trim();
          searchSite(term);
        } else if (e.key === 'Escape') {
          searchInput.classList.remove('active');
        }
      });

     
    });





  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;

     
      faqItem.classList.toggle('active');
    });
  });




   document.getElementById('formWhatsApp').addEventListener('submit', function(e) {
        e.preventDefault();

        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var celular = document.getElementById('celular').value;
        var assunto = document.getElementById('assunto').value;
        var mensagem = document.getElementById('mensagem').value;

        var numero = "5511981252689";

      
        var texto = `*Formulário de Contato*%0A` +
                    `*Nome:* ${nome}%0A` +
                    `*E-mail:* ${email}%0A` +
                    `*Celular:* ${celular}%0A` +
                    `*Assunto:* ${assunto}%0A` +
                    `*Mensagem:* ${mensagem}`;

      
        var url = `https://wa.me/${numero}?text=${texto}`;
        window.open(url, '_blank');
    });
