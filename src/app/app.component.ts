import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RemindersListComponent } from './features/dashboard/reminders-list/reminders-list.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { Patient } from './models/patient.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    SidenavComponent, 
    RemindersListComponent, 
    AppBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'medicapp-web';
  selectedPatient: Patient | null = null;
  
  onPatientSelected(patient: Patient): void {
    this.selectedPatient = patient;
    console.log('Selected patient:', patient);
  }
}
