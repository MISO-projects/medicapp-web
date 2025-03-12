import { Routes } from '@angular/router';

const medicationRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./medication.component').then((m) => m.MedicationComponent),
  },
];

export default medicationRoutes;
