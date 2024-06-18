import { Component } from '@angular/core';

@Component({
  selector: 'app-portfilio-header',
  standalone: true,
  imports: [],
  templateUrl: './portfilio-header.component.html',
  styleUrl: './portfilio-header.component.scss'
})
export class PortfilioHeaderComponent {
  copied = false;
  textToCopy: string = 'lamaahmed.alzahrani@gmail.com';

  copyText() {
    navigator.clipboard.writeText(this.textToCopy)
      .then(() => {
        this.copied = true;
        setTimeout(() => { this.copied = false; }, 3000); 
      })
      .catch(err => console.error('Failed to copy: ', err));
  }
}
