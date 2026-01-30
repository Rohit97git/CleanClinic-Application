export interface AppointmentModel {
  id?: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  service: string;
  appointedDate: string;
  notes?: string;
}
