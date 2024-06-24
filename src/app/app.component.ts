import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfilioHeaderComponent } from "./portfilio-header/portfilio-header.component";
import { PortfilioHomePageComponent } from "./portfilio-home-page/portfilio-home-page.component";
import { PortfilioSliderComponent } from "./portfilio-slider/portfilio-slider.component";
import { PortfilioAboutMeComponent } from "./portfilio-about-me/portfilio-about-me.component";
import { PortfilioProjectsComponent } from "./portfilio-projects/portfilio-projects.component";
import { PortfilioContactMeComponent } from "./portfilio-contact-me/portfilio-contact-me.component";
import { PortfilioFooterComponent } from "./portfilio-footer/portfilio-footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CommonModule, PortfilioHeaderComponent, PortfilioHomePageComponent, PortfilioSliderComponent, PortfilioAboutMeComponent, PortfilioProjectsComponent, PortfilioContactMeComponent, PortfilioFooterComponent]
})
export class AppComponent {
  title = 'portfilo-18';
}
