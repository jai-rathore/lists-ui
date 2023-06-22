import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './auth/register/register.component';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';
import { HomeComponent } from './home/home.component';
import { CreateListComponent } from './create-list/create-list.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'password-reset', component: PasswordResetComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', redirectTo: '' },
  { path: 'create-list', component: CreateListComponent, canActivate: [AuthGuard] },
  { path: 'list-detail/:id', component: ListDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
