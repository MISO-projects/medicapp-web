import { Component, Input } from '@angular/core';
import { Patient } from '../../models/patient.model';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-info',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
  templateUrl: './patient-info.component.html',
  styleUrl: './patient-info.component.scss',
})
export class PatientInfoComponent {
  @Input() selectedPatient: Patient | null = null;

  constructor(private snackBar: MatSnackBar) {}

  onSyncPatient(): void {
    if (!this.selectedPatient) return;

    this.snackBar.open(
      `Sincronización exitosa con la aplicación de ${this.selectedPatient.name}`,
      'OK',
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['success-snackbar'],
      }
    );
  }
}
