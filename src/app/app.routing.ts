import { Routes, RouterModule } from '@angular/router';


import { RestaurantLoginComponent } from './restaurant/restaurant-login.component';
<<<<<<< HEAD
import { LoginComponent } from './login.component';
import { MenuComponent } from './menu.component';
=======
import { ClientLoginComponent } from './client-login.component';
>>>>>>> CRUD-webpack





import { HomeComponent } from './home.component';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';
import { NotFoundComponent } from './not-found.component';
import { PostsComponent } from './posts.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'restaurant/login',
    component: RestaurantLoginComponent
  },
  {
    path: 'login',
<<<<<<< HEAD
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuComponent
=======
    component: ClientLoginComponent
>>>>>>> CRUD-webpack
  },
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'users',
  //   component: UsersComponent
  // },
  // {
  //   path: 'users/new',
  //   component: UserFormComponent
  // },
  // {
  //   path: 'users/:id',
  //   component: UserFormComponent
  // },
  // {
  //   path: 'posts',
  //   component: PostsComponent
  // },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
  , { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [HomeComponent, UserFormComponent, NotFoundComponent, PostsComponent];
