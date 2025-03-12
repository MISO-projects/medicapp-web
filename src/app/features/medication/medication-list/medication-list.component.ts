import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MedicationReminderService } from '../../../services/medication-reminder.service';
import { MedicationReminder } from '../../../models/medication-reminder.model';
import { CommonModule } from '@angular/common';
import { MedicationListItemComponent } from '../medication-list-item/medication-list-item.component';

@Component({
  selector: 'app-medication-list',
  standalone: true,
  imports: [CommonModule, MedicationListItemComponent],
  templateUrl: './medication-list.component.html',
  styleUrl: './medication-list.component.scss',
})
export class MedicationListComponent implements OnInit, OnChanges {
  @Input() selectedPatient: any = null;
  medications: MedicationReminder[] = [];

  constructor(private medicationRemindersService: MedicationReminderService) {}

  ngOnInit(): void {
    this.loadMedications();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPatient']) {
      this.loadMedications();
    }
  }

  loadMedications(): void {
    const patientId = this.selectedPatient?.id;

    this.medicationRemindersService.getReminders(patientId).subscribe(
      (medications) => {
        this.medications = medications;
      },
      (error) => {
        console.error('Error fetching medications:', error);
      }
    );
  }
}
