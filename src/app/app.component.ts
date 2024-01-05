import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  password: string = '';

  get passwordStrength(): string {
    return this.getPasswordStrength();
  }

  getPasswordStrength(): string {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (this.password.length >= 8 && hasLetters && hasDigits && hasSymbols) {
      return 'strong';
    } else if (this.password.length >= 8 && ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols))) {
      return 'medium';
    } else {
      return 'easy';
    }
  }
}
