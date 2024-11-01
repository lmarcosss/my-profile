import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import profileImage from './assets/profile-image.jpeg'
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

import './App.css'

function TypingAnimation({ text }: { text: string}) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const typingSpeed = 100;

  useEffect(() => {
      const typingInterval = setInterval(() => {
          if (index < text.length) {
              setDisplayedText((prev) => prev + text.charAt(index));
              
              setIndex((prev) => prev + 1);
          } else {
              clearInterval(typingInterval); 
          }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
  }, [index, text]);

  return (
      <div className="title-container">
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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className='container'>
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
        }}
        className='profile-image' src={profileImage}
      />
      <TypingAnimation text="Hi, I'm Leo. I'm a software developer." />

      <ModeToggle />
    </div>
    </ThemeProvider>
  )
}
