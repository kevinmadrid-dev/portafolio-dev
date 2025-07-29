import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"

@Component({
  selector: "app-main",
  imports: [CommonModule],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css"
})
export class MainComponent {
  language: "es" | "en" = "es"
  theme: "dark" | "light" = "dark"

  toggleLanguage() {
    this.language = this.language === "es" ? "en" : "es"
  }

  toggleTheme() {
    this.theme = this.theme === "dark" ? "light" : "dark"
    document.documentElement.classList.toggle("dark")
  }
}
