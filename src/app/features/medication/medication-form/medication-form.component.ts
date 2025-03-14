import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-medication-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.scss'],
})
export class MedicationFormComponent implements OnInit {
  medicationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.medicationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      reason: ['', Validators.required],
      presentation: ['', Validators.required],
      frequency: ['', Validators.required],
      startDate: ['', Validators.required],
    });
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    if (this.medicationForm.invalid) {
      this.medicationForm.markAllAsTouched();
      return;
    }

    this.goBack();
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.medicationForm.get(controlName);
    return !!(control && control.touched && control.hasError(errorName));
  }
}
