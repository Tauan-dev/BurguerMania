import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importando CommonModule

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule], // Adicionando CommonModule
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'], // Corrigido para styleUrls
})
export class CardComponent {
  @Input() title!: string; // Título do hambúrguer
  @Input() description!: string; // Descrição do hambúrguer
  @Input() image!: string; // Imagem do hambúrguer
  @Input() id!: string; // Identificador único do hambúrguer
  @Input() category: number | undefined;

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(['/detalhes', this.id]); // Navega para a página de detalhes
  }
}
