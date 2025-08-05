import {
  NavigationMenu as NavigationMenuComponent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import brFlag from '../assets/flags/br.svg'
import usFlag from '../assets/flags/us.svg'

import { useTheme } from '@/contexts/theme-provider'
import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const languages = {
  'pt-BR': {
    name: 'Português',
    flag: brFlag,
  },
  'en-US': {
    name: 'English',
    flag: usFlag,
  },
}

enum LanguagesEnum {
  PORTUGUESE = 'pt-BR',
  ENGLISH = 'en-US',
}

type Language = LanguagesEnum

export function NavigationMenu() {
  const { setTheme, theme } = useTheme()
  const { i18n } = useTranslation()

  return (
    <header className="flex justify-end pr-2">
      <NavigationMenuComponent>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              target="_blank"
              href="https://drive.google.com/file/d/1vmTAvVfkky9odcT6wZl2dKVHQXIzT1JQ/view?usp=sharing"
              className={navigationMenuTriggerStyle()}
            >
              CV
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem asChild>
            <button
              onClick={() =>
                setTheme(theme === 'light' ? 'dark' : 'light')
              }
              className={`cursor-pointer ${navigationMenuTriggerStyle()}`}
            >
              {theme === 'light' ? (
                <Sun
                  size={18}
                  fill="yellow"
                  className="text-yellow-800"
                />
              ) : (
                <Moon
                  size={18}
                  fill="yellow"
                  className="text-yellow-400"
                />
              )}
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem asChild>
            <button
              className={`cursor-pointer ${navigationMenuTriggerStyle()}`}
              onClick={() => {
                i18n.changeLanguage(
                  i18n.language === LanguagesEnum.PORTUGUESE
                    ? LanguagesEnum.ENGLISH
                    : LanguagesEnum.PORTUGUESE
                )
              }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={languages[i18n.language as Language].flag}
                  alt="Current Language"
                  width={20}
                  height={15}
                />
                {i18n.language}
              </div>
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuComponent>
    </header>
  )
}
