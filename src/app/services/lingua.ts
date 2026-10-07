import { Injectable, signal } from '@angular/core';

import {
  Course,
  Teacher,
  Review,
  Promotion,
  Enrollment
} from '../models/lingua.models';

@Injectable({
  providedIn: 'root'
})
export class LinguaService {

  courses = signal<Course[]>([
    {
      id: 1,
      language: 'Inglés',
      name: 'English Complete',
      level: 'Básico a Avanzado',
      duration: '12 meses',
      icon: 'bi-translate'
    },
    {
      id: 2,
      language: 'Francés',
      name: 'Français Pro',
      level: 'Básico a Intermedio',
      duration: '10 meses',
      icon: 'bi-chat-heart'
    },
    {
      id: 3,
      language: 'Portugués',
      name: 'Português Fácil',
      level: 'Básico a Avanzado',
      duration: '9 meses',
      icon: 'bi-globe-americas'
    },
    {
      id: 4,
      language: 'Italiano',
      name: 'Italiano Viva',
      level: 'Básico a Intermedio',
      duration: '8 meses',
      icon: 'bi-book'
    }
  ]);

  teachers = signal<Teacher[]>([
    {
      id: 1,
      name: 'Emily Johnson',
      specialty: 'Inglés y preparación TOEFL',
      experience: '8 años de experiencia',
      initials: 'EJ'
    },
    {
      id: 2,
      name: 'Sophie Laurent',
      specialty: 'Francés',
      experience: '6 años de experiencia',
      initials: 'SL'
    },
    {
      id: 3,
      name: 'Carlos Almeida',
      specialty: 'Portugués',
      experience: '7 años de experiencia',
      initials: 'CA'
    }
  ]);

  reviews = signal<Review[]>([
    {
      id: 1,
      student: 'Andrea Pérez',
      comment: 'Excelente metodología. Mejoré muchísimo mi inglés.',
      rating: 5
    },
    {
      id: 2,
      student: 'Luis Ramírez',
      comment: 'Los profesores explican muy bien y las clases son dinámicas.',
      rating: 5
    },
    {
      id: 3,
      student: 'María Torres',
      comment: 'Una muy buena experiencia. Recomiendo LinguaPro.',
      rating: 4
    }
  ]);

  promotions = signal<Promotion[]>([
    {
      id: 1,
      title: 'Matrícula gratis',
      description: 'Inscríbete este mes y obtén matrícula completamente gratuita.',
      discount: '100%'
    },
    {
      id: 2,
      title: 'Descuento universitario',
      description: 'Presenta tu carnet universitario y obtén un descuento especial.',
      discount: '25%'
    },
    {
      id: 3,
      title: 'Plan amigos',
      description: 'Inscríbete con un amigo y ambos reciben un descuento.',
      discount: '20%'
    }
  ]);

  enrollments = signal<Enrollment[]>([]);

  addEnrollment(enrollment: Enrollment): void {
    this.enrollments.update(current => [
      ...current,
      enrollment
    ]);
  }

  deleteEnrollment(id: number): void {
    this.enrollments.update(current =>
      current.filter(item => item.id !== id)
    );
  }
}