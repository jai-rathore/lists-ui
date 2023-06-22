// src/app/profile/profile.component.ts

import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: User | null = null;
  displayName: string = '';
  email: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    if (this.user) {
      this.displayName = this.user.displayName || '';
      this.email = this.user.email || '';
    }
  }

  async updateProfile(): Promise<void> {
    if (this.user) {
      try {
        await this.authService.updateProfile(this.displayName);
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  }
}
