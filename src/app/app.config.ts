import { ApplicationConfig } from "@angular/core"
import { provideHttpClient } from "@angular/common/http"
import { provideRouter } from "@angular/router"
import { routes } from "./app.routes"

import { TranslateLoader, TranslateModule } from "@ngx-translate/core"
import { HttpClient } from "@angular/common/http"
import { TranslateHttpLoader } from "@ngx-translate/http-loader"
import { importProvidersFrom } from "@angular/core"

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json")
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(
      TranslateModule.forRoot({
        fallbackLang: "es",
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
}
