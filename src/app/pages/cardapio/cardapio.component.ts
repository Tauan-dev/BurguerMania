import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Router } from '@angular/router'; // Importar o Router

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule, CardComponent, HeaderComponent, ButtonComponent],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent implements OnInit {
  public categories: any[] = [];

  constructor(
    public apiService: ApiService,
    private cdRef: ChangeDetectorRef,
    private router: Router // Injetar o Router
  ) {}

  public categories$: Observable<any[]> = new Observable<any[]>(); // Inicializando a propriedade

  async ngOnInit(): Promise<void> {
    this.categories$ = from(this.apiService.getCategories()); // Convertendo Promise para Observable
  }

  // Carregar categorias usando o ApiService com Axios
  async loadCategories() {
    try {
      this.categories = await this.apiService.getCategories();
      console.log('Categorias carregadas:', this.categories);
      this.cdRef.detectChanges(); // Forçar a detecção de mudanças
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }
  }

  // Alterar para usar category.id em vez de category.name
  viewCategory(categoryId: number) {
    console.log(`Visualizando categoria com ID: ${categoryId}`);
    if (categoryId) {
      this.router.navigate([`/cardapio-completo/${categoryId}`]);
    } else {
      console.error('categoryId não definido!');
    }
  }
}
