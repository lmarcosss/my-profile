import { useTranslation } from 'react-i18next'
import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from 'lucide-react'

import { AnimatedCard } from '@/components/animated-card'
import { Container } from '@/components/container'
import { TerminalWindow } from '@/components/terminal-window'
import profileImage from '../assets/profile-image.webp'

const urls = [
  {
    url: 'https://github.com/lmarcosss',
    icon: Github,
    name: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com/in/leo-marcos',
    icon: Linkedin,
    name: 'LinkedIn',
  },
  {
    url: 'https://www.instagram.com/leomarcoss',
    icon: Instagram,
    name: 'Instagram',
  },
  {
    url: 'mailto:marcosleonardosss@gmail.com',
    icon: Mail,
    name: 'Email',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function Prompt({ children }: { children: string }) {
  return (
    <p className="font-mono text-sm text-muted-foreground">
      <span className="text-accent">❯</span> {children}
    </p>
  )
}

export function Home() {
  const { t } = useTranslation()

  return (
    <section className="flex flex-1 items-center py-12 sm:py-20">
      <Container>
        <TerminalWindow title="leo@dev: ~">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-10 md:flex-row md:items-start"
          >
            <motion.div variants={item} className="shrink-0">
              <AnimatedCard>
                <img
                  src={profileImage}
                  alt={t('profile-image-alt')}
                  className="size-48 rounded-full object-cover ring-1 ring-accent/40 ring-offset-4 ring-offset-card"
                />
              </AnimatedCard>
            </motion.div>

            <div className="w-full min-w-0 space-y-6 text-center md:text-left">
              <motion.div variants={item} className="space-y-3">
                <Prompt>whoami</Prompt>
                <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t('title-pt1')}{' '}
                  <span className="text-accent">{t('title-pt2')}</span>
                  <span className="caret" aria-hidden />
                </h1>
              </motion.div>

              <motion.div variants={item} className="space-y-3">
                <Prompt>cat about.txt</Prompt>
                <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0">
                  {t('description')}
                </p>
              </motion.div>

              <motion.div variants={item} className="space-y-3">
                <Prompt>ls ./links</Prompt>
                <ul className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {urls.map(({ url, icon: Icon, name }) => (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-umami-event={`${name} link clicked`}
                        aria-label={`${t('url-link-aria-label')} ${name}`}
                        className="group inline-flex items-center gap-2 rounded-full border bg-background/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
                      >
                        <Icon className="size-3.5 transition-colors group-hover:text-accent" />
                        {name.toLowerCase()}
                        <ArrowUpRight className="size-3 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </TerminalWindow>
      </Container>
    </section>
  )
}
