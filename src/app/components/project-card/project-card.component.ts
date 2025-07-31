import { Component, Input } from "@angular/core"
import { TranslateModule, TranslateService } from "@ngx-translate/core"

@Component({
  selector: "project-card",
  imports: [TranslateModule],
  templateUrl: "./project-card.component.html"
})
export class ProjectCardComponent {
  language: "es" | "en" = "es"

  constructor(private translate: TranslateService) {
    this.translate.use(this.language).subscribe()
    this.translate.use(this.language)
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
