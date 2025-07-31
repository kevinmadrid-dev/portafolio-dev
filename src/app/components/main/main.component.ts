import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { TranslateModule, TranslateService } from "@ngx-translate/core"

@Component({
  selector: "app-main",
  imports: [CommonModule, TranslateModule],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css"
})
export class MainComponent {
  language: "es" | "en" = "es"
  theme: "dark" | "light" = "dark"

  constructor(private translate: TranslateService) {
    this.translate.use(this.language).subscribe()
  }

  toggleLanguage() {
    this.language = this.language === "es" ? "en" : "es"
    this.translate.use(this.language)
  }

  toggleTheme() {
    this.theme = this.theme === "dark" ? "light" : "dark"
    document.documentElement.classList.toggle("dark")
  }
}
