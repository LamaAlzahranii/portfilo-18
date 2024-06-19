import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfilioHeaderComponent } from "./portfilio-header/portfilio-header.component";
import { PortfilioHomePageComponent } from "./portfilio-home-page/portfilio-home-page.component";
import { PortfilioSliderComponent } from "./portfilio-slider/portfilio-slider.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PortfilioHeaderComponent, PortfilioHomePageComponent, PortfilioSliderComponent ]
})
export class AppComponent {
  title = 'portfilo-18';
}
