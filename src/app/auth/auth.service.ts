// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, sendPasswordResetEmail } from 'firebase/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private router: Router) {
    const auth = getAuth();
    this.user$ = new Observable<User | null>(subscriber => {
      auth.onAuthStateChanged(subscriber);
    });
  }

  // Check if user is authenticated
  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const auth = getAuth();
      auth.onAuthStateChanged(user => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, reject);
    });
  }

  // Sign up with email and password
  async signUp(email: string, password: string) {
    try {
      const auth = getAuth();
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Sign in with email and password
  async signIn(email: string, password: string) {
    try {
      const auth = getAuth();
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Sign out
  async signOut() {
    try {
      const auth = getAuth();
      await signOut(auth);
      this.router.navigate(['/auth']);
    } catch (error) {
      throw error;
    }
  }

  // Request password reset
  async resetPassword(email: string) {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent');
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
