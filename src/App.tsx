import { ThemeProvider } from './contexts/theme-provider'
import { NavigationMenu } from './components/navigation-menu'
import { useTranslation } from 'react-i18next'
import { Presentation } from './components/presentation'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import filmeFlixImage from './assets/projects/movie.png'
import pokemonEvolutionImage from './assets/projects/pokemon.png'
import { Language } from './config/i18n'
import './App.css'

const projects = [
  {
    title: 'Filme flix',
    description: {
      'en-US': 'Flutter project using TMDB API',
      'pt-BR': 'Projeto Flutter utilizando a API do TMDB',
    },
    image: {
      source: filmeFlixImage,
      alt: 'Filme flix project screenshot',
      className: 'w-40 my-6 border-4 border-black rounded-3xl',
    },
    githubUrl: 'https://github.com/lmarcosss/filme-flix',
  },
  {
    title: 'Pokemon Evolution',
    description: {
      'en-US': 'Next.js project using PokeAPI',
      'pt-BR': 'Projeto Next.js utilizando a PokeAPI',
    },
    image: {
      source: pokemonEvolutionImage,
      alt: 'Pokemon Evolution project screenshot',
      className:
        'w-[20rem] md:w-[22rem] lg:w-[24rem] my-6 rounded-xl',
    },
    githubUrl: 'https://github.com/lmarcosss/pokemon-evolution',
  },
]

export default function App() {
  const { t, i18n } = useTranslation()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div
        className="min-h-[100dvh] h-[100dvh] overflow-y-auto flex flex-col
          justify-between"
      >
        <NavigationMenu />

        <Presentation />

        <div className="flex flex-col items-start px-6">
          <h2 className="text-3xl font-semibold lg:px-8">
            {t('projects')}
          </h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 justify-center
              items-center w-full py-6 px-0 lg:px-8"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col justify-between items-center sm:w-full rounded-lg
                  h-[32rem] bg-emerald-600"
              >
                <div className="flex-1 flex justify-center items-center">
                  <img
                    src={project.image.source}
                    className={project.image.className}
                    alt={project.image.alt}
                  />
                </div>
                <div
                  className="flex flex-col items-start w-full justify-start text-left p-4
                    rounded-b-lg"
                >
                  <h3 className="text-2xl font-semibold dark:text-black text-white">
                    {project.title}
                  </h3>
                  <p className="dark:text-black text-white">
                    {project.description[i18n.language as Language]}
                  </p>

                  <a
                    className="bg-white dark:bg-black flex flex-row mt-4 items-center
                      hover:text-gray-400 text-lg rounded-sm p-2"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubLogoIcon className="size-6 pr-2" />
                    <span className="text-sm">See code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="pb-6 lg:pb-4">
          <span className="text-center text-gray-400 text-sm">
            {t('copyrights')}
          </span>
        </footer>
      </div>
    </ThemeProvider>
  )
}
