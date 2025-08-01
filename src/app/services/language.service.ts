import { Injectable } from "@angular/core"
import { TranslateService } from "@ngx-translate/core"

@Injectable({ providedIn: "root" })
export class LanguageService {
  private readonly KEY = "language"

  constructor(private translate: TranslateService) {}

  initLanguage(): Promise<void> {
    const lang = localStorage.getItem(this.KEY) as "es" | "en" | null
    const defaultLang = lang || "es"
    return new Promise((resolve) => {
      this.translate.use(defaultLang).subscribe(() => resolve())
    })
  }

  getLanguage(): "es" | "en" {
    return (localStorage.getItem(this.KEY) as "es" | "en") || "es"
  }

  setLanguage(lang: "es" | "en"): void {
    localStorage.setItem(this.KEY, lang)
    this.translate.use(lang).subscribe()
  }
}
