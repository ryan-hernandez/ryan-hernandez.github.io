import { Component, OnInit } from '@angular/core';
import { TweenLite } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ryan Hernandez';

  ngOnInit(): void {
    TweenLite.from('.crop', 1, { autoAlpha: 0, x: -150 });

    TweenLite.from('.resume-container', 1, { autoAlpha: 0, y: 150 });
  }
}
