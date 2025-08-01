import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"

@Component({
  selector: "skill-card",
  imports: [CommonModule],
  templateUrl: "./skill-card.component.html",
  styleUrls: ["./skill-card.component.css"]
})
export class SkillCardComponent {
  @Input() icon!: string
  @Input() label!: string
  @Input() svgContent!: string
}
