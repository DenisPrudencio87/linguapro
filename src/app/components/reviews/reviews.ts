import { Component, inject } from '@angular/core';
import { LinguaService } from '../../services/lingua';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews {

  private linguaService = inject(LinguaService);

  reviews = this.linguaService.reviews;
}