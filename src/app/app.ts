import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Courses } from './components/courses/courses';
import { Teachers } from './components/teachers/teachers';
import { Reviews } from './components/reviews/reviews';
import { Promotions } from './components/promotions/promotions';
import { About } from './components/about/about';
import { EnrollmentForm } from './components/enrollment-form/enrollment-form';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    Navbar,
    Hero,
    Courses,
    Teachers,
    Reviews,
    Promotions,
    About,
    EnrollmentForm
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}