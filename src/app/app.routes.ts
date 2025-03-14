import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes'),
  },
  {
    path: 'medicamentos',
    loadChildren: () => import('./features/medication/medication.routes'),
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./features/patients/patients.routes'),
  },
];
