// Espera o HTML carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {

  // Seleciona o botão que o usuário vai clicar
  const botao = document.querySelector(".botaoVerificar");

  // Seleciona o campo de data onde o usuário digita a data de nascimento
  const campoData = document.querySelector("#dataNascimento");

  // Quando o botão for clicado, executa o código abaixo
  botao.addEventListener("click", function() {

    // Pega o valor digitado no campo de data
    const dataDigitada = campoData.value;

    // Verifica se o campo está vazio
    if (!dataDigitada) {
      alert("Por favor, insira sua data de nascimento!");
      return; // Interrompe o código aqui se o campo estiver vazio
    }

    // Cria um objeto Date a partir da data informada
    const data = new Date(dataDigitada);

    // Pega apenas o dia do mês (1 a 31)
    const dia = data.getDate();

    // Pega o mês (de 0 a 11) e soma +1 para ficar de 1 a 12
    const mes = data.getMonth() + 1;

    // Cria uma variável vazia para armazenar o nome da página do signo
    let signo = "";

    // Verifica se a data cai no intervalo de Áries
    if ((dia >= 21 && mes === 3) || (dia <= 19 && mes === 4)) {
      signo = "aries.html"; // Se sim, define a página correspondente
    } 
    // As outras condições abaixo seguem o mesmo formato:
    else if ((dia >= 20 && mes === 4) || (dia <= 20 && mes === 5)) {
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

    // Se a variável "signo" tiver algum valor (ou seja, a data corresponde a algum signo)
    if (signo) {
      // Redireciona o usuário para a página correspondente ao signo
      window.location.href = signo;
    }
  });
});

// Efeito de estrelas no fundo da página
const numEstrelas = 200; // 🌟 aumenta se quiser mais
const container = document.getElementById('estrelas');

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