// contact.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../service/translation.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(public translationService: TranslationService) {}

  name = '';
  email = '';
  message = '';

  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  async sendEmail() {
    if (!this.name || !this.email || !this.message) return;

    this.status = 'sending';

    try {
      await emailjs.send(
        'service_bfed9je',
        'template_w1w7y7a',
        {
          from_name: this.name,
          from_email: this.email,
          message: this.message,
        },
        'TSh_PRfSTgC-DHbAd'
      );

      this.status = 'success';
      this.name = '';
      this.email = '';
      this.message = '';

      setTimeout(() => (this.status = 'idle'), 5000);
    } catch {
      this.status = 'error';
      setTimeout(() => (this.status = 'idle'), 5000);
    }
  }
}