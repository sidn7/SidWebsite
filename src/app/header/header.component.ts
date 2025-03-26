import { Component,HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() : void{
    const scrollThreshold = 150;
    this.isScrolled = window.scrollY > scrollThreshold;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const nav = document.querySelector('.nav');
    if (nav) {
      nav.classList.toggle('active', this.menuOpen);
    }
  }

  adjustScroll(sectionId: string, event: Event) {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -195;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
