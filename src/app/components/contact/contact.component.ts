import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { FormsModule, NgForm } from "@angular/forms"

import emailjs from "emailjs-com"

@Component({
  selector: "app-contact",
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css"
})
export class ContactComponent {
  currentYear = new Date().getFullYear()
  isSent = false
  isError = false

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      this.isError = true
      return
    }

    const { name, email, message } = form.value

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
