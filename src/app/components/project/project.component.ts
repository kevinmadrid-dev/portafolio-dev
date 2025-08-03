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
      title: "Encriptador de Texto",
      description:
        "Aplicación web para encriptar y desencriptar texto. Desarrollada como parte del Challenge de ONE + Alura.",
      github: "https://github.com/kevinmadrid-dev/decrypter-encryptor-text",
      demo: "https://decrypter-encryptor-text.vercel.app/",
      image: "../../../assets/proyectos/decrypter-encryptor-text.png"
    },
    {
      title: "GeoExplorer",
      description:
        "Reto técnico, permite explorar información sobre continentes y países del mundo mediante el uso de APIs.",
      github: "https://github.com/kevinmadrid-dev/frontend-tech-test",
      demo: "https://frontend-tech-test-theta.vercel.app/home",
      image: "../../../assets/proyectos/geo-explorer.png"
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
