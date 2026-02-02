import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wildcard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wildcard.html',
  styleUrl: './wildcard.css',
})
export class Wildcard {}
