import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  getPasswordStrength(password: string): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length >= 8 && hasLetters && hasDigits && hasSymbols) {
      return 'strong';
    } else if (password.length >= 8 && ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols))) {
      return 'medium';
    } else {
      return 'easy';
    }
  }
}
