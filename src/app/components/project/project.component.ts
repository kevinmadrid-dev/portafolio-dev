import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TranslateModule, TranslateService } from "@ngx-translate/core"

import { ProjectCardComponent } from "../project-card/project-card.component"

@Component({
  selector: "app-project",
  imports: [CommonModule, ProjectCardComponent, TranslateModule],
  templateUrl: "./project.component.html"
})
export class ProjectComponent {
  language: "es" | "en" = "es"

  constructor(private translate: TranslateService) {
    this.translate.use(this.language).subscribe()
    this.translate.use(this.language)
  }

  toggleLanguage() {
    this.language = this.language === "es" ? "en" : "es"
    this.translate.use(this.language)
  }

  projects = [
    {
      title: "project.title1",
      description: "project.description1",
      github: "",
      demo: "",
      image: "assets/project.webp"
    },
    {
      title: "project.title2",
      description: "project.description2",
      github: "",
      demo: "",
      image: "assets/project.webp"
    },
    {
      title: "project.title3",
      description: "project.description3",
      github: "",
      demo: "",
      image: "assets/project.webp"
    },
    {
      title: "project.title4",
      description: "project.description4",
      github: "",
      demo: "",
      image: "assets/project.webp"
    },
    {
      title: "project.title5",
      description: "project.description5",
      github: "",
      demo: "",
      image: "assets/project.webp"
    },
    {
      title: "project.title6",
      description: "project.description6",
      github: "",
      demo: "",
      image: "assets/project.webp"
    }
  ]
}
