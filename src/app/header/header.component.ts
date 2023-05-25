// src/app/header/header.component.ts

import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  toggleMenu = false;
  user: User | null = null;
  private userSub: Subscription;

  constructor(public authService: AuthService, private router: Router) {
    this.userSub = this.authService.user$.subscribe(user => this.user = user);
  }

  logout() {
    this.authService.signOut().then(() => this.router.navigate(['/login']));
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}