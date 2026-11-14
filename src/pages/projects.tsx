import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Container } from '@/components/container'
import { PageHeader } from '@/components/page-header'
import { projects } from '@/content/projects'
import type { Language } from '@/config/i18n'

const actionLink =
  'group/link inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-accent'

export function ProjectsPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as Language

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <PageHeader
          command="ls ./projects"
          title={t('projects')}
          count={projects.length}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.08,
              }}
            >
              <article className="card-surface group flex h-full flex-col overflow-hidden">
                <div className="aspect-video overflow-hidden border-b">
                  <img
                    src={project.image.source}
                    alt={project.image.alt[lang]}
                    className="size-full object-cover transition-transform duration-500
                      group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div className="space-y-1.5">
                    <h2 className="text-lg font-semibold tracking-tight">
                      {project.title}
                    </h2>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {project.description[lang]}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <li key={tech} className="tag">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center gap-5 border-t pt-4">
                    <a
                      className={actionLink}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-3.5" />
                      {t('see-code').toLowerCase()}
                      <ArrowUpRight
                        className="size-3 transition-transform group-hover/link:-translate-y-0.5
                          group-hover/link:translate-x-0.5"
                      />
                    </a>

                    {project.previewUrl && (
                      <a
                        className={actionLink}
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('see-preview').toLowerCase()}
                        <ArrowUpRight
                          className="size-3 transition-transform group-hover/link:-translate-y-0.5
                            group-hover/link:translate-x-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
