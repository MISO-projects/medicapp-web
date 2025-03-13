import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { AppBarComponent } from '../../components/app-bar/app-bar.component';
import { Patient } from '../../models/patient.model';
import { PatientInfoComponent } from '../../components/patient-info/patient-info.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-medication',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidenavComponent,
    AppBarComponent,
    PatientInfoComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.scss'],
})
export class MedicationComponent {
  title = 'medicapp-web';
  selectedPatient: Patient | null = null;

  constructor(public router: Router, private patientService: PatientService) {}

  onPatientSelected(patient: Patient): void {
    this.selectedPatient = patient;
    this.patientService.setSelectedPatient(patient);
  }
}
