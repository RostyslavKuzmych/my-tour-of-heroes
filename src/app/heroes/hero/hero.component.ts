import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../shared/hero.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input('hero') hero?: Hero;
}
