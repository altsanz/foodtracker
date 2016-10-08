import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MaterialModule} from '@angular/material';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';
import { NavBarComponent } from './navbar.component';

import { RestaurantLoginComponent } from './restaurant/restaurant-login.component';

import { MenuComponent } from './menu.component';
import { RestaurantMenuComponent } from './restaurant/restaurant-menu.component';

import { ClientLoginComponent } from './client-login.component';
import { MenuAddComponent } from './restaurant/menu-add.component';
import { MenuService } from './restaurant/menu.service';

import { HomeComponent } from './home.component';
import { UsersComponent } from './users.component';
import { UserService } from './users.service';
import { UserFormComponent } from './user-form.component';
import { NotFoundComponent } from './not-found.component';
import { SpinnerComponent } from './spinner.component';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    RestaurantLoginComponent,
    RestaurantMenuComponent,
    ClientLoginComponent,
    MenuAddComponent,
    HomeComponent,
    UsersComponent,
    UserFormComponent,
    NotFoundComponent,
    PostsComponent,
    SpinnerComponent,
    routedComponents,
    MenuComponent
  ],
  providers: [
    UserService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
