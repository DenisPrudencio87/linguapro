import { Component, inject } from '@angular/core';
import { LinguaService } from '../../services/lingua';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [],
  templateUrl: './promotions.html',
  styleUrl: './promotions.css'
})
export class Promotions {

  private linguaService = inject(LinguaService);

  promotions = this.linguaService.promotions;
}