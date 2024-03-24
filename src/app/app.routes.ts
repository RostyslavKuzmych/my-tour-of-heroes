import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: ':id/edit', component: HeroDetailComponent },
  { path: 'heroes/:id/edit', component: HeroDetailComponent },
  { path: '**', redirectTo: '/dashboard'}
];
