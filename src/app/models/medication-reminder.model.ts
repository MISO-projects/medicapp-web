export interface MedicationReminder {
  id: number;
  name: string;
  time: string;
  quantity: string;
  concentration: string;
  type: 'tablet' | 'capsule';
  status: 'Tomada' | 'No tomada' | 'Pendiente';
  patientId: number;
}
