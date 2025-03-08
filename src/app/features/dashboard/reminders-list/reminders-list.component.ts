import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderListItemComponent } from '../reminder-list-item/reminder-list-item.component';
import { MedicationReminder } from '../../../models/medication-reminder.model';
import { MedicationReminderService } from '../../../services/medication-reminder.service';

@Component({
  selector: 'app-reminders-list',
  templateUrl: './reminders-list.component.html',
  styleUrls: ['./reminders-list.component.scss'],
  standalone: true,
  imports: [CommonModule, ReminderListItemComponent],
})
export class RemindersListComponent implements OnInit {
  reminders: MedicationReminder[] = [];

  constructor(private medicationRemindersService: MedicationReminderService) {}

  ngOnInit(): void {
    this.loadReminders();
  }

  loadReminders(): void {
    this.medicationRemindersService.getReminders().subscribe(
      (reminders) => {
        this.reminders = reminders;
      },
      (error) => {
        console.error('Error fetching reminders:', error);
      }
    );
  }
}
