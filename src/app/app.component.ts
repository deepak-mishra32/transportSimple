import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

export interface Trip {
  start: string;
  end: string;
  level: number; // 1 or 2
  type: 'continued' | 'non-continued' | 'repeat';
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'transportSimple';

  startTrip: string | undefined = '';
  endTrip: string | undefined = '';

  trips: Trip[] = [
    // { start: 'Bangalore', end: 'Chennai', level: 1, type: 'continued' },
    // { start: 'Chennai', end: 'Ooty', level: 1, type: 'continued' },
    // { start: 'Bangalore', end: 'Chennai', level: 2, type: 'non-continued' },
    // { start: 'Ooty', end: 'Bangalore', level: 2, type: 'non-continued' },
    // { start: 'Bangalore', end: 'Delhi', level: 1, type: 'continued' },
    // { start: 'Delhi', end: 'Hyderabad', level: 1, type: 'continued' },
    // { start: 'Delhi', end: 'Hyderabad', level: 1, type: 'repeat' },
  ];

  resetTrip() {
    this.startTrip = '';
    this.endTrip = '';
  }

  checkTripLevel() {
    let newTrip: Trip = {
      start: this.startTrip || '',
      end: this.endTrip || '',
      level: 1,
      type: 'continued',
    };
    let previousTrip = this.trips[this.trips.length - 1];
    if (
      previousTrip.start?.toLowerCase().trim() ===
        this.startTrip?.toLowerCase().trim() &&
      previousTrip.end?.toLowerCase().trim() ===
        this.endTrip?.toLowerCase().trim()
    ) {
      newTrip.level = previousTrip.level;
      newTrip.type = 'repeat';
    } else if (
      previousTrip.end?.toLowerCase().trim() ===
      this.endTrip?.toLowerCase().trim()
    ) {
      newTrip.level = 1;
      previousTrip.type = 'continued';
    } else if (
      previousTrip.end?.toLowerCase().trim() !==
      this.startTrip?.toLowerCase().trim()
    ) {
      newTrip.level = 2;
      newTrip.type = 'non-continued';
    }
    this.trips.push(newTrip);
  }

  addTrip() {
    if (this.trips.length === 0) {
      this.trips.push({
        start: this.startTrip || '',
        end: this.endTrip || '',
        level: 1,
        type: 'continued',
      });
    } else {
      this.checkTripLevel();
    }
    this.resetTrip();
    console.log(this.trips);
  }
}
