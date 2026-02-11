/* ==========================================
   🌌 CÉREBRO DO PROJETO – script.js
   ========================================== */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. ✨ EFEITO DE ESTRELAS (Para todas as páginas)
    const container = document.getElementById('estrelas');
    if (container) {
        const numEstrelas = 150;
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

    // 2. 🏠 LÓGICA DA HOME (Redirecionamento)
    const botao = document.querySelector(".botaoVerificar");
    if (botao) {
        botao.addEventListener("click", function() {
            const campoData = document.querySelector("#dataNascimento");
            const dataDigitada = campoData.value;

            if (!dataDigitada) {
                alert("Por favor, insira sua data de nascimento!");
                return;
            }

            const data = new Date(dataDigitada);
            const dia = data.getUTCDate(); 
            const mes = data.getUTCMonth() + 1;
            let signoID = "";

            if ((dia >= 21 && mes === 3) || (dia <= 19 && mes === 4)) signoID = "aries";
            else if ((dia >= 20 && mes === 4) || (dia <= 20 && mes === 5)) signoID = "touro";
            else if ((dia >= 21 && mes === 5) || (dia <= 20 && mes === 6)) signoID = "gemeos";
            else if ((dia >= 21 && mes === 6) || (dia <= 22 && mes === 7)) signoID = "cancer";
            else if ((dia >= 23 && mes === 7) || (dia <= 22 && mes === 8)) signoID = "leao";
            else if ((dia >= 23 && mes === 8) || (dia <= 22 && mes === 9)) signoID = "virgem";
            else if ((dia >= 23 && mes === 9) || (dia <= 22 && mes === 10)) signoID = "libra";
            else if ((dia >= 23 && mes === 10) || (dia <= 21 && mes === 11)) signoID = "escorpiao";
            else if ((dia >= 22 && mes === 11) || (dia <= 21 && mes === 12)) signoID = "sagitario";
            else if ((dia >= 22 && mes === 12) || (dia <= 19 && mes === 1)) signoID = "capricornio";
            else if ((dia >= 20 && mes === 1) || (dia <= 18 && mes === 2)) signoID = "aquario";
            else if ((dia >= 19 && mes === 2) || (dia <= 20 && mes === 3)) signoID = "peixes";

            window.location.href = `signo.html?nome=${signoID}`;
        });
    }

    // 3. 🖼️ LÓGICA DO TEMPLATE (Preenchimento dinâmico)
    const nomeSignoElem = document.getElementById('nomeSigno');
    if (nomeSignoElem) {
        const params = new URLSearchParams(window.location.search);
        const signoEscolhido = params.get('nome');

        if (signoEscolhido && dadosSignos[signoEscolhido]) {
            const d = dadosSignos[signoEscolhido];
            nomeSignoElem.innerText = d.nome;
            document.getElementById('infoSigno').innerText = d.info;
            document.getElementById('descricaoSigno').innerText = d.descricao;
            document.getElementById('imagemSigno').style.backgroundImage = `url('${d.imagem}')`;
        }
    }
});

// 4. 📚 BANCO DE DADOS (Com caminhos da sua pasta 'images')
const dadosSignos = {
    aries: {
        nome: "♈ Áries",
        info: "21 de Março – 19 de Abril | Fogo 🔥",
        descricao: "A força do fogo e a coragem de quem abre caminhos com determinação.",
        imagem: "images/carneiro_aries.png"
    },
    touro: {
        nome: "♉ Touro",
        info: "20 de Abril – 20 de Maio | Terra 🌱",
        descricao: "A estabilidade e o apreço pelo que é duradouro e sensorial.",
        imagem: "images/touro_taurus.png"
    },
    gemeos: {
        nome: "♊ Gêmeos",
        info: "21 de Maio – 20 de Junho | Ar 🌬️",
        descricao: "A curiosidade infinita e a agilidade de uma mente sempre inquieta.",
        imagem: "images/guerreiros_gemeos.png"
    },
    cancer: {
        nome: "♋ Câncer",
        info: "21 de Junho – 22 de Julho | Água 💧",
        descricao: "A sensibilidade profunda e o poder da intuição que acolhe e protege.",
        imagem: "images/caranguejo_cancer.png"
    },
    leao: {
        nome: "♌ Leão",
        info: "23 de Julho – 22 de Agosto | Fogo 🔥",
        descricao: "O brilho natural e a liderança de um coração generoso e vibrante.",
        imagem: "images/leao_leo.png"
    },
    virgem: {
        nome: "♍ Virgem",
        info: "23 de Agosto – 22 de Setembro | Terra 🌱",
        descricao: "A precisão técnica e o olhar atento para a beleza do que é essencial.",
        imagem: "images/virgem.png"
    },
    libra: {
        nome: "♎ Libra",
        info: "23 de Setembro – 22 de Outubro | Ar 🌬️",
        descricao: "A busca constante pela harmonia, justiça e pelo equilíbrio nas relações.",
        imagem: "images/balanca_libra.png"
    },
    escorpiao: {
        nome: "♏ escorpiao",
        info: "23 de Outubro – 21 de Novembro | Água 💧",
        descricao: "A intensidade emocional e a força da transformação que vem de dentro.",
        imagem: "images/escorpiao.png"
    },
    sagitario: {
        nome: "♐ Sagitário",
        info: "22 de Novembro – 21 de Dezembro | Fogo 🔥",
        descricao: "A expansão de horizontes e a sede de liberdade em busca da verdade.",
        imagem: "images/centauro_sagitario.png"
    },
    capricornio: {
        nome: "♑ Capricórnio",
        info: "22 de Dezembro – 19 de Janeiro | Terra 🌱",
        descricao: "A persistência estratégica e o foco na construção de grandes legados.",
        imagem: "images/cabra_capricornio.png"
    },
    aquario: {
        nome: "♒ Aquário",
        info: "20 de Janeiro – 18 de Fevereiro | Ar 🌬️",
        descricao: "A visão de futuro e a originalidade de quem pensa fora da caixa.",
        imagem: "images/jarro_aquario.png"
    },
    peixes: {
        nome: "♓ Peixes",
        info: "19 de Fevereiro – 20 de Março | Água 💧",
        descricao: "A empatia universal e a sensibilidade de quem vive entre o real e o sonho.",
        imagem: "images/peixes.png"
    }
};