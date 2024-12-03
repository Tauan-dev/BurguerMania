import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service'; // Importe o ApiService
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
  categoryId: number | null = null; // Categoria obtida da URL (agora como número)
  menuItems: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    category: number; // Categoria é um número
  }> = []; // Lista de itens

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService // Injeta o ApiService
  ) {}

  ngOnInit(): void {
    // Obtém a categoria diretamente da URL
    const category = this.route.snapshot.paramMap.get('categoryId'); // Alterado para categoryId

    // Converte a categoria para número se não for null
    if (category) {
      this.categoryId = parseInt(category, 10);
      // Busca os itens do cardápio com base na categoria
      this.getMenuItems(this.categoryId);
    } else {
      // Se não houver categoryId, busca todos os hambúrgueres
      this.getMenuItems(); // Chama sem categoria para obter todos os produtos
    }
  }

  // Método para buscar os itens do cardápio a partir da categoria
  async getMenuItems(categoryId?: number): Promise<void> {
    try {
      let response;

      if (categoryId) {
        // Busca os produtos de uma categoria específica
        response = await this.apiService.getProductsByCategory(categoryId);
      } else {
        // Busca todos os produtos, sem categoria
        response = await this.apiService.getAllProducts();
      }

      console.log('Itens de cardápio recebidos:', response); // Verifique a resposta da API

      this.menuItems = response.map((product: any) => ({
        id: product.id,
        title: product.name, // Usando o nome do produto
        description: product.baseDescription, // Descrição do produto
        image: product.pathImage, // Caminho da imagem
        category: product.categoryId, // Usando o ID da categoria do produto
      }));
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  }

  // Navega para a página de detalhes do hambúrguer
  navigateToDetails(id: string): void {
    this.router.navigate(['/detalhes', id]);
  }
}
