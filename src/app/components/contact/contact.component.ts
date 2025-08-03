import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { FormsModule, NgForm } from "@angular/forms"

import { TranslateModule, TranslateService } from "@ngx-translate/core"
import { trigger, transition, style, animate } from "@angular/animations"
import emailjs from "@emailjs/browser"

@Component({
  selector: "app-contact",
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
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
export class ContactComponent {
  @Input() language!: "es" | "en"

  contactForm = {
    name: "",
    email: "",
    message: ""
  }

  constructor(private translate: TranslateService) {}

  ngOnChanges() {
    this.translate.use(this.language).subscribe()
  }

  currentYear = new Date().getFullYear()
  isSent = false
  isError = false

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      this.isError = true
      return
    }

    const { name, email, message } = this.contactForm

    const ahora = new Date()
    const templateParams = {
      name,
      email,
      message,
      date: ahora.toLocaleDateString("es-PE"),
      time: ahora.toLocaleTimeString("es-PE")
    }

    emailjs
      .send(
        "service_8u5m8rq",
        "template_znoiqdd",
        templateParams,
        "aT7zK2eK_LuJRCg5X"
      )
      .then(() => {
        this.isSent = true
        this.isError = false
        this.contactForm = { name: "", email: "", message: "" }
        form.reset()

        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          this.isSent = false
        }, 5000)
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error)
        this.isError = true
      })
  }
}
