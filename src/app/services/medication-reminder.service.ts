import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MedicationReminder } from '../models/medication-reminder.model';
import { mockReminders } from './mocks/medication-reminder.mock';

@Injectable({
  providedIn: 'root',
})
export class MedicationReminderService {
  constructor() {}

  getReminders(patientId?: number): Observable<MedicationReminder[]> {
    if (patientId) {
      const filteredReminders = mockReminders.filter(
        (reminder) => reminder.patientId === patientId
      );
      return of(filteredReminders);
    }
    return of([]);
  }
}
