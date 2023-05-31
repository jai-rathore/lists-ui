// src/app/auth/auth.component.ts

import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user = {
    email: '',
    password: ''
  };
  isError = false;
  errorMessage = ''

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.signIn(this.user.email, this.user.password).then
    ( 
      success => { 
        console.log('Logged in successfully');
        this.router.navigate(['/home']);
      },
        error => { 
        this.isError = true;
        console.log('Error logging in:', error);
        this.errorMessage = error.message;
      }
    );
  }

  async googleSignIn() {
      await this.authService.signInWithGoogle().then(
        success => {
          console.log('Logged in with Google successfully');
          this.router.navigate(['/home']);
        },
        error => {
          this.isError = true;
          console.log('Error logging in with Google:', error);
          this.errorMessage = error.message;
        }
      );
  }

  signup(): void {
    this.authService.signUp(this.user.email, this.user.password).then
    ( 
      success => {
        console.log('Signed up successfully');
        this.router.navigate(['/home']);
      },
      error => {
        this.isError = true;
        console.log('Error signing up:', error);
        this.errorMessage = error.message;
      }
    );
  }

  logout(): void {
    this.authService.signOut().then
    ( 
      success => console.log('Logged out successfully'),
      error => {
        this.isError = true;
        console.log('Error logging out:', error)
      }
    );
  }
}