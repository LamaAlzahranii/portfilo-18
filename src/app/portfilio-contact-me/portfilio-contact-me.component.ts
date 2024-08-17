import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@Component({
  selector: 'app-portfilio-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './portfilio-contact-me.component.html',
  styleUrl: './portfilio-contact-me.component.scss'
})
export class PortfilioContactMeComponent  {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Handle form submission (e.g., send email)
      const formData = this.contactForm.value;
      console.log('Form submitted:', formData);

      // Here you would call a service to send the email
      // For example, using HttpClient to post data to a backend server

      // Reset the form after successful submission
      this.contactForm.reset();
    } else {
      // Form is invalid
      console.error('Form invalid. Please check all fields.');
    }
  }
}
