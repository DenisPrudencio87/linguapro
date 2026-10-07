import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LinguaService } from '../../services/lingua';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  private linguaService = inject(LinguaService);

  name = signal('');
  email = signal('');
  phone = signal('');
  course = signal('');

  message = signal('');

  enrollments = this.linguaService.enrollments;

  submit(): void {

    if (
      !this.name() ||
      !this.email() ||
      !this.phone() ||
      !this.course()
    ) {

      this.message.set('Por favor completa todos los campos.');
      return;
    }

    this.linguaService.addEnrollment({
      id: Date.now(),
      name: this.name(),
      email: this.email(),
      phone: this.phone(),
      course: this.course()
    });

    this.message.set('¡Inscripción registrada correctamente!');

    this.name.set('');
    this.email.set('');
    this.phone.set('');
    this.course.set('');
  }

  deleteEnrollment(id: number): void {
    this.linguaService.deleteEnrollment(id);
  }
}