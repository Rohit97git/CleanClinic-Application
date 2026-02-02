import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AppointmentModel } from '../models/appointmentForm';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentServices {
  private baseUrl = 'http://localhost:3000';

  private appointmentSubject = new BehaviorSubject<AppointmentModel[]>([]);
  appointments$ = this.appointmentSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadAppointments();
  }

  loadAppointments() {
    this.http
      .get<AppointmentModel[]>(`${this.baseUrl}/appointments`)
      .subscribe((appointments) => this.appointmentSubject.next(appointments));
  }

  addAppointment(data: AppointmentModel) {
    return this.http
      .post<AppointmentModel>(`${this.baseUrl}/appointments`, data)
      .pipe(tap(() => this.loadAppointments()));
  }

  deleteAppointment(id?: number) {
    return this.http
      .delete(`${this.baseUrl}/appointments/${id}`)
      .pipe(tap(() => this.loadAppointments()));
  }
}
