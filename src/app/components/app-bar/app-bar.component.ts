import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class AppBarComponent implements OnInit {
  patients: Patient[] = [];
  selectedPatient: Patient | null = null;

  @Output() patientSelected = new EventEmitter<Patient>();

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }
  
  loadPatients(): void {
    this.patientService.getPatients().subscribe(
      (patients) => {
        this.patients = patients;
        if (this.patients.length > 0) {
          this.selectedPatient = this.patients[0];
          this.patientSelected.emit(this.selectedPatient);
        }
      },
      (error) => {
        console.error('Error fetching patients:', error);
      }
    );
  }

  onPatientSelected(patient: Patient): void {
    this.selectedPatient = patient;
    this.patientSelected.emit(patient);
  }

  logout(): void {
    console.log('Logout clicked');
  }
}
