import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [AuthComponent, RegisterComponent, PasswordResetComponent],
  providers: [AuthGuard],
  exports: [AuthComponent]
})
export class AuthModule { }