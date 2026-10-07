import { Component, inject } from '@angular/core';
import { LinguaService } from '../../services/lingua';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {

  private linguaService = inject(LinguaService);

  courses = this.linguaService.courses;
}