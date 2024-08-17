import { Component } from '@angular/core';
import {faCode ,faMobileScreen , faUsers} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-portfilio-about-me',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './portfilio-about-me.component.html',
  styleUrl: './portfilio-about-me.component.scss'
})
export class PortfilioAboutMeComponent {
  faCode = faCode
  faMobileScreen = faMobileScreen
  faUsers = faUsers
}
