import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import { ThemeProvider } from './contexts/theme-provider'
import { NavigationMenu } from './components/navigation-menu'
import { Footer } from './components/footer'
import { features } from './config/features'
import { Home } from './pages/home'
import { ProjectsPage } from './pages/projects'

const ArticlesPage = import.meta.env.DEV
  ? lazy(() =>
      import('./pages/articles').then((m) => ({ default: m.ArticlesPage })),
    )
  : null

const ArticlePage = import.meta.env.DEV
  ? lazy(() =>
      import('./pages/article').then((m) => ({ default: m.ArticlePage })),
    )
  : null

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex-1 flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={
              features.projects ? <ProjectsPage /> : <Navigate to="/" replace />
            }
          />
          {ArticlesPage && ArticlePage ? (
            <>
              <Route
                path="/articles"
                element={
                  <Suspense fallback={null}>
                    <ArticlesPage />
                  </Suspense>
                }
              />
              <Route
                path="/articles/:slug"
                element={
                  <Suspense fallback={null}>
                    <ArticlePage />
                  </Suspense>
                }
              />
            </>
          ) : (
            <>
              <Route path="/articles" element={<Navigate to="/" replace />} />
              <Route
                path="/articles/:slug"
                element={<Navigate to="/" replace />}
              />
            </>
          )}
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a]">
          <NavigationMenu />
          <div className="pt-20 flex-1 flex flex-col">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
