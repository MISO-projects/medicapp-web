export interface MedicationReminder {
  id: number;
  name: string;
  time: string;
  quantity: string;
  concentration: string;
  type: 'tablet' | 'capsule';
  status: 'tomada' | 'no tomada' | 'pendiente';
}
