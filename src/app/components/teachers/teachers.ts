import { Component, inject } from '@angular/core';
import { LinguaService } from '../../services/lingua';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [],
  templateUrl: './teachers.html',
  styleUrl: './teachers.css'
})
export class Teachers {

  private linguaService = inject(LinguaService);

  teachers = this.linguaService.teachers;
}