import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Hero } from '../../shared/hero.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input('hero') hero?: Hero;
}
