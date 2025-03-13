import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Patient } from '../models/patient.model';
import { mockPatients } from './mocks/patient.mock';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private selectedPatientSource = new BehaviorSubject<Patient | null>(null);
  selectedPatient$ = this.selectedPatientSource.asObservable();
  constructor() {}

  setSelectedPatient(patient: Patient | null): void {
    this.selectedPatientSource.next(patient);
  }

  getPatients(): Observable<Patient[]> {
    return of(mockPatients);
  }
}
