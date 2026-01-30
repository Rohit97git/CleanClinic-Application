import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentServices } from '../../services/appointmentServices';
import { noFutureDate } from '../../validators/date-validator';
import { AppointmentModel } from '../../models/appointmentForm';
import { CommonModule } from '@angular/common';
import { serverRoutes } from '../../app.routes.server';

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
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
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

    const appointment: AppointmentModel = this.form.value;

    this.appointmentService.addAppointment(appointment).subscribe(() => {
      this.successMsg = 'Appointment Booked Successfully!';
      this.form.reset();
    });
  }
}
