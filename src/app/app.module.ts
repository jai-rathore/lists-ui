import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { CreateListComponent } from './create-list/create-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturedListsComponent } from './home/featured-lists/featured-lists.component';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './header/header.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ProfileComponent } from './user/profile/profile.component';

initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateListComponent,
    FeaturedListsComponent,
    HeaderComponent,
    ListDetailComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
