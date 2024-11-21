import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { DescriptionComponent } from '../../components/description/description.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
  imports: [
    CommonModule,
    HeaderComponent,
    DescriptionComponent,
    ButtonComponent,
  ],
})
export class DetalhesComponent implements OnInit {
  burgerDetails: any; // Dados do hambúrguer
  burgerId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  onBuyClick() {
    alert('Hambúrguer adicionado ao carrinho!');
  }

  ngOnInit() {
    // Obtém o ID do hambúrguer a partir da URL
    this.burgerId = this.route.snapshot.paramMap.get('id');

    // Simula a busca dos detalhes do hambúrguer com base no ID
    this.burgerDetails = this.getBurgerDetails(this.burgerId);
  }

  getBurgerDetails(id: string | null) {
    const allBurgers = [
      {
        id: '1',
        title: 'X-Alface-Premium',
        description: 'Pão, Habúrguer, alface, tomate, queijo e maionese',
        price: '35,00 R$',
        image: 'assets/burguercard.png',
        details:
          'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa.',
      },
      {
        id: '2',
        title: 'X-Tomate',
        description: 'Pão, Habúrguer, alface, tomate, queijo e maionese',
        price: '30,00 R$',
        image: 'assets/burguercard.png',
        details:
          'Delicioso hambúrguer com um toque especial de tomate fresco, queijo derretido e alface crocante.',
      },
      {
        id: '3',
        title: 'X-Bacon',
        description: 'Pão, Habúrguer, bacon, queijo, e molho barbecue',
        price: '40,00 R$',
        image: 'assets/burguercard.png',
        details:
          'O clássico X-Bacon com um hambúrguer suculento, fatias crocantes de bacon premium, queijo cheddar derretido e um molho barbecue artesanal que dá um toque defumado irresistível.',
      },
      {
        id: '4',
        title: 'X-Frutas',
        description: 'Pão, Habúrguer, frutas frescas, queijo e molho especial',
        price: '45,00 R$',
        image: 'assets/burguercard.png',
        details:
          'Uma combinação inusitada e deliciosa: hambúrguer acompanhado de uma seleção de frutas frescas (abacaxi, manga e maçã), queijo suave e um molho especial agridoce.',
      },
      {
        id: '5',
        title: 'X-Protein',
        description: 'Pão, Habúrguer, queijo, ovo e molho de alho',
        price: '50,00 R$',
        image: 'assets/burguercard.png',
        details:
          'O X-Protein é perfeito para quem busca energia extra: hambúrguer de carne 100% bovina, queijo branco derretido, ovo grelhado e um molho de alho cremoso para finalizar.',
      },
    ];

    return allBurgers.find((burger) => burger.id === id);
  }
}
