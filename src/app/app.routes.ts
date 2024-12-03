import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { CardapioCompletoComponent } from './pages/cardapiocompleto/cardapiocompleto.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { PedidoComponent } from './pages/pedido/pedido.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'cardapio-completo', component: CardapioCompletoComponent },
  {
    path: 'cardapio-completo/:categoryId',
    component: CardapioCompletoComponent,
  },
  { path: 'detalhes/:id', component: DetalhesComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: '**', redirectTo: 'pedido' }, // Redireciona para 'pedido' se a rota não for encontrada
];
