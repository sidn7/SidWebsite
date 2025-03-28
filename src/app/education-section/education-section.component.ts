import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.css'
})
export class EducationSectionComponent {

  transform: string = 'translateY(0)';
  opacity: number = 1;

  @HostListener('window:scroll', ['$event'])
onScroll(event: any) {

  const scrollPosition = window.scrollY;

  const fadeStart = window.innerHeight * 0.5;

  if (scrollPosition > fadeStart) {
    this.opacity = Math.max(1 - (scrollPosition - fadeStart) / 2300, 0);
  } else {
    this.opacity = 1;
  }


  const translateYValue = Math.min((scrollPosition - fadeStart) / 3, 1500);
  this.transform = `translateY(-${translateYValue > 0 ? translateYValue : 0}px)`;
}
}
