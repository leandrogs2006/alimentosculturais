const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O quiabo, o jiló e o maxixe são exemplos de alimentos de qual origem?",
        alternativas: [
            {
                texto: "Origem africana",
                afirmacao: "há relatos que o quiabo tenha sido introduzido á culinária brasileira a partir de 1658"
            },
            {
                texto: "idonesia e africa",
                afirmacao: "A planta tem origem na África e se adaptou super bem no Brasil. O solo ideal para cultivo possui textura argilo-arenosa, sendo possível produzir em solos de outras texturas. "
            }
        ]
    },
    {
        enunciado: "cuscuz é um dos principais pratos da culinária Africana, especificamente em quais países? ",
        alternativas: [
            {
                texto: "Norte da África, como Argélia, Tunisia e Marrocos",
                afirmacao: "Estima-se que o prato foi criado na África, por volta do século XIII"
            },
            {
                texto: "Líbia, Saara Ocidental.",
                afirmacao: " por volta do Século XIII pelos berberes."
            }
        ]
    },
    {
        enunciado: "O jiló, tem origem em que região?",
        alternativas: [
            {
                texto: "Angola e Moçambique",
                afirmacao: "início do século XVII com os escravizados que vieram cultivar cana em Pernambuco."
            },
            {
                texto: "originário da Ásia, outros da África",
                afirmacao: "Foi introduzido no Brasil no século XVII"
            }
        ]
    }
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
