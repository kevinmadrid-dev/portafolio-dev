import { Component } from "@angular/core"

import { LanguageService } from "./services/language.service"
import { ThemeService } from "./services/theme.service"

import { MainComponent } from "./components/main/main.component"
import { AboutComponent } from "./components/about/about.component"
import { ProjectComponent } from "./components/project/project.component"
import { ContactComponent } from "./components/contact/contact.component"

@Component({
  selector: "app-root",
  imports: [MainComponent, AboutComponent, ProjectComponent, ContactComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  title = "portafolio-dev"
  language: "es" | "en" = "es"
  theme: "dark" | "light" = "dark"

  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {
    // Idioma
    this.language = this.languageService.getLanguage()
    this.languageService.setLanguage(this.language)

    // Tema
    this.theme = this.themeService.initTheme()
  }

  toggleLanguage(): void {
    this.language = this.language === "es" ? "en" : "es"
    this.languageService.setLanguage(this.language)
  }

  toggleTheme(): void {
    this.theme = this.themeService.toggleTheme(this.theme)
  }
}
