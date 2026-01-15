/*header*/


.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 25px;
  right: 25px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 1.8s infinite;
  transition: transform 0.3s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}

.whatsapp-icon {
  width: 32px;
  height: 32px;
  filter: invert(1);
}

/* Efeito de pulsar */
@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

 header {
    width: 100%;
    padding: 30px 8%;
    position: sticky;
    top: 0;
    background-color: var(--color-primary-1);
    z-index: 3;
}

#navbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#nav_logo {
    font-size: 24px;
    color: var(--color-primary-6);
}

#nav_list {
    display: flex;
    list-style: none;
    gap: 48px;
}

.nav-item a {
    text-decoration: none;
    color: #000;
    font-weight: 450;
    text-decoration: none;
}

.nav-item.active a {
    color: var(--color-neutral-1);
    border-bottom: 3px solid var(--color-primary-4);
    text-decoration: none;
}

#mobile_btn {
    display: none;
}

#mobile_menu {
    display: none;
    text-decoration: none;
}

@media screen and (max-width: 1170px) {
    #nav_list,
    #navbar .btn-default {
        display: none;
    }

    #mobile_btn {
        display: block;
        border: none;
        background-color: transparent;
        font-size: 1.5rem;
        cursor: pointer;
    }

    #mobile_menu.active {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #mobile_nav_list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 12px 0px;
    }

    #mobile_nav_list .nav-item {
        list-style: none;
        text-align: center;
    } 

    #navbar img{
      width: 250px
    }
}


:root {
    --color-primary-1: #fff;
    --color-primary-2: #fff;
    --color-primary-3: #f8d477;
    --color-primary-4: #fff;
    --color-primary-5: #488943;
    --color-primary-6: #488943;

    --color-neutral-0: #fff;
    --color-neutral-1: #1d1d1d;
}

* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--color-primary-1);
}

section {
    padding: 28px 8%;
}

.btn-default {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary-5);
    border-radius: 15px;
    padding: 15px 10px;
    font-weight: 450;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color .3s ease;
    color: #fff;
    text-decoration: none;
}

.btn-default:hover {
    background-color: var(--color-primary-3);
}




@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@400;600&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.hero h1{
  color: #488943;
}

.hero {
  position: relative;
  height: 74vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: #fff;
  transition: background-image 1s ease-in-out;
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin-left: 80px;
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 1s ease, transform 1s ease;
}

.hero-content.show {
  opacity: 1;
  transform: translateY(0);
}

.hero-logo {
  width: 320px;
  margin-bottom: 25px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease, transform 1s ease;
}

.hero-content.show .hero-logo {
  opacity: 1;
  transform: translateY(0);
}

.hero p {
  font-family: "Inter", sans-serif;
  font-size: 1.15rem;
  line-height: 1.7;
  letter-spacing: 0.3px;
  color: #d9d9d9;
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease 0.5s, transform 1s ease 0.5s;
}
.hero-content.show p {
  opacity: 1;
  transform: translateY(0);
}

.btn {
  background: #488943;
  color: white;
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease 1s, transform 1s ease 1s;
}

.hero-content.show .btn {
  opacity: 1;
  transform: translateY(0);
}

/* Responsivo */
@media (max-width: 768px) {
  .hero-content {
    margin-left: 30px;
    text-align: left;
  }

  .hero-logo {
    width: 250px;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .hero {
    height: 80vh;
  }
}


/*segunda parte do site*/

.sobre {
  padding: 80px 5%;
  background-color: #fdfcfb;
}

.sobre-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}

.sobre-img {
  flex: 1;
  min-width: 300px;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s ease, transform 1s ease;
}

.sobre-img.show {
  opacity: 1;
  transform: translateY(0);
}

.sobre-img img {
  width: 100%;
  
}

.sobre-texto {
  flex: 1;
  min-width: 320px;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s ease, transform 1s ease;
}

.sobre-texto.show {
  opacity: 1;
  transform: translateY(0);
}

.sobre-texto h4 {
  color: #488943;
  font-weight: 600;
  margin-bottom: 8px;
}

.sobre-texto h2 {
  font-size: 2.3rem;
  color: #488943;
  font-weight: 700;
  margin-bottom: 15px;
}

