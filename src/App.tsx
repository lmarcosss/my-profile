import { ThemeProvider } from './contexts/theme-provider'
import { NavigationMenu } from './components/navigation-menu'
import { useTranslation } from 'react-i18next'
import { Presentation } from './components/presentation'
import './App.css'

export default function App() {
  const { t } = useTranslation()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div
        className="min-h-[100dvh] h-[100dvh] overflow-y-auto flex flex-col
          justify-between"
      >
        <NavigationMenu />

        <Presentation />

        <footer className="pb-6 lg:pb-4">
          <span className="text-center text-gray-500 text-sm">
            {t('copyrights')}
          </span>
        </footer>
      </div>
    </ThemeProvider>
  )
}
