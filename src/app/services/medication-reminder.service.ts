import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MedicationReminder } from '../models/medication-reminder.model';
import { mockReminders } from './mocks/medication-reminder.mock';

@Injectable({
  providedIn: 'root',
})
export class MedicationReminderService {
  constructor() {}

  getReminders(): Observable<MedicationReminder[]> {
    return of(mockReminders);
  }
}
