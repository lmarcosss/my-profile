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
            className: 'w-fit h-[350px] object-cover pt-16',
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
        <div className="flex flex-col items-start px-6 pt-16 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-teal-500/5 rounded-3xl -z-10" />

            <motion.div
                className="relative z-10 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-bold text-white lg:px-8 mb-2">
                    {t('projects')}
                </h2>
                <div className="w-20 h-1 bg-white rounded-full lg:ml-8" />
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
        </div>
    )
}
