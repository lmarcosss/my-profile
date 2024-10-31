import { motion } from "framer-motion";

import './App.css'

import profileImage from './assets/profile-image.jpeg'

import { useState, useEffect } from 'react';

function TypingAnimation({ text }: { text: string}) {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 100; // Tempo entre as letras em ms

  useEffect(() => {
      let index = 0;

      const typingInterval = setInterval(() => {
          if (index < text.length) {
              setDisplayedText((prev) => prev + text.charAt(index));
              index += 1;
          } else {
              clearInterval(typingInterval); 
          }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
  }, [text]);

  return (
      <div style={{ width: 350 }}>
          <span 
              className="title"
              >{displayedText}</span>
          <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
              }}
              className="title"
          >
              |
          </motion.span>
      </div>
  );
}


export default function App() {
  return (
    <div className='container'>
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
        }}
        className='profile-image' src={profileImage}
      />
      <TypingAnimation text="Hii, I'm Leo. I'm a software developer." />
    </div>
  )
}
