import { Moon, Sun } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '../contexts/theme-provider'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`fixed right-4 top-4
            ${theme === 'light' ? 'bg-yellow-300 hover:bg-yellow-200' : 'shadow-yellow-300 shadow-md '}
            hover:border-none hover:ring-none hover:outline-none`}
          variant="outline"
          size="icon"
        >
          <Sun
            fill={'yellow'}
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all
              dark:-rotate-90 dark:scale-0 text-yellow-700"
          />
          <Moon
            fill={'yellow'}
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all
              dark:rotate-0 dark:scale-100 text-yellow-400"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
