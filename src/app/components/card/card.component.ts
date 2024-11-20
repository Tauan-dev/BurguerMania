import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title!: string; // Título do hambúrguer
  @Input() description!: string; // Descrição do hambúrguer
  @Input() image!: string; // Imagem do hambúrguer
  @Input() id!: string; // Identificador único do hambúrguer

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(['/detalhes', this.id]); // Navega para a página de detalhes
  }
}
