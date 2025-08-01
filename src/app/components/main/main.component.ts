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
  @Input() theme!: "dark" | "light"

  @Output() languageToggle = new EventEmitter<void>()
  @Output() themeToggle = new EventEmitter<void>()

  constructor(private translate: TranslateService) {}

  ngOnChanges() {
    this.translate.use(this.language).subscribe()
  }

  // Cambio de idioma con animación
  toggleLanguage() {
    this.languageToggle.emit()
  }

  // Cambio de tema con animación
  toggleTheme(): void {
    this.themeToggle.emit()
  }
}
