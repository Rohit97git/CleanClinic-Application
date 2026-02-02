import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);

  private get storage(): Storage | null {
    return isPlatformBrowser(this.platformId) ? localStorage : null;
  }

  login(email: string, role: string) {
    if (!email) return;
    this.storage?.setItem('userRole', role);
    this.storage?.setItem('userEmail', email);
  }

  logout() {
    this.storage?.clear();
  }

  isLoggedIn(): boolean {
    return !!this.storage?.getItem('userRole');
  }

  isAdmin(): boolean {
    return this.storage?.getItem('userRole') === 'admin';
  }
  getUserEmail(): string | null {
    return this.storage?.getItem('userEmail') ?? null;
  }
}
