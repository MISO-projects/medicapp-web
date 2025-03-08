import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppBarComponent } from '../../../components/app-bar/app-bar.component';
import { SidenavComponent } from '../../../components/sidenav/sidenav.component';
import { Patient } from '../../../models/patient.model';
import { RemindersListComponent } from '../reminders-list/reminders-list.component';
import { PatientInfoComponent } from '../../../components/patient-info/patient-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
    RemindersListComponent,
    AppBarComponent,
    PatientInfoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'medicapp-web';
  selectedPatient: Patient | null = null;

  onPatientSelected(patient: Patient): void {
    this.selectedPatient = patient;
  }
}
