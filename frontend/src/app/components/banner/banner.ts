import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner.html',
  styleUrls: ['./banner.css']
})
export class Banner implements OnInit, OnDestroy {
  slides = [
    { id: 1, title: 'Destaque 1', link: '/promo-1' },
    { id: 2, title: 'Destaque 2', link: '/promo-2' },
    { id: 3, title: 'Destaque 3', link: '/promo-3' },
    { id: 4, title: 'Destaque 4', link: '/promo-4' }
  ];

  currentIndex = 0;
  private timer: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.stopAutoPlay(); 
    this.timer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000);
  }

  stopAutoPlay(): void {
    if (this.timer) clearInterval(this.timer);
  }
}