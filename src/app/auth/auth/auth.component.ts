import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

type ViewType = 'login' | 'register';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  viewType: ViewType = 'login';

  onViewActivate(data: Object): void {
    this.viewType = data instanceof LoginComponent ? 'login' : 'register';
  }
}
