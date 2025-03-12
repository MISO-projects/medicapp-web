import { Patient } from '../../models/patient.model';

export const mockPatients: Patient[] = [
  {
    id: 1,
    name: 'Manuel Ramírez',
    age: 68,
    phone: '+57 311 123 4567',
    photo: 'https://storage.googleapis.com/medicapp/manuel.jpg',
  },
  {
    id: 2,
    name: 'Teresa Hernandez',
    age: 82,
    phone: '+57 311 321 4567',
    photo: 'https://storage.googleapis.com/medicapp/teresa.jpg',
  },
  {
    id: 3,
    name: 'Vicente Camargo',
    age: 70,
    phone: '+313 456 7890',
    photo: 'https://storage.googleapis.com/medicapp/vicente.jpg',
  },
];
