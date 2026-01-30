import { Routes } from '@angular/router';

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
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },

  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
