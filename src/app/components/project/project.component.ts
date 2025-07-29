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
      description: "Proyecto de x cosa, hace tal cosa",
      github: "https://github.com/kevin/proyecto-01",
      demo: "https://proyecto01.vercel.app",
      imageUrl: "assets/project.png"
    },
    {
      title: "Proyecto 02",
      description: "Otra app interesante",
      github: "https://github.com/kevin/proyecto-02",
      demo: "https://proyecto02.vercel.app",
      imageUrl: "assets/project.png"
    },
    {
      title: "Proyecto 03",
      description: "Otra app interesante",
      github: "https://github.com/kevin/proyecto-03",
      demo: "https://proyecto03.vercel.app",
      imageUrl: "assets/project.png"
    },
    {
      title: "Proyecto 04",
      description: "Otra app interesante",
      github: "https://github.com/kevin/proyecto-04",
      demo: "https://proyecto04.vercel.app",
      imageUrl: "assets/project.png"
    },
    {
      title: "Proyecto 05",
      description: "Otra app interesante",
      github: "https://github.com/kevin/proyecto-05",
      demo: "https://proyecto05.vercel.app",
      imageUrl: "assets/project.png"
    },
    {
      title: "Proyecto 06",
      description: "Otra app interesante",
      github: "https://github.com/kevin/proyecto-06",
      demo: "https://proyecto06.vercel.app",
      imageUrl: "assets/project.png"
    }
  ]
}
