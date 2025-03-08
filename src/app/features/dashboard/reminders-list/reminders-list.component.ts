import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderListItemComponent } from '../reminder-list-item/reminder-list-item.component';
import { MedicationReminder } from '../../../models/medication-reminder.model';

@Component({
  selector: 'app-reminders-list',
  templateUrl: './reminders-list.component.html',
  styleUrls: ['./reminders-list.component.scss'],
  standalone: true,
  imports: [CommonModule, ReminderListItemComponent],
})
export class RemindersListComponent implements OnInit {
  reminders: MedicationReminder[] = [];

  ngOnInit(): void {
    this.reminders = [
      {
        id: 1,
        name: 'Acetaminofén',
        time: '8:00 AM',
        quantity: '1 tableta',
        concentration: '500 mg',
        type: 'tablet',
        status: 'tomada',
      },
      {
        id: 2,
        name: 'Amoxicilina',
        time: '12:00 PM',
        quantity: '1 cápsula',
        concentration: '250 mg',
        type: 'capsule',
        status: 'pendiente',
      },
      {
        id: 3,
        name: 'Ibuprofeno',
        time: '6:00 PM',
        quantity: '2 tabletas',
        concentration: '200 mg',
        type: 'tablet',
        status: 'no tomada',
      },
    ];
  }
}
