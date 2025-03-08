import { Routes } from '@angular/router';

const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
];

export default dashboardRoutes;
