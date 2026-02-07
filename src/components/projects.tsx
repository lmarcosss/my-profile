import { useTranslation } from 'react-i18next'
import filmeFlixImage from '../assets/projects/movie.png'
import pokemonEvolutionImage from '../assets/projects/pokemon.png'
import { Suspense } from 'react'
import { Project } from './project'

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
            className: 'w-fit h-[370px] object-fill pt-16',
        },
        githubUrl: 'https://github.com/lmarcosss/filme-flix',
        backgroundColor: 'bg-emerald-600',
        tech: ['Flutter', 'Dart', 'TMDB API'],
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
            className: 'w-fit h-70 object-cover',
        },
        previewUrl: 'https://pokemon-evolution.devleo.tech',
        githubUrl: 'https://github.com/lmarcosss/pokemon-evolution',
        backgroundColor: 'bg-sky-600',
        tech: ['Next.js', 'TypeScript', 'PokeAPI'],
    },
]

export function Projects() {
    const { t } = useTranslation()

    return (
        <section className="flex flex-col items-start px-6 pt-16 mb-4 pb-8 relative">

            <div className="relative z-10 mb-12">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white lg:px-8 mb-2">
                    {t('projects')}
                </h2>
                <div className="w-20 h-px bg-gray-300 dark:bg-green-500 lg:ml-8" />
            </div>

            <div className="w-full lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Suspense
                        fallback={
                            <>
                                {[...Array(2)].map((_, i) => (
                                    <div key={i} className="h-[420px] rounded-lg border border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-[#0a0a0a] animate-pulse" />
                                ))}
                            </>
                        }
                    >
                        {projects.map((project) => (
                            <Project key={project.title} project={project} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </section>
    )
}
