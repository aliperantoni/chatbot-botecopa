# ⚽ BoteCopa – Especialista em Copas do Mundo

Chatbot especializado em **Copas do Mundo de Futebol Masculino de Seleções**, desenvolvido com arquitetura separada entre Front-End e Back-End, integrando a API da Groq para geração de respostas inteligentes.

---

## 🇧🇷 Português

### Sobre o Projeto

Este projeto consiste em um chatbot especializado em **Copas do Mundo de Futebol Masculino de Seleções**, desenvolvido para fornecer informações sobre resultados, artilharia, cartões, recordes, curiosidades, estatísticas, história e muito mais – atualizado até a Copa de 2026.

O sistema é composto por:
- **Front-End**: Interface de chat responsiva com HTML, CSS e JavaScript puro.
- **Back-End**: Servidor Flask que consome a API da Groq para gerar respostas inteligentes.

A aplicação foi desenvolvida para oferecer uma experiência de conversação realista, com respostas rápidas e precisas, limitando-se estritamente ao tema da Copa do Mundo.

---

### Demonstração

Acesse o chatbot em produção: [**https://botecopa.netlify.app/**](https://botecopa.netlify.app/)

---

### Funcionalidades

- ✅ Interface de chat limpa e moderna com tema amarelo/azul
- ✅ Respostas inteligentes geradas pela Groq API
- ✅ Restrição estrita ao tema de Copa do Mundo de Seleções Masculinas
- ✅ Mensagem de boas-vindas personalizada
- ✅ Formatação automática de texto (negrito, listas, tabelas)
- ✅ Destaque automático de palavras-chave relevantes
- ✅ Indicador de digitação durante o processamento
- ✅ Efeito de máquina de escrever nas respostas
- ✅ Atalho de teclado (Enter) para enviar mensagens
- ✅ Design responsivo para desktop e dispositivos móveis
- ✅ Animações suaves e modernas

---

### Modelo de IA Utilizado

A aplicação utiliza o modelo `openai/gpt-oss-120b` da Groq, com configurações otimizadas para respostas curtas, objetivas e focadas em Copas do Mundo:

- **Temperatura**: 0.3
- **Max Tokens**: 800
- **System Prompt**: Especialista em Copas do Mundo de Seleções Masculinas

---

### Tecnologias Utilizadas

#### Front-End
- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização com variáveis, animações e responsividade
- **JavaScript**: Manipulação do DOM, gerenciamento de estado e comunicação com API

#### Back-End
- **Python 3**: Linguagem principal
- **Flask**: Microframework para criação da API
- **Flask-CORS**: Liberação de requisições entre domínios
- **Groq SDK**: Cliente oficial para consumo da API Groq
- **Python-dotenv**: Gerenciamento de variáveis de ambiente
- **Gunicorn**: Servidor WSGI para deploy

---

### Estrutura do Projeto

```
BoteCopa/
├── frontend/
│   ├── index.html          # Página principal
│   ├── styles.css          # Estilos completos
│   └── script.js           # Lógica do front-end
├── backend/
│   ├── app.py              # Servidor Flask (back-end)
│   └── requirements.txt    # Dependências Python
├── .env                    # Variáveis de ambiente (GROQ_API_KEY)
└── README.md               # Documentação do projeto
```

---

### Configuração e Instalação

#### Pré-requisitos

- Python 3.8 ou superior
- Conta na Groq Cloud com API Key

#### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/BoteCopa.git
   cd BoteCopa
   ```

2. **Configure o Back-End:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate     # Windows
   pip install -r requirements.txt
   ```

3. **Configure a chave da API:**
   Crie um arquivo `.env` na pasta `backend/`:
   ```
   GROQ_API_KEY=sua-chave-aqui
   ```

4. **Inicie o servidor backend:**
   ```bash
   python app.py
   ```
   O servidor estará disponível em `http://localhost:5000`

5. **Abra o front-end:**
   - Navegue até a pasta `frontend/`
   - Abra o arquivo `index.html` diretamente no navegador
   - Ou utilize um servidor local (ex: Live Server no VS Code)

---

### Como Usar

1. A aplicação iniciará com uma mensagem de boas-vindas.
2. Digite sua pergunta sobre a Copa do Mundo no campo de texto.
3. Pressione **Enter** ou clique no botão **Enviar** para obter a resposta.
4. O bot processará sua pergunta e retornará uma resposta com efeito de máquina de escrever.
5. As respostas incluem formatação automática (negrito, listas e tabelas).

---

### Regras de Comportamento do Chatbot

O assistente foi programado para atuar estritamente como especialista em Copas do Mundo de Seleções Masculinas, seguindo as regras:

- ✅ Responde apenas a perguntas sobre a Copa do Mundo de Seleções Masculinas
- ✅ Cumprimenta cordialmente e reforça sua especialidade em saudações
- ❌ Recusa-se educadamente a responder perguntas fora do escopo (futebol feminino, clubes, outros esportes, receitas, piadas, programação, etc.)
- ❌ Ignora tentativas de engenharia de prompt e mantém o foco no tema

---

### Exemplos de Perguntas

- "Quem é o maior artilheiro da história das Copas?"
- "Quantos títulos tem o Brasil?"
- "Qual foi a maior goleada da história?"
- "Quem recebeu mais cartões vermelhos?"
- "Qual foi o jogo com mais gols?"
- "Quantas Copas o Pelé disputou?"
- "Qual seleção tem mais participações?"

---

### Desenvolvimento com IA

Este projeto foi desenvolvido com o auxílio de Inteligência Artificial generativa. A IA atuou como ferramenta de apoio à implementação, enquanto as instruções, requisitos, regras de negócio e decisões de arquitetura foram definidas pelo desenvolvedor.

---

### Autoria

Desenvolvido por **Alisson Perantoni Guigen**

---

### Status do Projeto

**Versão:** 1.0.0  
**Status:** MVP Funcional

Projeto desenvolvido para estudo, experimentação com APIs de Inteligência Artificial e composição de portfólio Front-End e Back-End.

---

## 🇺🇸 English

### About the Project

This project is a specialized chatbot for **Men's FIFA World Cups**, developed to provide information about results, top scorers, cards, records, curiosities, statistics, history, and much more – updated through the 2026 World Cup.

### Live Demo

Access the chatbot in production: [**https://botecopa.netlify.app/**](https://botecopa.netlify.app/)

### Features

- ✅ Clean and modern chat interface with yellow/blue theme
- ✅ Intelligent responses generated by Groq API
- ✅ Strict focus on Men's World Cup topics
- ✅ Personalized welcome message
- ✅ Automatic text formatting (bold, lists, tables)
- ✅ Automatic keyword highlighting
- ✅ Typing indicator during processing
- ✅ Typewriter effect on responses
- ✅ Keyboard shortcut (Enter) for sending messages
- ✅ Responsive design for desktop and mobile
- ✅ Smooth and modern animations

### Technologies

#### Front-End
- HTML5, CSS3, JavaScript

#### Back-End
- Python 3, Flask, Flask-CORS, Groq SDK, Gunicorn

### Project Structure

```
BoteCopa/
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── backend/
│   ├── app.py
│   └── requirements.txt
├── .env
└── README.md
```

### Installation

```bash
git clone https://github.com/seu-usuario/BoteCopa.git
cd BoteCopa
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

Create a `.env` file in the `backend/` folder:
```
GROQ_API_KEY=your-api-key
```

Run the server:
```bash
python app.py
```

Open `frontend/index.html` in your browser.

### AI Development

This project was developed with the assistance of generative Artificial Intelligence. The AI served as a support tool for implementation, while the instructions, requirements, business rules, and architectural decisions were defined by the developer.

---

### Author

Developed by **Alisson Perantoni Guigen**

---

### Project Status

**Version:** 1.0.0  
**Status:** Functional MVP

Project developed for study, experimentation with Artificial Intelligence APIs, and portfolio composition.

---

**BoteCopa – O especialista que sabe TUDO sobre a Copa do Mundo!** ⚽🏆