.linha {
  color: #488943;
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.sobre-texto p {
  margin-bottom: 15px;
  line-height: 1.6;
  color: #333;
}

.btn-sobre {
  display: inline-block;
  border: 2px solid #488943;
  color: #488943;
  padding: 10px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-sobre:hover {
  background: #488943;
  color: #fff;
}


@media (max-width: 768px) {
  .sobre-container {
    flex-direction: column-reverse;
    text-align: left;
  }

  .sobre-texto {
    text-align: left;
  }

  .sobre-texto h2 {
    font-size: 1.8rem;
  }
  .sobre-texto p {
  margin-bottom: 15px;
  line-height: 1.4;
  color: #333;
}
}

/*terceira parte do site*/

.solucoes {
  text-align: center;
  padding: 80px 5%;
  background-image: url('capaPrincipal.png') ;
  background-repeat: no-repeat;
  background-position: center center; 
  background-size: cover;
}

.titulo-solucoes {
  display: inline-block;
  background: #488943;
  color: #fff;
  padding: 14px 40px;
  border-radius: 20px;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 50px;
}

.grid-solucoes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
  justify-items: center;
}


.card {
  border: 2px solid #488943;
  color: #002b00;
  border-radius: 30px;
  padding: 10px;
  font-weight: 500;
  font-size: 0.95rem;
  text-align: center;
  transition: all 0.3s ease;
  background-color: #fff;
  max-width: 260px;
  width: 100%;
  height: 85px; 
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.card:hover {
  background: #488943;
  color: #fff;
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}


.destaque {
  background: #003a32;
  color: #fff;
  font-weight: 600;
}


@media (max-width: 768px) {
  .grid-solucoes {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .card {
    max-width: 100%;
    height: 75px; 
    font-size: 0.9rem;
  }

  .titulo-solucoes {
    font-size: 1.5rem;
    padding: 10px 30px;
  }

  .card {
  border: 2px solid #488943;
  color: #002b00;
  border-radius: 30px;
  padding: 10px;
  font-weight: 500;
  font-size: 1.0rem;
  text-align: center;
  transition: all 0.3s ease;
  background-color: #fff;
  max-width: 260px;
  width: 100%;
  height: 85px; 
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
}

/*parte quatro*/


.outros-servicos {
  background: #fff;
  color: #fff;
  padding: 80px 5%;
  text-align: center;
  background-image: url('capaPrincipal.png');
  background-size: cover;
  background-position: center;
}

.outros-servicos h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
}

.icon-titulo {
  width: 35px;
  height: 35px;
}

.outros-servicos .descricao {
  max-width: 900px;
  margin: 0 auto 60px;
  font-size: 1rem;
  line-height: 1.6;
}






.grid-servicos {
 
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: flex-start; 
  gap: 25px; 
  max-width: 1050px; 
  margin: 0 auto; 
}


.card-servico {
  width: 330px; 
  height: 310px;
  
}


@media (max-width: 768px) {
  .grid-servicos {
    max-width: 100%;
  }

  .card-servico {
    width: 90%; 
    max-width: 330px; 
  }
  
 
}


.card-servico {
  position: relative;
  background: #fff;
  color: #1a1a1a;
  border-radius: 18px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 330px;
  height: 310px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  justify-self: start;
  position: relative;
}

.card-servico:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 18px rgba(0,0,0,0.25);
}

.card-servico .conteudo {
  padding: 30px 20px;
  transition: opacity 0.3s ease;
}

.icon-servico {
  width: 55px;
  height: 55px;
  margin-bottom: 15px;
}

.card-servico .conteudo h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #488943;
}

.card-servico .conteudo p {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #000;
}

.card-servico .overlay {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card-servico .overlay img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.card-servico:hover .conteudo {
  opacity: 0;
}

.card-servico:hover .overlay {
  opacity: 1;
}


@media (max-width: 768px) {
  .grid-servicos {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .card-servico:nth-child(4),
  .card-servico:nth-child(5) {
    transform: none;
    margin-left: 0;
  }
}



@media (max-width: 768px) {
  .grid-servicos {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .card-servico {
    height: 270px;
  }

  .outros-servicos .descricao {
  max-width: 900px;
  margin: 0 auto 60px;
  font-size: 1.1rem;
  line-height: 1.6;
}

.card-servico .conteudo p {
  font-size: 1.0rem;
  line-height: 1.5;
  color: #333;
}

}

@media (max-width: 768px) {
  .grid-servicos {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .card-servico:nth-child(4),
  .card-servico:nth-child(5) {
    transform: none;
    margin-left: 0;
  }
}



.vantagens {
  background: url('capasub.png') center/cover no-repeat;
  color: #fff;
  padding: 100px 5%;
  display: flex;
  align-items: center;
  min-height: 80vh;
}

.conteudo-vantagens {
  max-width: 600px;
  background: rgba(129, 127, 127, 0.197);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
}

.vantagens h4 {
  color: #9bd67a;
  font-size: 0.95rem;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.vantagens h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 25px;
}

.lista-vantagens {
  list-style: none;
  margin-bottom: 25px;
}

.lista-vantagens li {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1rem;
  line-height: 1.5;
}

.lista-vantagens img {
  width: 22px;
  margin-right: 10px;
}

.vantagens p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 25px;
}

.botao-vantagens {
  display: inline-block;
  background: #4caf50;
  color: #fff;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 600;
  transition: background 0.3s ease;
  text-decoration: none;
}

.botao-vantagens:hover {
  background: #3a913f;
}


.img-mobile {
  display: none;
  width: 100%;
  margin-top: 30px;
  border-radius: 15px;
}

/* Responsivo */
@media (max-width: 768px) {
  .vantagens {
    padding: 80px 20px;
    text-align: left;
  }

  .conteudo-vantagens {
    max-width: 100%;
    padding: 30px;
  }

  .vantagens h2 {
    font-size: 1.7rem;
  }

  .img-mobile {
    display: block;
  }
}



/*fac 5 parte*/

.faq {
  padding: 80px 5%;
  background-color: #fff;
  color: #000;
  text-align: center;
 
}

.faq h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 40px;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}

.faq-item {
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  background: #fff;
  color: #222;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s;
}

.faq-question:hover {
  background: #eee;
}

.faq-question i {
  transition: transform 0.3s;
}

.faq-item.active .faq-question i {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.3s ease;
  background: #fff;
  padding: 0 20px;
}

.faq-item.active .faq-answer {
  max-height: 200px;
  padding: 15px 20px 25px;
}

.faq-answer p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #444;
}



/*segmentos*/

.segmentos {
  background-color: #fff;
    background-repeat: no-repeat;
  background-position: center center; 
  background-size: cover;
  color: #000;
  text-align: center;
  padding: 80px 20px;
}

.segmentos h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #000;
}

.segmentos h2 span {
  color: #478842; 
  font-weight: 700;
}

.segmentos p {
  max-width: 900px;
  margin: 0 auto 30px;
  line-height: 1.6;
  color: #000;
  font-size: 1rem;
}

.segmentos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 50px auto 0;
}

