import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { CardapioCompletoComponent } from './pages/cardapiocompleto/cardapiocompleto.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'cardapio-completo', component: CardapioCompletoComponent },
  { path: 'cardapio-completo/:category', component: CardapioCompletoComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
];
