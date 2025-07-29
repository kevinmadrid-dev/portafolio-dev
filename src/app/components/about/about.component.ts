import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"

import { CardComponent } from "../card/card.component"

@Component({
  selector: "app-about",
  imports: [CommonModule, CardComponent],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css"
})
export class AboutComponent {
  skills = [
    { name: "HTML", icon: "assets/icons/html.svg" },
    { name: "CSS", icon: "assets/icons/css.svg" },
    { name: "JavaScript", icon: "assets/icons/javascript.svg" },
    { name: "TypeScript", icon: "assets/icons/typescript.svg" },
    { name: "Tailwind", icon: "assets/icons/tailwind.svg" },
    { name: "Bootstrap", icon: "assets/icons/bootstrap.svg" },
    { name: "Angular", icon: "assets/icons/angular.svg" },
    { name: "Vue", icon: "assets/icons/vue.svg" },
    { name: "React", icon: "assets/icons/react.svg" },
    { name: "PHP", icon: "assets/icons/php.svg" },
    { name: "Java", icon: "assets/icons/java.svg" },
    { name: "Spring", icon: "assets/icons/spring.svg" },
    { name: "NodeJS", icon: "assets/icons/nodejs.svg" },
    { name: "GitHub", icon: "assets/icons/github.svg" },
    { name: "Figma", icon: "assets/icons/figma.svg" },
    { name: "MySQL", icon: "assets/icons/mysql.svg" },
    { name: "PostgreSQL", icon: "assets/icons/postgresql.svg" },
    { name: "Notion", icon: "assets/icons/notion.svg" },
    { name: "Vercel", icon: "assets/icons/vercel.svg" }
  ]
}
