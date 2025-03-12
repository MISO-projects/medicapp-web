import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MedicationReminder } from '../../../models/medication-reminder.model';

@Component({
  selector: 'app-reminder-list-item',
  templateUrl: './reminder-list-item.component.html',
  styleUrls: ['./reminder-list-item.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class ReminderListItemComponent {
  @Input() reminder!: MedicationReminder;

  getStatusIcon(): string {
    switch (this.reminder.status) {
      case 'Tomada':
        return 'check';
      case 'No tomada':
        return 'error';
      case 'Pendiente':
        return 'schedule';
      default:
        return '';
    }
  }

  getMedicationImage(): string {
    return this.reminder.type === 'tablet'
      ? 'https://storage.googleapis.com/medicapp/tablet.png'
      : 'https://storage.googleapis.com/medicapp/capsule.png';
  }
}
