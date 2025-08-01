import { Component, Input, SimpleChanges } from "@angular/core"
import { CommonModule } from "@angular/common"

import { TranslateModule, TranslateService } from "@ngx-translate/core"
import { trigger, transition, style, animate } from "@angular/animations"

@Component({
  selector: "project-card",
  imports: [CommonModule, TranslateModule],
  templateUrl: "./project-card.component.html",
  styleUrl: "./project-card.component.css",
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
export class ProjectCardComponent {
  @Input() language!: "es" | "en"

  constructor(private translate: TranslateService) {}

  ngOnChanges() {
    if (this.language) {
      this.translate.use(this.language).subscribe()
    }
  }

  @Input() title!: string
  @Input() description!: string
  @Input() github!: string
  @Input() demo!: string
  @Input() image!: string
}
