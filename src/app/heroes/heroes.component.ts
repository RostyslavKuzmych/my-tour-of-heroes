import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavButtonsComponent } from '../dashboard/nav-buttons/nav-buttons.component';
import { RouterModule } from '@angular/router';
import { Hero } from '../shared/hero.model';
import { Subscription } from 'rxjs';
import { HeroService } from '../shared/hero.service';
import { HeroComponent } from './hero/hero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NavButtonsComponent, RouterModule, HeroComponent, CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  heroesSubscription?: Subscription;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroesSubscription = this.heroService.heroesChanged
    .subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    })
  }

  ngOnDestroy(): void {
    this.heroesSubscription?.unsubscribe;
  }
}
