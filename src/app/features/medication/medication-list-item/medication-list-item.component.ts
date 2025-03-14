import { Component, Input } from '@angular/core';
import { MedicationReminder } from '../../../models/medication-reminder.model';
import { MedicationReminderService } from '../../../services/medication-reminder.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-medication-list-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './medication-list-item.component.html',
  styleUrl: './medication-list-item.component.scss',
})
export class MedicationListItemComponent {
  @Input() medication!: MedicationReminder;

  constructor(
    private readonly medicationReminderService: MedicationReminderService,
    private readonly dialogService: DialogService
  ) {}

  getMedicationImage(): string {
    return this.medicationReminderService.getMedicationImage(this.medication);
  }

  onDeleteMedication(): void {
    this.dialogService
      .openConfirmationDialog({
        title: `Eliminar medicamento "${this.medication.name}"`,
        message: 'Al eliminar el medicamento, se eliminarán todos los recordatorios relacionados.',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          console.log('Medication deleted:', this.medication);
        }
      });
  }

  onEditMedication(): void {
    console.log('Edit medication:', this.medication);
  }
}
