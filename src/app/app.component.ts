import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NightSkyComponent } from './night-sky/night-sky.component';
import { LandingMessageComponent } from './landing-message/landing-message.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NightSkyComponent, LandingMessageComponent, DialogMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ari6a';
}
