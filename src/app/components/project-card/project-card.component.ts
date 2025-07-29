import { Component, Input } from "@angular/core"

@Component({
  selector: "project-card",
  imports: [],
  templateUrl: "./project-card.component.html",
  styleUrl: "./project-card.component.css"
})
export class ProjectCardComponent {
  @Input() title!: string
  @Input() description!: string
  @Input() github!: string
  @Input() demo!: string
  @Input() imageUrl!: string
}
