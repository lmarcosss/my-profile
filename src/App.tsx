import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from './contexts/theme-provider'
import { NavigationMenu } from './components/navigation-menu'
import { Footer } from './components/footer'
import { features } from './config/features'
import { Home } from './pages/home'
import { ProjectsPage } from './pages/projects'
import { ArticlesPage } from './pages/articles'
import { ArticlePage } from './pages/article'

import './App.css'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a]">
          <NavigationMenu />
          <div className="pt-20 flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/projects"
                element={
                  features.projects ? <ProjectsPage /> : <Navigate to="/" replace />
                }
              />
              <Route
                path="/articles"
                element={
                  features.articles ? <ArticlesPage /> : <Navigate to="/" replace />
                }
              />
              <Route
                path="/articles/:slug"
                element={
                  features.articles ? <ArticlePage /> : <Navigate to="/" replace />
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
