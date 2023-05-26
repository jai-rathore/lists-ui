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

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.signIn(this.user.email, this.user.password).then
    ( 
      success => { 
        console.log('Logged in successfully')
        this.router.navigate(['/home'])},
        error => console.log('Error logging in:', error)
    );
  }

  async googleSignIn() {
    try {
      await this.authService.signInWithGoogle();
    } catch (error) {
      console.log('Error logging in:', error);
    }
  }

  signup(): void {
    this.authService.signUp(this.user.email, this.user.password).then
    ( 
      success => console.log('Signed up successfully'),
      error => console.log('Error signing up:', error)
    );
  }

  logout(): void {
    this.authService.signOut().then
    ( 
      success => console.log('Logged out successfully'),
      error => console.log('Error logging out:', error)
    );
  }
}