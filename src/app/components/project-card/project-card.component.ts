import { Component, Input } from "@angular/core"
import { TranslateModule, TranslateService } from "@ngx-translate/core"

@Component({
  selector: "project-card",
  imports: [TranslateModule],
  templateUrl: "./project-card.component.html",
  styleUrl: "./project-card.component.css"
})
export class ProjectCardComponent {
  language: "es" | "en" = "es"

  constructor(private translate: TranslateService) {
    this.translate.use(this.language).subscribe()
  }

  toggleLanguage() {
    this.language = this.language === "es" ? "en" : "es"
    this.translate.use(this.language)
  }

  @Input() title!: string
  @Input() description!: string
  @Input() github!: string
  @Input() demo!: string
  @Input() image!: string
}
