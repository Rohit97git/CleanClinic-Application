import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentServices } from '../../services/appointmentServices';
import { AppointmentModel } from '../../models/appointmentForm';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {
  appointments: AppointmentModel[] = [];

  constructor(private service: AppointmentServices) {}

  ngOnInit() {
    this.service.appointments$.subscribe((a) => {
      this.appointments = a;
    });
  }

  deleteAppointment(id?: number) {
    if (!id) return;

    this.service.deleteAppointment(id).subscribe();
  }
}
