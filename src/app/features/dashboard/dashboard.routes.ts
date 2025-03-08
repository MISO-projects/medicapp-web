import { Routes } from '@angular/router';

const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./reminders-list/reminders-list.component').then(
        (m) => m.RemindersListComponent
      ),
  },
];

export default dashboardRoutes;
