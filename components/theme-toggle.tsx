"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            document.documentElement.classList.remove("dark")
            document.documentElement.style.colorScheme = "light"
            localStorage.setItem("theme", "light")
            setTheme("light")
          }}
        >
          <div className="flex items-center">
            <Sun className="h-4 w-4 mr-2" />
            Light
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            document.documentElement.classList.add("dark")
            document.documentElement.style.colorScheme = "dark"
            localStorage.setItem("theme", "dark")
            setTheme("dark")
          }}
        >
          <div className="flex items-center">
            <Moon className="h-4 w-4 mr-2" />
            Dark
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

