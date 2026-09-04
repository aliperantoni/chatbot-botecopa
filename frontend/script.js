/* ============================================
   BOTECOPA — SCRIPT PREMIUM
   Especialista em Copas do Mundo de Seleções Masculinas
   ============================================ */

const chat = document.getElementById("chatMessages");
const mensagem = document.getElementById("userInput");
const btnEnviar = document.getElementById("sendBtn");
const typingIndicator = document.createElement("div");
typingIndicator.className = "message bot";
typingIndicator.style.background = "#e6e0c0";
typingIndicator.style.color = "#0a2a44";
typingIndicator.innerHTML = `<em><i class="fas fa-spinner fa-pulse"></i> Consultando a memória das Copas...</em>`;
typingIndicator.id = "typingIndicator";
typingIndicator.style.display = "none";

// Insere o typing indicator após o chat
chat.parentNode.insertBefore(typingIndicator, chat.nextSibling);

const API_URL = "https://chatbot-botecopa.onrender.com/chat";

const mensagemInicial =
  "⚽ BoteCopa no ar!<br><br>Sou o maior especialista em <strong>Copas do Mundo de Seleções Masculinas</strong>.<br>Recordes, artilharia, resultados, curiosidades… Atualizado até 2026!<br><br><span style='color:#1f8b4c;'>👉 Pergunte qualquer coisa sobre o torneio!</span>";

const KEYWORDS = [
  "COPA", "COPAS",
  "MUNDIAL",
  "SELEÇÃO", "SELEÇÕES",
  "BRASIL", "ALEMANHA", "ARGENTINA", "FRANÇA", "ITÁLIA", "INGLATERRA",
  "PELÉ", "MARADONA", "MESSI", "CRISTIANO RONALDO", "MBAPPÉ", "NEYMAR",
  "ARTILHEIRO", "ARTILHARIA",
  "TÍTULO", "CAMPEÃO", "VICE",
  "GOLS", "GOL",
  "RECORDE", "RECORDES",
  "FINAIS", "SEMIFINAIS",
  "PÊNALTI", "PENALTI",
  "CARTAO", "CARTÃO", "VERMELHO", "AMARELO"
];

/* ---- Utilitários ---- */
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function highlightKeywords(text) {
  let html = text;
  KEYWORDS.forEach(kw => {
    const regex = new RegExp(`(${kw})`, "gi");
    html = html.replace(regex, '<span class="keyword-highlight">$1</span>');
  });
  return html;
}

/* ---- Ripple Effect ---- */
function createRipple(event, button) {
  const circle = document.createElement("span");
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  circle.style.width = circle.style.height = `${size}px`;
  circle.style.left = `${event.clientX - rect.left - size / 2}px`;
  circle.style.top = `${event.clientY - rect.top - size / 2}px`;
  circle.classList.add("ripple");
  const existing = button.getElementsByClassName("ripple");
  if (existing.length > 0) existing[0].remove();
  button.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}

/* ---- Adicionar Mensagem ---- */
function adicionarMensagem(texto, tipo, useTypewriter = false) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("message", tipo);

  const textDiv = document.createElement("div");
  textDiv.classList.add("msg-text");

  const timeDiv = document.createElement("div");
  timeDiv.classList.add("msg-time");
  timeDiv.textContent = getCurrentTime();

  wrapper.appendChild(textDiv);
  wrapper.appendChild(timeDiv);

  if (tipo === "user") {
    textDiv.textContent = texto;
  } else {
    if (useTypewriter) {
      typewriterEffect(textDiv, texto, 12);
    } else {
      textDiv.innerHTML = texto;
    }
  }

  chat.appendChild(wrapper);
  scrollToBottom();
}

/* ---- Efeito Máquina de Escrever ---- */
function typewriterEffect(element, text, speed = 12) {
  let i = 0;
  element.textContent = "";
  element.classList.add("typing");

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      scrollToBottom();
      setTimeout(type, speed);
    } else {
      element.classList.remove("typing");
      element.innerHTML = text;
    }
  }
  type();
}

/* ---- Scroll para o Fundo ---- */
function scrollToBottom() {
  chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" });
}

/* ---- Typing Indicator ---- */
function showTyping() {
  typingIndicator.style.display = "block";
  scrollToBottom();
}

function hideTyping() {
  typingIndicator.style.display = "none";
}

/* ---- Enviar Mensagem ---- */
async function enviarMensagem() {
  const texto = mensagem.value.trim();

  if (texto === "") {
    return;
  }

  adicionarMensagem(texto, "user");
  mensagem.value = "";
  mensagem.focus();
  showTyping();

  try {
    const resposta = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mensagem: texto })
    });

    const dados = await resposta.json();
    hideTyping();

    if (!resposta.ok) {
      adicionarMensagem(dados.erro || "Erro ao processar a mensagem.", "bot", true);
      return;
    }

    adicionarMensagem(dados.resposta, "bot", true);

  } catch (erro) {
    hideTyping();
    adicionarMensagem(
      "⚠️ Erro ao conectar com o backend. Verifique se o servidor está em execução.",
      "bot",
      true
    );
    console.error(erro);
  }
}

// Adicionar no script.js
document.querySelectorAll('.quick-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const question = chip.dataset.question;
        if (question) {
            document.getElementById('userInput').value = question;
            enviarMensagem();
        }
    });
});


document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('chatMessages').innerHTML = '';
    adicionarMensagem(mensagemInicial, 'bot');
});

/* ---- Event Listeners ---- */
btnEnviar.addEventListener("click", (e) => {
  createRipple(e, btnEnviar);
  enviarMensagem();
});

mensagem.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    enviarMensagem();
  }
});

/* ---- Inicialização ---- */
function init() {
  adicionarMensagem(mensagemInicial, "bot");
  mensagem.focus();
}

init();
