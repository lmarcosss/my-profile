import { ThemeProvider } from './contexts/theme-provider'
import { NavigationMenu } from './components/navigation-menu'
import { Presentation } from './components/presentation'
import { Projects } from './components/projects'

import './App.css'
import { Footer } from './components/footer'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
        <NavigationMenu />
        <div className="pt-20">
          <Presentation />
          <Projects />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}
