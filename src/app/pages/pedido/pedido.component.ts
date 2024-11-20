import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-pedido',
  standalone: true,
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    InputComponent,
    ButtonComponent,
  ],
})
export class PedidoComponent {
  pedido = {
    produto1: '',
    quantidade1: 0,
    produto2: '',
    quantidade2: 0,
    observacao: '',
  };

  onSubmit() {
    alert('Pedido enviado com sucesso: ' + JSON.stringify(this.pedido));
    console.log(this.pedido);
    window.location.reload();
  }
  onBuyClick() {
    alert('Hambúrguer adicionado ao carrinho!');
  }
}
