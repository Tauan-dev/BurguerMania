import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() label: string = ''; // Rótulo do input
  @Input() type: string = 'text'; // Tipo do input
  @Input() placeholder: string = ''; // Placeholder
  @Input() value: string = ''; // Valor inicial do input

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>(); // Evento para enviar o valor atualizado

  onInputChange(event: any) {
    this.valueChange.emit(event.target.value); // Dispara o evento com o novo valor
  }
}
