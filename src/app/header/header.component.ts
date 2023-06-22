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
  user: User | null = null;
  private userSub: Subscription;
  public menuOpen = false; // Declare this property

  constructor(public authService: AuthService, private router: Router) {
    this.userSub = this.authService.user$.subscribe(user => this.user = user);
  }

  logout() {
    this.authService.signOut();
    this.menuOpen = false; // Close the menu when user logs out
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
    this.menuOpen = false; // Close the menu when user navigates to profile
  }

  login() {
    this.router.navigate(['/auth']);
    this.menuOpen = false; // Close the menu when user navigates to login
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
