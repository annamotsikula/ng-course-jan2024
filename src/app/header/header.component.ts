import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartPanelComponent } from '../products/cart/cart-panel/cart-panel.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterModule, CartPanelComponent]
})
export class HeaderComponent {

}
