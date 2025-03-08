import { Component, Input } from '@angular/core';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-patient-info',
  standalone: true,
  imports: [],
  templateUrl: './patient-info.component.html',
  styleUrl: './patient-info.component.scss',
})
export class PatientInfoComponent {
  @Input() selectedPatient: Patient | null = null;

  onSyncPatient(): void {
    console.debug('Syncing patient data...');
  }
}
