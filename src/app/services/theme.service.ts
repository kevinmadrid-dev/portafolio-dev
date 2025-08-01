import { Injectable } from "@angular/core"

@Injectable({ providedIn: "root" })
export class ThemeService {
  private readonly darkClass = "dark-theme"

  initTheme(): "dark" | "light" {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const theme = saved ?? (prefersDark ? "dark" : "light")
    this.applyTheme(theme)
    return theme
  }

  toggleTheme(current: "dark" | "light"): "dark" | "light" {
    const newTheme = current === "dark" ? "light" : "dark"
    this.applyTheme(newTheme)
    return newTheme
  }

  private applyTheme(theme: "dark" | "light") {
    const root = document.documentElement
    root.classList.toggle(this.darkClass, theme === "dark")
    localStorage.setItem("theme", theme)
  }
}
