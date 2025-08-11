import { ThemeProvider } from './contexts/theme-provider'
import { NavigationMenu } from './components/navigation-menu'
import { Presentation } from './components/presentation'
import { Projects } from './components/projects'

import './App.css'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div
        className="min-h-[100dvh] h-[100dvh] overflow-y-auto flex flex-col
          justify-between"
      >
        <NavigationMenu />

        <Presentation />

        <Projects />
      </div>
    </ThemeProvider>
  )
}
