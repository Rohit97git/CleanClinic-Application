export interface AppointmentModel {
  id?: number;
  fullName: string;
  userEmail: string;
  email: string;
  phoneNumber: string;
  service: string;
  doctor?: string;
  appointmentDate: string;
  appointmentTime?: string;
  notes?: string;
}
