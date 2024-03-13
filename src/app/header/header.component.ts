import { Component } from '@angular/core';
import { RouteReuseStrategy, Router, RouterModule } from '@angular/router';
import { CartPanelComponent } from '../products/cart/cart-panel/cart-panel.component';
import { LocalStorageSevice } from '../core/services/localstorage.service';
import { AUTH_HEADER } from '../core/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterModule, CartPanelComponent]
})
export class HeaderComponent extends LocalStorageSevice {
  constructor(private _router: Router) {
    super()
  }
  logout() {
    this.removeItem(AUTH_HEADER);
    this._router.navigateByUrl('/')
    
  }
}
