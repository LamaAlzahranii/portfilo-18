import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfilioHeaderComponent } from "./portfilio-header/portfilio-header.component";
import { PortfilioHomePageComponent } from "./portfilio-home-page/portfilio-home-page.component";
import { PortfilioSliderComponent } from "./portfilio-slider/portfilio-slider.component";
import {CommonModule } from '@angular/common';

import { BehaviorSubject } from 'rxjs';
import { PortfilioAboutMeComponent } from "./portfilio-about-me/portfilio-about-me.component";
import { PortfilioProjectsComponent } from "./portfilio-projects/portfilio-projects.component";
import { PortfilioContactMeComponent } from "./portfilio-contact-me/portfilio-contact-me.component";
import { PortfilioFooterComponent } from "./portfilio-footer/portfilio-footer.component";
// import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PortfilioHeaderComponent, PortfilioHomePageComponent, PortfilioSliderComponent, CommonModule, PortfilioAboutMeComponent, PortfilioProjectsComponent, PortfilioContactMeComponent, PortfilioFooterComponent]
})
export class AppComponent {
  title = 'portfilo-18';
  presentTheme$ = new BehaviorSubject<string>('theme-light')
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // const savedTheme = localStorage.getItem('theme')
    // if (savedTheme) {
    //   this.presentTheme$.next(savedTheme)
    // }

  }
  // switchMode(index: number) {
  //   if (index === 1) {
  //     this.renderer.addClass(document.body, 'dark');
  //     localStorage.setItem('theme', 'dark')
  //   } else {
  //     this.renderer.removeClass(document.body, 'dark');
  //     localStorage.removeItem('theme')

  //   }
  // }
}




