import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, ButtonComponent],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent {
  categories = [
    {
      title: 'X-Vegan',
      description: 'Hambúrgueres veganos deliciosos!',
      image: 'assets/images/x-vegan-category.jpg',
      category: 'x-vegan',
    },
    {
      title: 'X-Fitness',
      description: 'Opções saudáveis e nutritivas.',
      image: 'assets/images/x-fitness-category.jpg',
      category: 'x-fitness',
    },
    {
      title: 'X-Meat',
      description: 'Os melhores hambúrgueres de carne.',
      image: 'assets/images/x-meat-category.jpg',
      category: 'x-meat',
    },
  ];

  constructor(private router: Router) {}

  viewCategory(category: string) {
    this.router.navigate(['/cardapio-completo', category]); // Navega para o cardápio completo
  }
}
