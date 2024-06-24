import { Component } from '@angular/core';
@Component({
  selector: 'app-portfilio-slider',
  standalone: true,
  imports: [],
  templateUrl: './portfilio-slider.component.html',
  styleUrl: './portfilio-slider.component.scss',

})
export class PortfilioSliderComponent {

  imageList: any = [
    { src: 'https://cdn-icons-png.flaticon.com/512/16511/16511234.png' },
    { src: 'https://www.svgrepo.com/show/333609/tailwind-css.svg' },
    { src: 'https://cdn-icons-png.flaticon.com/512/3393/3393920.png' },
    { src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
    { src: 'https://cdn-icons-png.flaticon.com/512/721/721671.png' },
  ];


}