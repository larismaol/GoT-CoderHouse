// função para carousel: 
// Obtém os elementos da galeria
var carousel = document.querySelector('.carousel');
var slides = carousel.querySelectorAll('.slide');

// Configura variáveis de controle
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000); // Altera os slides a cada 2 segundos

// Função para avançar para o próximo slide
function nextSlide() {
  // Oculta o slide atual
  slides[currentSlide].style.display = 'none';
  
  // Incrementa o índice do slide atual
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Exibe o próximo slide
  slides[currentSlide].style.display = 'block';
}

//função para botão dropdown: 
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //função para abrir foto Jon Snow
  function abrirFotoJon() {
    fetch(`https://thronesapi.com/api/v2/Characters`).then(resposta=>{
      return resposta.json()  
    }).then(corpo=>{document.getElementById("nome").innerHTML = corpo[2].firstName, 
    document.getElementById("sobrenome").innerHTML = corpo[2].lastName,
    document.getElementById("casa").innerHTML = corpo[2].family,
    document.getElementById("titulo").innerHTML = corpo[2].title
    })
    var informacoes = document.getElementById('informacoes');
    if(informacoes.style.display === "none"){
      informacoes.style.display = "block"
    }
    else{
      informacoes.style.display = "none"
    }
  }
    //função para abrir foto Daenerys
    function abrirFotoDaenerys() {
      fetch(`https://thronesapi.com/api/v2/Characters`).then(resposta=>{
        return resposta.json()  
      }).then(corpo=>{document.getElementById("nome").innerHTML = corpo[0].firstName, 
      document.getElementById("sobrenome").innerHTML = corpo[0].lastName,
      document.getElementById("casa").innerHTML = corpo[0].family,
      document.getElementById("titulo").innerHTML = corpo[0].title
      })
      var informacoes = document.getElementById('informacoes');
      if(informacoes.style.display === "none"){
        informacoes.style.display = "block"
      }
      else{
        informacoes.style.display = "none"
      }
    }
  //função para abrir foto Tyrion
  function abrirFotoTyrion() {  
    fetch(`https://thronesapi.com/api/v2/Characters`).then(resposta=>{
      return resposta.json()  
    }).then(corpo=>{document.getElementById("nome").innerHTML = corpo[14].firstName, 
                    document.getElementById("sobrenome").innerHTML = corpo[14].lastName,
                    document.getElementById("casa").innerHTML = corpo[14].family,
                    document.getElementById("titulo").innerHTML = corpo[14].title
    })
    var informacoes = document.getElementById('informacoes');
    if(informacoes.style.display === "none"){
      informacoes.style.display = "block"
    }
    else{
      informacoes.style.display = "none"
    }
  }
    //função para abrir foto Cersei
    function abrirFotoCersei() {
      fetch(`https://thronesapi.com/api/v2/Characters`).then(resposta=>{
        return resposta.json()  
      }).then(corpo=>{document.getElementById("nome").innerHTML = corpo[9].firstName, 
      document.getElementById("sobrenome").innerHTML = corpo[9].lastName,
      document.getElementById("casa").innerHTML = corpo[9].family,
      document.getElementById("titulo").innerHTML = corpo[9].title
      })
      var informacoes = document.getElementById('informacoes');
      if(informacoes.style.display === "none"){
        informacoes.style.display = "block"
      }
      else{
        informacoes.style.display = "none"
      }
    }