import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {
  services = ['Primary Care', 'Diagnostics', 'Specialist Consultation'];
  form!: FormGroup;
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      role: ['patient', Validators.required],
    });
  }

  login() {
    console.log('login form value:', this.form.value);
    if (this.form.invalid) return;

    const { email, role } = this.form.value;

    this.auth.login(email, role);

    console.log('stored email:', localStorage.getItem('userEmail'));

    if (role === 'admin') {
      this.router.navigateByUrl('/admin/appointments');
    } else {
      this.router.navigateByUrl('/historydata');
    }
  }
}
