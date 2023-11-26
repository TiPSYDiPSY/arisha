import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'night-sky',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './night-sky.component.html',
  styleUrl: './night-sky.component.scss'
})
export class NightSkyComponent {
  private readonly starCount = 150;
  private nightSky: HTMLElement | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit() {
    this.nightSky = this.el.nativeElement.querySelector('.night-sky');
    this.generateStar();
  }

  private generateStar(): void {
    for (let i = 0; i < this.starCount; i++) {
      const star = this.renderer.createElement('div');

      this.renderer.setStyle(star, 'top', `${this.randomPosition()}%`);
      this.renderer.setStyle(star, 'left', `${this.randomPosition()}%`);
      this.renderer.setStyle(star, 'animation-delay', `-${this.randomDelay()}s`);
      this.renderer.addClass(star, 'star');

      this.renderer.appendChild(this.nightSky, star);
    }
  }

  private randomPosition(): number {
    return Math.random() * 100;
  }

  private randomDelay(): number {
    return 4 + Math.random() * 2;
  }
}
