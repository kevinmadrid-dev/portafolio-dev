import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Input, Output } from "@angular/core"

import { TranslateModule, TranslateService } from "@ngx-translate/core"
import { trigger, transition, style, animate } from "@angular/animations"

@Component({
  selector: "app-main",
  imports: [CommonModule, TranslateModule],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css",
  animations: [
    trigger("fadeLangChange", [
      transition("es => en", [
        style({ opacity: 0 }),
        animate("300ms ease-in", style({ opacity: 1 }))
      ]),
      transition("en => es", [
        style({ opacity: 0 }),
        animate("300ms ease-in", style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MainComponent {
  @Input() language!: "es" | "en"
  @Output() languageToggle = new EventEmitter<void>()
  theme: "dark" | "light" = "dark"

  constructor(private translate: TranslateService) {}

  ngOnChanges() {
    this.translate.use(this.language).subscribe()
  }

  toggleLanguage() {
    this.languageToggle.emit()
  }

  // Cambio de tema con animación
  toggleTheme() {
    this.theme = this.theme === "dark" ? "light" : "dark"
    document.documentElement.classList.toggle("dark")
  }
}
