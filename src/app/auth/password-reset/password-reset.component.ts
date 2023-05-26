// password-reset.component.ts

import { Component } from '@angular/core';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent {
  email = '';
  message = '';
  isError = false;

  constructor(private authService: AuthService) {}

  async resetPassword() {
      await this.authService.resetPassword(this.email).then(
        success => { 
          console.log('Email sent')
          this.message = 'A password reset email has been sent to your email address';
          this.isError = false;
        },
        error => {
          console.log('Error sending email:', error)
          this.message = error.message;
          this.isError = true;
        }
      );
    }
}
