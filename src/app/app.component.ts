import { Component } from '@angular/core';
import { PasswordStrengthService } from './services/password-strength.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  password: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  get passwordStrength(): string {
    return this.passwordStrengthService.getPasswordStrength(this.password);
  }
}
