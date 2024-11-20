import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-cardapio-completo',
  standalone: true,
  templateUrl: './cardapiocompleto.component.html',
  styleUrls: ['./cardapiocompleto.component.css'],
  imports: [CommonModule, HeaderComponent, CardComponent],
})
export class CardapioCompletoComponent implements OnInit {
  category: string | null = null; // Categoria obtida da URL
  menuItems: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
  }> = []; // Lista de itens

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Obtém a categoria diretamente da URL
    this.category = this.route.snapshot.paramMap.get('category');

    // Busca os itens do cardápio com base na categoria
    this.menuItems = this.getMenuItems(this.category);
  }

  // Método para retornar os itens do cardápio
  getMenuItems(category: string | null): Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
  }> {
    const allItems = [
      {
        id: '1',
        title: 'X-Alface-Premium',
        description: 'Pão, Habúrguer, alface, tomate, queijo e maionese',
        image: 'assets/images/x-alface-premium.jpg',
        category: 'x-vegan',
      },
      {
        id: '2',
        title: 'X-Tomate',
        description: 'Pão, Habúrguer, alface, tomate, queijo e maionese',
        image: 'assets/images/x-tomate.jpg',
        category: 'x-vegan',
      },
      {
        id: '3',
        title: 'X-Bacon',
        description: 'Pão, Habúrguer, bacon, queijo, e molho barbecue',
        image: 'assets/images/x-bacon.jpg',
        category: 'x-meat',
      },
      {
        id: '4',
        title: 'X-Frutas',
        description: 'Pão, Habúrguer, frutas frescas, queijo e molho especial',
        image: 'assets/images/x-frutas.jpg',
        category: 'x-vegan',
      },
      {
        id: '5',
        title: 'X-Protein',
        description: 'Pão, Habúrguer, queijo, ovo e molho de alho',
        image: 'assets/images/x-protein.jpg',
        category: 'x-fitness',
      },
    ];

    return category
      ? allItems.filter((item) => item.category === category)
      : allItems;
  }

  // Navega para a página de detalhes do hambúrguer
  navigateToDetails(id: string) {
    this.router.navigate(['/detalhes', id]);
  }
}
