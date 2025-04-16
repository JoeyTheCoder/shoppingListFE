import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MealInputComponent } from './components/meal-input/meal-input.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'meal-input', component: MealInputComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '' } // Redirect to home for any unknown routes
];
