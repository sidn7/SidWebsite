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
  imageUrl: string = '../../assets/software2.jpg'; // Update with the actual image path

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Set the opacity to decrease as you scroll (maximum fade at 300px scroll)
    this.opacity = Math.max(1 - scrollPosition / 300, 0);

    this.backgroundOpacity = Math.max(1 - scrollPosition / 300, 0); // Background fades more slowly

    // Move the text vertically based on scroll position
    const translateYValue = Math.min(scrollPosition / 3, 100);  // Max 100px movement
    this.transform = `translateY(-${translateYValue}px)`; // Move up as you scroll
  }

}
