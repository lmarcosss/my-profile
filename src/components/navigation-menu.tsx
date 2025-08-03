import {
  NavigationMenu,
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

export function NavigationMenuDemo() {
  const { setTheme, theme } = useTheme()
  const { i18n } = useTranslation()

  return (
    <NavigationMenu>
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
        <NavigationMenuItem>
          <NavigationMenuLink
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
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
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
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
