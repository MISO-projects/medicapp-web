import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from '../models/patient.model';
import { mockPatients } from './mocks/patient.mock';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor() {}

  getPatients(): Observable<Patient[]> {
    return of(mockPatients);
  }
}
