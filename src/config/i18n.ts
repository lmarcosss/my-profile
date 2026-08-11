import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export type Language = 'en-US' | 'pt-BR'

const resources = {
  'en-US': {
    translation: {
      'title-pt1': "Hi, I'm Leo. I'm a ",
      'title-pt2': 'Software Developer.',
      description: `I'm a software engineer with 6+ years of experience
                  designing and building efficient, user-focused
                  solutions for web and mobile. I enjoy tackling
                  complex challenges, learning new technologies, and
                  delivering products that make a real impact.`,
      copyrights: '© {{year}} Leonardo Marcos. All rights reserved.',
      'easteregg-pt1': 'You found the easter egg!',
      'easteregg-pt2': 'Enjoy it',
      'profile-image-alt': 'Profile image of Leo',
      'url-link-aria-label': 'Link to',
      'language-switcher': 'Switch Language',
      'theme-switcher': 'Switch Theme',
      'curriculum-vitae-navigation':
        'Curriculum Vitae Navigation Link',
      'current-dark-mode': 'Current theme: dark',
      'current-light-mode': 'Current theme: light',
      'language-switcher-current': 'Current Language',
      'nav-home': 'Home',
      'nav-projects': 'Projects',
      'nav-articles': 'Articles',
      projects: 'Projects',
      articles: 'Articles',
      'see-code': 'See code',
      'see-preview': 'Website',
      'see-cv': 'See CV',
      'dark-mode': 'Dark Mode',
      'light-mode': 'Light Mode',
      'mobile-menu-toggle': 'Toggle mobile menu',
    },
  },

  'pt-BR': {
    translation: {
      'title-pt1': 'Oi, sou o Leo e sou ',
      'title-pt2': 'Desenvolvedor de Software.',
      description: `Sou um engenheiro de software com mais de 6 anos de experiência
                  projetando e construindo soluções eficientes e centradas no usuário
                  para web e mobile. Gosto de enfrentar
                  desafios complexos, aprender novas tecnologias e
                  entregar produtos que realmente fazem a diferença.`,
      copyrights:
        '© {{year}} Leonardo Marcos. Todos os direitos reservados.',
      'easteregg-pt1': 'Você encontrou o segredo escondido!',
      'easteregg-pt2': 'Aproveite-o',
      'profile-image-alt': 'Imagem de perfil do Leo',
      'url-link-aria-label': 'Link para',
      'language-switcher': 'Mudar idioma',
      'theme-switcher': 'Mudar tema',
      'curriculum-vitae-navigation':
        'Link de navegação para o currículo',
      'current-dark-mode': 'Tema atual: escuro',
      'current-light-mode': 'Tema atual: claro',
      'language-switcher-current': 'Idioma atual',
      'nav-home': 'Início',
      'nav-projects': 'Projetos',
      'nav-articles': 'Artigos',
      projects: 'Projetos',
      articles: 'Artigos',
      'see-code': 'Ver código',
      'see-preview': 'Ver site',
      'see-cv': 'Ver CV',
      'dark-mode': 'Tema escuro',
      'light-mode': 'Tema claro',
      'mobile-menu-toggle': 'Abrir ou fechar menu',
    },
  },
}

const LANGUAGE_KEY = 'vite-ui-language'

function getStoredLanguage(): Language {
  const stored = localStorage.getItem(LANGUAGE_KEY)
  return stored === 'pt-BR' || stored === 'en-US' ? stored : 'en-US'
}

function syncDocumentLang(lng: string) {
  document.documentElement.lang = lng
}

i18n.use(initReactI18next).init({
  resources,
  lng: getStoredLanguage(),
  fallbackLng: 'en-US',
  supportedLngs: ['en-US', 'pt-BR'],
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

syncDocumentLang(i18n.language)
i18n.on('languageChanged', (lng) => {
  syncDocumentLang(lng)
  if (lng === 'en-US' || lng === 'pt-BR') {
    localStorage.setItem(LANGUAGE_KEY, lng)
  }
})

export default i18n
