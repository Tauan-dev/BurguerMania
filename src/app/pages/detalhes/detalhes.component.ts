import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { DescriptionComponent } from '../../components/description/description.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ApiService } from '../../services/api.service'; // Importe o ApiService

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
  burgerId: number | null = null; // Alterado para número

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService // Injeta o ApiService
  ) {}

  onBuyClick() {
    alert('Hambúrguer adicionado ao carrinho!');
  }

  async ngOnInit() {
    // Obtém o ID do hambúrguer a partir da URL
    const id = this.route.snapshot.paramMap.get('id');

    // Converte o ID para número, se não for null
    if (id) {
      this.burgerId = parseInt(id, 10);
      await this.getBurgerDetails(this.burgerId); // Chama o método assíncrono para buscar os detalhes
    }
  }

  // Método para buscar os detalhes do hambúrguer com base no ID
  async getBurgerDetails(id: number) {
    if (id !== null) {
      try {
        const response = await this.apiService.getProductById(id); // Busca os detalhes do produto pela API
        console.log('Dados recebidos da API:', response);
        this.burgerDetails = {
          name: response.name,
          pathImage: response.pathImage,
          price: response.price,
          baseDescription: response.baseDescription,
          fullDescription: response.fullDescription,
        };
      } catch (error) {
        console.error('Erro ao carregar detalhes do produto:', error);
      }
    }
  }
}
