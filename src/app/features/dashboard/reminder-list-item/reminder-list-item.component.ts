import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MedicationReminder } from '../../../models/medication-reminder.model';
import { MedicationReminderService } from '../../../services/medication-reminder.service';

@Component({
  selector: 'app-reminder-list-item',
  templateUrl: './reminder-list-item.component.html',
  styleUrls: ['./reminder-list-item.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class ReminderListItemComponent {
  @Input() reminder!: MedicationReminder;

  constructor(
    private readonly medicationReminderService: MedicationReminderService
  ) {}

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

  getStatusColor(): string {
    switch (this.reminder.status) {
      case 'Tomada':
        return 'var(--sys-primary-container, #baecca)';
      case 'No tomada':
        return 'var(--sys-error-container, #ffdad6)';
      case 'Pendiente':
        return 'var(--sys-tertiary-container, #ffedcb)';
      default:
        return 'transparent';
    }
  }

  getMedicationImage(): string {
    return this.medicationReminderService.getMedicationImage(this.reminder);
  }
}
