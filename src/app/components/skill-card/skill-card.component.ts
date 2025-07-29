import { Component, Input } from "@angular/core"

@Component({
  selector: "skill-card",
  imports: [],
  templateUrl: "./skill-card.component.html",
  styleUrl: "./skill-card.component.css"
})
export class SkillCardComponent {
  @Input() icon!: string
  @Input() label!: string
}
