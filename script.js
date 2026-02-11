// Espera o HTML carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {

  // Seleciona o botão e o campo de data
  const botao = document.querySelector(".botaoVerificar");
  const campoData = document.querySelector("#dataNascimento");

  // Quando o botão for clicado, executa a lógica
  botao.addEventListener("click", function() {

    const dataDigitada = campoData.value;

    if (!dataDigitada) {
      alert("Por favor, insira sua data de nascimento!");
      return; 
    }

    const data = new Date(dataDigitada);
    const dia = data.getDate();
    const mes = data.getMonth() + 1;

    let signo = "";

    // Lógica para determinar o arquivo do signo
    if ((dia >= 21 && mes === 3) || (dia <= 19 && mes === 4)) {
      signo = "aries.html";
    } else if ((dia >= 20 && mes === 4) || (dia <= 20 && mes === 5)) {
      signo = "touro.html";
    } else if ((dia >= 21 && mes === 5) || (dia <= 20 && mes === 6)) {
      signo = "gemeos.html";
    } else if ((dia >= 21 && mes === 6) || (dia <= 22 && mes === 7)) {
      signo = "cancer.html";
    } else if ((dia >= 23 && mes === 7) || (dia <= 22 && mes === 8)) {
      signo = "leao.html";
    } else if ((dia >= 23 && mes === 8) || (dia <= 22 && mes === 9)) {
      signo = "virgem.html";
    } else if ((dia >= 23 && mes === 9) || (dia <= 22 && mes === 10)) {
      signo = "libra.html";
    } else if ((dia >= 23 && mes === 10) || (dia <= 21 && mes === 11)) {
      signo = "escorpiao.html";
    } else if ((dia >= 22 && mes === 11) || (dia <= 21 && mes === 12)) {
      signo = "sagitario.html";
    } else if ((dia >= 22 && mes === 12) || (dia <= 19 && mes === 1)) {
      signo = "capricornio.html";
    } else if ((dia >= 20 && mes === 1) || (dia <= 18 && mes === 2)) {
      signo = "aquario.html";
    } else if ((dia >= 19 && mes === 2) || (dia <= 20 && mes === 3)) {
      signo = "peixes.html";
    }

    // REDIRECIONAMENTO ATUALIZADO:
    // Agora o sistema busca o arquivo dentro da subpasta "pages"
    if (signo) {
      window.location.href = "pages/" + signo;
    }
  });
});

// Efeito de estrelas no fundo da página
const numEstrelas = 200; 
const container = document.getElementById('estrelas');

if (container) { // Verifica se o container existe antes de rodar
  for (let i = 0; i < numEstrelas; i++) {
    const estrela = document.createElement('div');
    estrela.classList.add('estrela');
    estrela.style.top = Math.random() * 100 + '%';
    estrela.style.left = Math.random() * 100 + '%';
    const size = Math.random() * 2 + 1 + 'px';
    estrela.style.width = size;
    estrela.style.height = size;
    estrela.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
    estrela.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(estrela);
  }
}