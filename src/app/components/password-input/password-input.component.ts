import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent {
  @Input() password!: string;

  @Output() passwordChange = new EventEmitter<string>();

  onPasswordChange(value: string): void {
    this.password = value;
    this.passwordChange.emit(value);
  }
}
