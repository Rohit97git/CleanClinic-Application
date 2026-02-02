import { Routes } from '@angular/router';
import { authGuardGuard } from './guards/auth-guard-guard';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing-page/landing-page').then((m) => m.LandingPage),
  },

  {
    path: 'appointment',
    loadComponent: () =>
      import('./pages/appointment-booking/appointment-booking').then((m) => m.AppointmentBooking),
  },

  {
    path: 'historydata',
    canActivate: [authGuardGuard],
    loadComponent: () =>
      import('./pages/appointment-history/appointment-history').then((m) => m.AppointmentHistory),
  },

  {
    path: 'admin/appointments',
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./pages/admin-dashboard/admin-dashboard').then((m) => m.AdminDashboard),
  },

  {
    path: '**',
    loadComponent: () => import('./pages/wildcard/wildcard').then((m) => m.Wildcard),
    redirectTo: '',
  },
];
