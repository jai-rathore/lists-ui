import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    email: '',
    password: ''
  };
  isError = false;
  errorMessage = ''

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register(): void {
    this.authService.signUp(this.user.email, this.user.password).then(
      success => this.router.navigate(['/home']), 
      error => {
        this.isError = true
        console.log('Error registering:', error)
        this.errorMessage = error.message
      }
    );
  }
}
