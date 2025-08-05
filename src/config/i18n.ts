import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  'en-US': {
    translation: {
      'welcome-react': 'Welcome to React and react-i18next',
      'title-pt1': "Hi, I'm Leo. I'm a",
      'title-pt2': 'Software Developer.',
      description: `I’m a software engineer with 6+ years of experience
                  designing and building efficient, user-focused
                  solutions for web and mobile. I enjoy tackling
                  complex challenges, learning new technologies, and
                  delivering products that make a real impact.`,
      copyrights: '© 2024 Leonardo Marcos. All rights reserved.',
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
    },
  },

  'pt-BR': {
    translation: {
      'welcome-react': 'Bem-vindo ao React e react-i18next',
      'title-pt1': 'Olá, sou Leo e atuo como ',
      'title-pt2': 'Desenvolvedor de software.',
      description: `Sou um engenheiro de software com mais de 6 anos de experiência
                  projetando e construindo soluções eficientes e centradas no usuário
                  para web e mobile. Gosto de enfrentar
                  desafios complexos, aprender novas tecnologias e
                  entregar produtos que realmente fazem a diferença.`,
      copyrights:
        '© 2024 Leonardo Marcos. Todos os direitos reservados.',
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
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en-US', // default language

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default i18n
