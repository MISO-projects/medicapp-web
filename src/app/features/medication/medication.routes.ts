import { Routes } from '@angular/router';
import { MedicationComponent } from './medication.component';

const medicationRoutes: Routes = [
  {
    path: '',
    component: MedicationComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./medication-home/medication-home.component').then(
            (m) => m.MedicationHomeComponent
          ),
      },
      {
        path: 'agregar',
        loadComponent: () =>
          import('./medication-form/medication-form.component').then(
            (m) => m.MedicationFormComponent
          ),
      },
    ],
  },
];

export default medicationRoutes;
