import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  opacity: number = 1;
  transform: string = 'translateY(0)';

  opacityImage: number = 1;
  transformImage: string = 'translateY(0)';
  backgroundOpacity: number = 1;
  imageUrl: string = '../../assets/software2.jpg';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {

    const scrollPosition = window.scrollY;


    this.opacity = Math.max(1 - scrollPosition / 300, 0);

    this.backgroundOpacity = Math.max(1 - scrollPosition / 300, 0);

    // Move the text vertically based on scroll position
    const translateYValue = Math.min(scrollPosition / 3, 100);
    this.transform = `translateY(-${translateYValue}px)`;
  }

}
