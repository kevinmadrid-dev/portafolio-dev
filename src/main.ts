import { bootstrapApplication } from "@angular/platform-browser"
import { appConfig } from "./app/app.config"
import { AppComponent } from "./app/app.component"

import { provideHttpClient } from "@angular/common/http"

async function main() {
  const { LanguageService } = await import("./app/services/language.service")
  const app = await bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [...appConfig.providers!, provideHttpClient()]
  })

  const injector = app.injector
  const langService = injector.get(LanguageService)
  await langService.initLanguage() // <--- inicialización antes de renderizar vista
}

main()
