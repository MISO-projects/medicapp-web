import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MedicationListComponent } from '../medication-list/medication-list.component';
import { Patient } from '../../../models/patient.model';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-medication-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MedicationListComponent,
  ],
  template: `
    <div class="medication-header">
      <h5>Medicamentos agregados</h5>
      <mat-icon>arrow_forward</mat-icon>
      <button mat-flat-button color="primary" (click)="onAddMedication()">
        <mat-icon>add</mat-icon>
        Agregar
      </button>
    </div>

    <app-medication-list
      [selectedPatient]="selectedPatient"
    ></app-medication-list>
  `,
  styleUrls: ['./medication-home.component.scss'],
})
export class MedicationHomeComponent implements OnInit {
  selectedPatient: Patient | null = null;

  constructor(private router: Router, private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.selectedPatient$.subscribe((patient) => {
      this.selectedPatient = patient;
    });
  }

  onAddMedication(): void {
    this.router.navigate(['/medicamentos/agregar']);
  }
}
