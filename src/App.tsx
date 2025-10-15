import { ThemeProvider } from './contexts/theme-provider'
import { NavigationMenu } from './components/navigation-menu'
import { Presentation } from './components/presentation'
import { Projects } from './components/projects'

import './App.css'
import { Footer } from './components/footer'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-emerald-500/5 dark:via-green-500/5 dark:to-teal-500/5">
        <NavigationMenu />
        <Presentation />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
