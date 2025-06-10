import React, { useEffect, useRef, useState } from 'react';
import styles from './ChatBot.module.css';
import { BsChatDots } from 'react-icons/bs';
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
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

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: 'Gracias por tu mensaje. Estoy aquí para ayudarte.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
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
            />
            <button
              className="btn btn-primary btn-sm"
              onClick={sendMessage}
              disabled={!input.trim()}
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