import { Component } from '@angular/core';
import { Patient } from '../../../models/patient.model';
import { PatientService } from '../../../services/patient.service';
import { CommonModule } from '@angular/common';
import { PatientsListItemComponent } from '../patients-list-item/patients-list-item.component';

@Component({
  selector: 'app-patients-list',
  standalone: true,
  imports: [CommonModule, PatientsListItemComponent],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.scss',
})
export class PatientsListComponent {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe(
      (patients) => {
        this.patients = patients;
      },
      (error) => {
        console.error('Error fetching patients:', error);
      }
    );
  }
}
