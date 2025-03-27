import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollThreshold = 150;
    this.isScrolled = window.scrollY > scrollThreshold;
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: MouseEvent): void {
    const clickedInside = this.isClickInsideMenu(event);
    if (!clickedInside && this.menuOpen) {
      this.toggleMenu(); // Close the menu if clicked outside
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    const nav = document.querySelector('.nav');
    if (nav) {
      nav.classList.toggle('active', this.menuOpen);
    }
  }

  adjustBarScroll(section: string, event: Event): void {
    event.preventDefault();
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });

    if (this.menuOpen) {
      this.toggleMenu(); // Close the menu
    }
  }

  adjustScroll(sectionId: string, event: Event): void {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -195;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  private isClickInsideMenu(event: MouseEvent): boolean {
    const headerElement = document.querySelector('.header');
    return headerElement ? headerElement.contains(event.target as Node) : false;
  }
}
