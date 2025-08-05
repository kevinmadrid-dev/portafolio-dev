import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"

import { TranslateModule, TranslateService } from "@ngx-translate/core"
import { trigger, transition, style, animate } from "@angular/animations"

import { ProjectCardComponent } from "../project-card/project-card.component"

@Component({
  selector: "app-project",
  imports: [CommonModule, ProjectCardComponent, TranslateModule],
  templateUrl: "./project.component.html",
  styleUrl: "./project.component.css",
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
export class ProjectComponent {
  @Input() language!: "es" | "en"

  constructor(private translate: TranslateService) {}

  ngOnChanges() {
    this.translate.use(this.language).subscribe()
  }

  projects = [
    {
      title: "project.title1",
      description: "project.description1",
      github: "https://github.com/kevinmadrid-dev/decrypter-encryptor-text",
      demo: "https://decrypter-encryptor-text.vercel.app/",
      image: "../../../assets/proyectos/decrypter-encryptor-text.png"
    },
    {
      title: "project.title2",
      description: "project.description2",
      github: "https://github.com/kevinmadrid-dev/frontend-tech-test",
      demo: "https://frontend-tech-test-theta.vercel.app",
      image: "../../../assets/proyectos/geo-explorer.png"
    },
    {
      title: "project.title3",
      description: "project.description3",
      github: "https://github.com/kevinmadrid-dev/spa-petclinic",
      demo: "https://react-spa-petclinic.vercel.app/",
      image: "../../../assets/proyectos/doguito-petshop.png"
    },
    {
      title: "project.title4",
      description: "project.description4",
      github: "https://github.com/kevinmadrid-dev/cash-flow.git",
      demo: "https://cash-flow-puce.vercel.app/",
      image: "../../../assets/proyectos/cash-flow.png"
    },
    {
      title: "project.title5",
      description: "project.description5",
      github: "https://github.com/kevinmadrid-dev/gifs-app.git",
      demo: "https://gifs-app-two-delta.vercel.app/",
      image: "../../../assets/proyectos/gif-app.png"
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
