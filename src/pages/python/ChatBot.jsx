import React, { useEffect, useState } from "react";

const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false); // Estado para controlar a animação de "escrevendo..."

  // Dicionário de treinamento
  const trainingData = {
    "1": "Atendimento online selecionado. Um de nossos atendentes estará com você em breve.",
    "2": "Reclamação registrada. Agradecemos seu feedback e tomaremos as providências necessárias.",
    "3": "Sua sugestão é muito importante para nós. Por favor, explique mais detalhadamente.",
    "4": "Obrigado pelo elogio! A equipe do hospital fica muito feliz em receber sua mensagem.",
    "5": "Conectando você aos administradores, por favor, aguarde...",
  };

  // Mensagem de boas-vindas e opções
  useEffect(() => {
    const welcomeMessages = [
      { text: "Olá! Eu sou o ChatBot hospitalar e estou aqui para ajudar você com informações, reclamações, sugestões e muito mais.", sender: "IA", time: new Date().toLocaleTimeString() },
      { text: "Escolha uma das opções abaixo para continuar:", sender: "IA", time: new Date().toLocaleTimeString() },
      { text: "1 - Atendimento Online\n2 - Reclamação\n3 - Sugestão\n4 - Parabenizar\n5 - Falar com os administradores\n6 - Informações sobre consultas\n7 - Horários de visitas\n8 - Localização e contato", sender: "IA", time: new Date().toLocaleTimeString() }
    ];
    setMessages(welcomeMessages);
  }, []);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const currentTime = new Date().toLocaleTimeString();
    const userMessage = { text: userInput, sender: "Você", time: currentTime };

    // Adiciona a mensagem do usuário
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setUserInput(""); // Limpa o input após o envio

    // Simula o atraso da IA
    setIsTyping(true); // Ativa a animação de "escrevendo..."
    
    // Define um tempo para a resposta da IA
    setTimeout(() => {
      const botResponseText = trainingData[userInput] || `Desculpe, não entendi sua solicitação. Por favor, escolha uma opção válida.`;
      const botResponse = { text: botResponseText, sender: "IA", time: currentTime };
      
      // Adiciona a resposta da IA
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsTyping(false); // Desativa a animação de "escrevendo..."
    }, 2000); // 2 segundos de atraso
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-[80%] h-[600px] flex flex-col">
        <header className="bg-blue-600 text-white py-4 text-center rounded-t-lg">
          <h1 className="text-2xl font-bold">ChatBot Hospitalar</h1>
        </header>

        <main className="flex-grow overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`p-3 rounded-lg max-w-xs ${msg.sender === "Você" ? "bg-blue-500 text-white ml-auto" : "bg-green-500 text-white"}`}>
                <p className="font-semibold">{msg.sender}</p>
                <p>{msg.text}</p>
                <span className="text-xs text-gray-200">{msg.time}</span>
              </div>
            ))}
            {isTyping && (
              <div className="p-3 rounded-lg max-w-xs bg-gray-300 text-black">
                <p className="font-semibold">IA</p>
                <p>Escrevendo...</p>
              </div>
            )}
          </div>
        </main>

        <footer className="bg-white p-4 border-t border-gray-200">
          <form onSubmit={handleSubmit} className="flex">
            <input 
              type="text"
              placeholder="Digite o número da sua opção..."
              value={userInput}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="ml-2 bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default ChatBot;
