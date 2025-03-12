import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { AppBarComponent } from '../../components/app-bar/app-bar.component';
import { Patient } from '../../models/patient.model';
import { PatientInfoComponent } from '../../components/patient-info/patient-info.component';
import { MedicationListComponent } from './medication-list/medication-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-medication',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
    AppBarComponent,
    PatientInfoComponent,
    MedicationListComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './medication.component.html',
  styleUrl: './medication.component.scss',
})
export class MedicationComponent {
  title = 'medicapp-web';
  selectedPatient: Patient | null = null;

  onPatientSelected(patient: Patient): void {
    this.selectedPatient = patient;
  }

  onAddMedication(): void {
    console.log('Add Medication button clicked');
  }
}
