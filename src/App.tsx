import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from './contexts/theme-provider'
import { NavigationMenu } from './components/navigation-menu'
import { Footer } from './components/footer'
import { Home } from './pages/home'
import { ProjectsPage } from './pages/projects'

import './App.css'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a]">
          <NavigationMenu />
          <div className="pt-20 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
