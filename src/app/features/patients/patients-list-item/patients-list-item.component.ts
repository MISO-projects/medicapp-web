import { Component, Input } from '@angular/core';
import { Patient } from '../../../models/patient.model';
import { PatientService } from '../../../services/patient.service';
import { DialogService } from '../../../services/dialog.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-patients-list-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './patients-list-item.component.html',
  styleUrl: './patients-list-item.component.scss',
})
export class PatientsListItemComponent {
  @Input() patient!: Patient;

  constructor(
    private readonly dialogService: DialogService
  ) {}

  onDeletePatient(): void {
    this.dialogService
      .openConfirmationDialog({
        title: `Eliminar paciente "${this.patient.name}"`,
        message:
          'Al eliminar el paciente, se eliminarán todos los medicamentos y recordatorios relacionados.',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          console.log('Patient deleted:', this.patient);
        }
      });
  }

  onEditPatient(): void {
    console.log('Edit patient:', this.patient);
  }
}
