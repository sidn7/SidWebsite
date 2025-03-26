import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css'
})
export class ExperienceSectionComponent {
  workExperience = [
    {
      date: 'October 2022 - Present',
      location: 'Toronto, Canada',
      title: 'Senior Software Developer',
      company: 'Royal Bank of Canada',
      description: 'Experienced in developing and maintaining Java-based applications using Spring Boot. Skilled in building and optimizing microservices architecture, with expertise in RESTful APIs, SOAP web services, and GraphQL. Strong knowledge of backend development, including database integration, security, and performance optimization'
    },
    {
      date: 'January 2021 - September 2022',
      location: 'Halifax, Canada',
      title: 'IT Developer',
      company: 'Canada Revenue Agency',
      description: 'Worked on Java and Struts 2-based web applications, implementing JSP, Servlets, and MVC architecture to enhance functionality and user experience. Focused on backend processing, request handling, and integrating dynamic web components for seamless application performance.'
    },
    {
      date: 'June 2017 - June 2019',
      location: 'Hyderabad, India',
      title: 'Systems Engineer ',
      company: 'Infosys Limited',
      description: 'Involved in developing a web application with AngularJS and JavaScript, ensuring responsive and interactive user interfaces. Also performed performance analytics to identify inefficiencies and enhance application speed and reliability.'
    }
  ];

  transform: string = 'translateY(0)';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    //this.opacity = Math.max(1 - scrollPosition / 2400, 0);

    const translateYValue = Math.min(scrollPosition / 3, 8000);  // Max 100px movement
    this.transform = `translateY(-${translateYValue}px)`; // Move up as you scroll
  }


}
