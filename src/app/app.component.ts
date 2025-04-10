import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { InitialsPipe } from './components/pipes/initials.pipe';

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
    InitialsPipe,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'transportSimple';

  startTrip: string | undefined = '';
  endTrip: string | undefined = '';

  trips: Trip[] = [
    {
      start: 'Mumbai',
      end: 'Bangalore',
      level: 1,
      type: 'continued',
    },
    {
      start: 'Bangalore',
      end: 'Raigad',
      level: 1,
      type: 'continued',
    },
    {
      start: 'Bangalore',
      end: 'Pune',
      level: 1,
      type: 'non-continued',
    },
    {
      start: 'Goa',
      end: 'Mumbai',
      level: 1,
      type: 'non-continued',
    },
    {
      start: 'mumbai',
      end: 'chennai',
      level: 1,
      type: 'continued',
    },
    {
      start: 'mumbai',
      end: 'chennai',
      level: 2,
      type: 'repeat',
    },
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
      newTrip.level = 2;
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
      newTrip.level = 1;
      newTrip.type = 'non-continued';
    }
    this.trips.push(newTrip);
  }

  addTrip() {
    if (!this.startTrip || !this.endTrip) {
      alert('Please fill in both start and end locations.');
      return;
    }
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
    console.log(this.trips);

    this.resetTrip();
  }
}