.segmento-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s ease;
}

.segmento-item img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  transition: transform 0.3s ease;
  
}

.segmento-item:hover img {
  transform: scale(1.1);
}

.segmento-item h3 {
  font-size: 1rem;
  color: #000;
  font-weight: 600;
}


@media (max-width: 768px) {
  .segmentos h2 {
    font-size: 1.5rem;
  }

  .segmentos p {
    font-size: 1.1rem;
  }

  .segmento-item img {
    width: 60px;
    height: 60px;
  }
}

/*avaliações*/


.avaliacoes {
  text-align: center;
  background-image: url('capaPrincipal.png');
    background-repeat: no-repeat;
  background-position: center center; 
  background-size: cover;
  padding: 60px 20px;
  font-family: 'Poppins', sans-serif;
}

.titulo {
  font-size: 2.5em;
  font-weight: 800;
  color: #fff;
}

.media {
  margin: 20px auto 40px;
}

.estrelas {
  font-size: 1.8em;
  color: #ffc107;
}

.google-logo {
  width: 120px;
  margin-top: 10px;
}

.carrossel-container {
  position: relative;
  max-width: 950px;
  margin: auto;
  overflow: hidden;
}

.carrossel {
  display: flex;
  gap: 25px; 
  transition: transform 0.6s ease;
}

.card-avaliacao {
  width: 300px;
  height: 220px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 20px;
  text-align: left;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-avaliacao h4 {
  margin-bottom: 5px;
  color: #333;
}

.card-avaliacao .estrela {
  color: #ffc107;
  margin-bottom: 10px;
}

.card-avaliacao p {
  color: #555;
  font-size: 0.95em;
  line-height: 1.4;
}

.seta {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
 
  color: white;
  border: none;
  font-size: 2em;
  border-radius: 50%;
  padding: 5px 12px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s;
  z-index: 10;
}

.seta:hover {
  opacity: 1;
}

.seta.esquerda {
  left: -10px;
}

.seta.direita {
  right: -10px;
}

@media (max-width: 768px) {
  .card-avaliacao {
    width: 80%;
  }

  .card-avaliacao p {
  color: #555;
  font-size: 1.1em;
  line-height: 1.4;
}
}




.contato {
  background: #fff;
  color: #000;
  padding: 60px 20px;
  font-family: 'Poppins', sans-serif;
}

.contato-container {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
}

.contato-info {
  flex: 1;
  min-width: 280px;
}

.logo-contato {
  width: 180px;
  margin-bottom: 20px;
}

.contato-info h3 {
  font-size: 1.4em;
  font-weight: 700;
  margin-bottom: 15px;
}

.contato-info p {
  font-size: 1em;
  margin: 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-icons {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.social-icons a {
  background: #488943;
  color: #fff;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.1em;
  transition: 0.3s;
  text-decoration: none;
}

.social-icons a:hover {
  background: #7bd375;
}


.contato-form {
  flex: 1;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contato-form .linha {
  display: flex;
  gap: 10px;
}


.contato-form .linha input:first-child {
  width: 60%; 
}

.contato-form .linha input:last-child {
  width: 40%; 
}


.contato-form input,
.contato-form textarea {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #737373;  
  border-radius: 4px;
  background: #fff;        
  font-size: 1.0em;
  outline: none;
  box-sizing: border-box;
  transition: 0.2s;
}


.contato-form input:focus,
.contato-form textarea:focus {
  border-color: #7bd375;   
}


.contato-form button {
  background: #488943;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 12px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.contato-form button:hover {
  background: #7bd375;
}


@media (max-width: 768px) {
  .contato-form .linha {
    flex-direction: column;
  }

  .contato-form .linha input:first-child,
  .contato-form .linha input:last-child {
    width: 100%;
  }
}



@media (max-width: 768px) {
  .contato-container {
    flex-direction: column-reverse; 
    align-items: center;
  }

  .contato-form {
    order: 1; 
    width: 100%;
  }

  .contato-info {
    order: 2; 
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }

  .logo-contato {
    order: 3; 
    margin-top: 20px;
  }
}
