import { motion } from 'framer-motion'
import profileImage from './assets/profile-image.jpeg'
import { ThemeProvider } from './contexts/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { TypingAnimation } from './components/typing-animation'

import './App.css'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
          }}
          className="profile-image"
          src={profileImage}
        />
        <TypingAnimation text="Hi, I'm Leo. I'm a software developer." />

        <ModeToggle />
      </div>
    </ThemeProvider>
  )
}
