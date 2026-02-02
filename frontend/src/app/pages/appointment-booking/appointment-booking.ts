import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { AppointmentServices } from '../../services/appointmentServices';
import { noFutureDate } from '../../validators/date-validator';
import { AppointmentModel } from '../../models/appointmentForm';
import { CommonModule } from '@angular/common';
import { serverRoutes } from '../../app.routes.server';

import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-appointment-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment-booking.html',
  styleUrl: './appointment-booking.css',
})
export class AppointmentBooking implements OnInit {
  form!: FormGroup;
  operation = '';
  apppointments: AppointmentModel[] = [];
  successMsg = '';

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentServices,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      service: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      notes: [''],
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const email = this.auth.getUserEmail();

    const appointment: AppointmentModel = {
      ...this.form.value,
      userEmail: email,
    };

    this.appointmentService.addAppointment(appointment).subscribe(() => {
      this.successMsg = 'Appointment Booked Successfully!';
      this.form.reset();
    });
  }
}
