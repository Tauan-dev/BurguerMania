import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule],
})
export class HeaderComponent {
  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
