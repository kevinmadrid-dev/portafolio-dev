import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

import { ProjectCardComponent } from "../project-card/project-card.component"

@Component({
  selector: "app-project",
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: "./project.component.html",
  styleUrl: "./project.component.css"
})
export class ProjectComponent {
  projects = [
    {
      title: "Proyecto 01",
      description: "*Proyectos agregados proximamente",
      github: "",
      demo: "",
      image: "assets/project.webp"
    },
    {
      title: "Proyecto 02",
      description: "*Proyectos agregados proximamente",
      github: "",
      demo: "",
      image: "assets/project.webp"
    },
    {
      title: "Proyecto 03",
      description: "*Proyectos agregados proximamente",
      github: "",
      demo: "",
      image: "assets/project.webp"
    },
    {
      title: "Proyecto 04",
      description: "*Proyectos agregados proximamente",
      github: "",
      demo: "",
      image: "assets/project.webp"
    },
    {
      title: "Proyecto 05",
      description: "*Proyectos agregados proximamente",
      github: "",
      demo: "",
      image: "assets/project.webp"
    },
    {
      title: "Proyecto 06",
      description: "*Proyectos agregados proximamente",
      github: "",
      demo: "",
      image: "assets/project.webp"
    }
  ]
}
