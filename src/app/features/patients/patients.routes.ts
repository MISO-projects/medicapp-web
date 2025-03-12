import { Routes } from '@angular/router';

const patientsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./patients.component').then((m) => m.PatientsComponent),
  },
];

export default patientsRoutes;
