import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { HttpClient } from "@angular/common/http"

import { TranslateModule, TranslateService } from "@ngx-translate/core"
import { trigger, transition, style, animate } from "@angular/animations"

import { SkillCardComponent } from "../skill-card/skill-card.component"

@Component({
  selector: "app-about",
  imports: [CommonModule, SkillCardComponent, TranslateModule],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
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
export class AboutComponent {
  @Input() language!: "es" | "en"

  constructor(private translate: TranslateService, private http: HttpClient) {}

  ngOnChanges() {
    this.translate.use(this.language).subscribe()
  }

  skills = [
    { name: "HTML", icon: "assets/icons/html.svg", svgContent: "" },
    { name: "CSS", icon: "assets/icons/css.svg", svgContent: "" },
    { name: "JavaScript", icon: "assets/icons/javascript.svg", svgContent: "" },
    { name: "TypeScript", icon: "assets/icons/typescript.svg", svgContent: "" },
    { name: "Tailwind", icon: "assets/icons/tailwind.svg", svgContent: "" },
    { name: "Bootstrap", icon: "assets/icons/bootstrap.svg", svgContent: "" },
    { name: "Angular", icon: "assets/icons/angular.svg", svgContent: "" },
    { name: "Vue", icon: "assets/icons/vue.svg", svgContent: "" },
    { name: "React", icon: "assets/icons/react.svg", svgContent: "" },
    { name: "PHP", icon: "assets/icons/php.svg", svgContent: "" },
    { name: "Java", icon: "assets/icons/java.svg", svgContent: "" },
    { name: "Spring", icon: "assets/icons/spring.svg", svgContent: "" },
    { name: "NodeJS", icon: "assets/icons/nodejs.svg", svgContent: "" },
    { name: "GitHub", icon: "assets/icons/github.svg", svgContent: "" },
    { name: "Figma", icon: "assets/icons/figma.svg", svgContent: "" },
    { name: "MySQL", icon: "assets/icons/mysql.svg", svgContent: "" },
    { name: "PostgreSQL", icon: "assets/icons/postgresql.svg", svgContent: "" },
    { name: "Notion", icon: "assets/icons/notion.svg", svgContent: "" },
    { name: "Vercel", icon: "assets/icons/vercel.svg", svgContent: "" }
  ]

  ngOnInit() {
    this.skills.forEach((skill, i) => {
      this.http.get(skill.icon, { responseType: "text" }).subscribe((svg) => {
        this.skills[i].svgContent = svg
      })
    })
  }
}
