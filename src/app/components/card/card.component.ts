import { Component, Input } from "@angular/core"

@Component({
  selector: "skill-card",
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css"
})
export class CardComponent {
  @Input() icon!: string
  @Input() label!: string
}
