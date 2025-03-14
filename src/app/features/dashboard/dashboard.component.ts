import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppBarComponent } from '../../components/app-bar/app-bar.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { Patient } from '../../models/patient.model';
import { RemindersListComponent } from './reminders-list/reminders-list.component';
import { PatientInfoComponent } from '../../components/patient-info/patient-info.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
    RemindersListComponent,
    AppBarComponent,
    PatientInfoComponent,
    MatIconModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  title = 'medicapp-web';
  selectedPatient: Patient | null = null;

  onPatientSelected(patient: Patient): void {
    this.selectedPatient = patient;
  }
}
