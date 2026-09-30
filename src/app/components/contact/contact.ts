// contact.component.ts
import { Component, signal } from '@angular/core';
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

  status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  async sendEmail() {
    if (this.status() === 'sending' || !this.name.trim() || this.name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim()) || this.email.length > 254 || this.message.trim().length < 10 || this.message.length > 4000) return;

    this.status.set('sending');

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

      this.status.set('success');
      this.name = '';
      this.email = '';
      this.message = '';


    } catch {
      this.status.set('error');

    }
  }
}