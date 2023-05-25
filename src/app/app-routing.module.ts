import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateListComponent } from './create-list/create-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-list', component: CreateListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
