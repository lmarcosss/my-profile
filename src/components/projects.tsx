import { useTranslation } from 'react-i18next'
import filmeFlixImage from '../assets/projects/movie.png'
import pokemonEvolutionImage from '../assets/projects/pokemon.png'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
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
            className: 'w-fit h-[300px] pt-16',
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

            <motion.div
                className="relative z-10 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white lg:px-8 mb-2">
                    {t('projects')}
                </h2>
                <div className="w-20 h-1 bg-emerald-600 rounded-full lg:ml-8" />
            </motion.div>

            <div className="w-full lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Suspense
                        fallback={
                            <>
                                {[...Array(2)].map((_, i) => (
                                    <div key={i} className="h-[420px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 animate-pulse" />
                                ))}
                            </>
                        }
                    >
                        {projects.map((project, index) => (
                            <Project key={project.title} project={project} index={index} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </section>
    )
}
