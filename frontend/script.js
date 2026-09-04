(function() {
    "use strict";

    const messagesContainer = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    // ===== ADICIONAR MENSAGEM COM FORMATAÇÃO =====
    function addMessage(text, sender = 'bot') {
        const div = document.createElement('div');
        div.className = `message ${sender}`;

        const now = new Date();
        const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        // Formata o texto para preservar quebras de linha e espaçamento
        let formattedText = text;
        
        // Converte quebras de linha \n para <br>
        formattedText = formattedText.replace(/\n/g, '<br>');
        
        // Converte **texto** para <strong>texto</strong>
        formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Converte *texto* para <em>texto</em>
        formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Converte marcadores • ou - para listas
        formattedText = formattedText.replace(/^[•\-]\s/gm, '&bull; ');
        
        // Converte múltiplos espaços para &nbsp; (preserva espaçamento)
        formattedText = formattedText.replace(/  /g, '&nbsp; ');

        div.innerHTML = `
            <div class="msg-text">${formattedText}</div>
            <span class="msg-time">${timeStr}</span>
        `;
        messagesContainer.appendChild(div);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // ===== MENSAGEM INICIAL =====
    function showWelcome() {
        const welcome = `
            <strong>⚽ BoteCopa no ar!</strong><br><br>
            Sou o maior especialista em <strong>Copas do Mundo de Seleções Masculinas</strong>.<br>
            Recordes, artilharia, resultados, curiosidades… Atualizado até 2026!<br><br>
            <span style="color:#1f8b4c;">👉 Pergunte qualquer coisa sobre o torneio!</span>
        `;
        addMessage(welcome, 'bot');
    }

    // ===== CHAMADA PARA O BACKEND =====
    async function sendMessageToBackend(userMsg) {
        try {
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mensagem: userMsg }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.erro || `Erro HTTP ${response.status}`);
            }

            const data = await response.json();
            return data.resposta || 'Desculpe, não recebi uma resposta válida.';
        } catch (error) {
            console.error('Erro no chat:', error);
            return `⚠️ Erro de comunicação: ${error.message}. Tente novamente.`;
        }
    }

    // ===== ENVIAR MENSAGEM DO USUÁRIO =====
    async function handleUserMessage() {
        const rawText = userInput.value.trim();
        if (!rawText) return;

        addMessage(rawText, 'user');
        userInput.value = '';
        userInput.focus();

        // Indicador de "pensando"
        const thinkingDiv = document.createElement('div');
        thinkingDiv.className = 'message bot';
        thinkingDiv.style.background = '#e6e0c0';
        thinkingDiv.style.color = '#0a2a44';
        thinkingDiv.innerHTML = `<em><i class="fas fa-spinner fa-pulse"></i> Consultando a memória das Copas...</em>`;
        messagesContainer.appendChild(thinkingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        const botReply = await sendMessageToBackend(rawText);

        if (thinkingDiv.parentNode) {
            thinkingDiv.remove();
        }

        addMessage(botReply, 'bot');
    }

    // ===== EVENTOS =====
    sendBtn.addEventListener('click', handleUserMessage);
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleUserMessage();
        }
    });

    // ===== INICIAR =====
    showWelcome();
    userInput.focus();
})();