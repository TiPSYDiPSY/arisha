import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'landing-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-message.component.html',
  styleUrl: './landing-message.component.scss'
})
export class LandingMessageComponent implements OnInit, OnDestroy {
  elapsedTime: string = '';
  interval: any;
  startDate!: Date;

  ngOnInit() {
    this.startDate = new Date("2022-11-05T00:00:00");
    this.updateElapsedTime();
    this.interval = setInterval(() => {
      this.updateElapsedTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  updateElapsedTime() {
    const currentDate = new Date();
    const deltaTime = currentDate.getTime() - this.startDate.getTime();

    const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((deltaTime % (1000 * 60)) / 1000);

    this.elapsedTime = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }
}

