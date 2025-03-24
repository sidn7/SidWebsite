import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contact = {
    name: '',
    email: '',
    message: ''
  };

  responseMessage: string = '';


  transform: string = 'translateY(0)';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    //this.opacity = Math.max(1 - scrollPosition / 2400, 0);

    const translateYValue = Math.min(scrollPosition / 3, 2500);  // Max 100px movement
    this.transform = `translateY(-${translateYValue}px)`; // Move up as you scroll
  }

  onSubmit() {
    const templateParams = {
      name: this.contact.name,
      email: this.contact.email,
      message: this.contact.message
    };

    emailjs.send('service_sfmawnf', 'template_d6qtpdb', templateParams,'wHnvrSZikrJT977Za')
      .then((response) => {
        console.log('Email sent successfully:', response);
        this.responseMessage = 'Your message was sent successfully! Thank you for reaching out!';
        this.clearForm()
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        this.responseMessage = 'Oops! Something went wrong. Please try again later.';
      });
  }

  clearForm() {
    // Clear the form fields after successful submission
    this.contact.name = '';
    this.contact.email = '';
    this.contact.message = '';
  }

}
