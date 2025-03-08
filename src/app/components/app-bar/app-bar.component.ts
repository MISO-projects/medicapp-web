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

  constructor() {}

  ngOnInit(): void {
    this.patients = [
      { id: 1, name: 'Manuel Ramírez', age: 68, phone: '+57 311 123 4567' },
      { id: 2, name: 'Teresa Hernandez', age: 82, phone: '+57 311 321 4567' },
      { id: 3, name: 'Vicente Camargo', age: 70, phone: '+313 456 7890' },
    ];

    if (this.patients.length > 0) {
      this.selectedPatient = this.patients[0];
      this.patientSelected.emit(this.selectedPatient);
    }
  }

  onPatientSelected(patient: Patient): void {
    this.selectedPatient = patient;
    this.patientSelected.emit(patient);
  }

  logout(): void {
    console.log('Logout clicked');
  }
}
