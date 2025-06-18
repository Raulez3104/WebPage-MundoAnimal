import React, { useEffect, useRef, useState } from 'react';
import styles from './ChatBot.module.css';
import { BsChatDots } from 'react-icons/bs';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const LLAMA_API_URL = 'http://localhost:3000/ollama-prompt'; // Cambia el puerto si tu backend está en otro

export const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bienvenida: Message = {
      id: 0,
      text: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
    };
    setMessages([bienvenida]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(LLAMA_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: input // Solo envía el prompt, compatible con tu backend
        })
      });
      const data = await response.json();
      const botResponse: Message = {
        id: messages.length + 2,
        text: data.response || 'Error al conectar con el modelo.',
        sender: 'bot',
      };
      setMessages(prev => [...prev, botResponse]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: messages.length + 2,
          text: 'Error al conectar con el modelo.',
          sender: 'bot',
        },
      ]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles.floatingContainer}>
      {open && (
        <div className={styles.chatWrapper}>
          <div className={styles.chatHeader}>Asistente Virtual</div>
          <div className={styles.chatMessages}>
            {messages.map((m) => (
              <div
                key={m.id}
                className={`${styles.message} ${
                  m.sender === 'user' ? styles.userMessage : styles.botMessage
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className={styles.message + ' ' + styles.botMessage}>
                <i>El bot está escribiendo...</i>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles.chatInputArea}>
            <input
              type="text"
              className={styles.chatInput}
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              className="btn btn-primary btn-sm"
              onClick={sendMessage}
              disabled={!input.trim() || loading}
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      <button
        className={styles.chatToggleButton}
        onClick={() => setOpen(!open)}
        aria-label="Abrir chatbot"
      >
        <BsChatDots size={24} />
      </button>
    </div>
  );
};

export default ChatBot;