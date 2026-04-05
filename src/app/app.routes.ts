import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./features/home/pages/home/home').then((m) => m.HomePageComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
