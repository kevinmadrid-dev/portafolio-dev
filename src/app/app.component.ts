import { Component } from "@angular/core"

import { LanguageService } from "./services/language.service"

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

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.getLanguage()
    this.languageService.setLanguage(this.language) // Idioma al iniciar
  }

  toggleLanguage(): void {
    this.language = this.language === "es" ? "en" : "es"
    this.languageService.setLanguage(this.language) // Actualiza TranslateService y guarda
  }
}
