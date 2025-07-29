import { Component } from "@angular/core"

import { MainComponent } from "./components/main/main.component"
import { AboutComponent } from "./components/about/about.component"
import { ProjectComponent } from "./components/project/project.component"

@Component({
  selector: "app-root",
  imports: [MainComponent, AboutComponent, ProjectComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  title = "portafolio-dev"
}
