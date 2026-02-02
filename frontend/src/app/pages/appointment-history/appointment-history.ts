import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentServices } from '../../services/appointmentServices';
import { AppointmentModel } from '../../models/appointmentForm';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-appointment-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-history.html',
  styleUrl: './appointment-history.css',
})
export class AppointmentHistory implements OnInit {
  appointments: AppointmentModel[] = [];
  upcoming: AppointmentModel[] = [];
  past: AppointmentModel[] = [];

  constructor(
    private service: AppointmentServices,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    const userEmail = this.auth.getUserEmail();
    this.service.appointments$.subscribe((data) => {
      this.appointments = data.filter((a) => a.userEmail === userEmail);
      this.splitAppointment();
      console.log('appointments updated', data);
    });
  }

  splitAppointment() {
    const today = new Date();

    this.upcoming = this.appointments.filter((a) => {
      const d = new Date(a.appointmentDate);
      d.setHours(0, 0, 0, 0);
      return d >= today;
    });

    this.past = this.appointments.filter((a) => {
      const d = new Date(a.appointmentDate);
      d.setHours(0, 0, 0, 0);
      return d < today;
    });
  }
}
