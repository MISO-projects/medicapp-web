import { Component } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from '../../components/app-bar/app-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PatientsListComponent } from './patients-list/patients-list.component';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
    AppBarComponent,
    MatIconModule,
    MatButtonModule,
    PatientsListComponent,
  ],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent {
  title = 'medicapp-web';
  selectedPatient: any = null;

  onPatientSelected(patient: any): void {
    this.selectedPatient = patient;
  }

  onAddPatient(): void {
    console.log('Add Patient button clicked');
  }
}
