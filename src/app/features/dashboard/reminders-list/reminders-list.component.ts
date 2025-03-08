import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderListItemComponent } from '../reminder-list-item/reminder-list-item.component';
import { MedicationReminder } from '../../../models/medication-reminder.model';
import { MedicationReminderService } from '../../../services/medication-reminder.service';
import { Patient } from '../../../models/patient.model';

@Component({
  selector: 'app-reminders-list',
  templateUrl: './reminders-list.component.html',
  styleUrls: ['./reminders-list.component.scss'],
  standalone: true,
  imports: [CommonModule, ReminderListItemComponent],
})
export class RemindersListComponent implements OnInit, OnChanges {
  @Input() selectedPatient: Patient | null = null;
  
  reminders: MedicationReminder[] = [];

  constructor(private medicationRemindersService: MedicationReminderService) {}

  ngOnInit(): void {
    this.loadReminders();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPatient']) {
      this.loadReminders();
    }
  }

  loadReminders(): void {
    const patientId = this.selectedPatient?.id;
    
    this.medicationRemindersService.getReminders(patientId).subscribe(
      (reminders) => {
        this.reminders = reminders;
      },
      (error) => {
        console.error('Error fetching reminders:', error);
      }
    );
  }
}
