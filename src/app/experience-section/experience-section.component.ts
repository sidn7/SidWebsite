import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css'
})
export class ExperienceSectionComponent {
  workExperience = [
    {
      date: 'March 2026 - Present',
      location: 'Toronto, Canada',
      title: 'Lead Software Developer',
      company: 'Royal Bank of Canada',
      description: 'Leading architecture and development of scalable enterprise platforms, driving technical strategy and mentoring engineering teams. Implementing agentic AI solutions using LangChain, LangGraph, AutoGen, and Model Context Protocol (MCP) to build intelligent, autonomous systems. Owning end-to-end delivery, collaborating with stakeholders, and ensuring high-quality, scalable solutions aligned with business goals.'
    },
    {
      date: 'October 2022 - February 2026',
      location: 'Toronto, Canada',
      title: 'Senior Software Developer',
      company: 'Royal Bank of Canada',
      description: 'Developed and maintained Java-based applications using Spring Boot. Designed and optimized microservices architecture, and built RESTful APIs, SOAP services, and GraphQL endpoints. Focused on backend systems including database integration, security, and performance optimization in enterprise environments.'
    },
    {
      date: 'January 2021 - September 2022',
      location: 'Halifax, Canada',
      title: 'IT Developer',
      company: 'Canada Revenue Agency',
      description: 'Worked on Java and Struts 2-based web applications using JSP, Servlets, and MVC architecture. Focused on backend processing, request handling, and integrating dynamic components to improve performance and reliability.'
    },
    {
      date: 'June 2017 - June 2019',
      location: 'Hyderabad, India',
      title: 'Systems Engineer',
      company: 'Infosys Limited',
      description: 'Developed web applications using AngularJS and JavaScript, creating responsive and interactive user interfaces. Conducted performance analysis to identify bottlenecks and improve application speed and reliability.'
    }
  ];

  transform: string = 'translateY(0)';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPosition = window.scrollY;
    const translateYValue = Math.min(scrollPosition / 3, 8000);
    this.transform = `translateY(-${translateYValue}px)`;
  }
}