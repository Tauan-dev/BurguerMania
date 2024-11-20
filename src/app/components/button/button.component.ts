import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: 'primary' | 'secondary' | 'third' | 'submit' = 'primary';
  @Input() routerLink?: string; // Suporte para rotas com routerLink

  onClick() {
    console.log('Button clicked');
  }
}
