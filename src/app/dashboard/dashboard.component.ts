import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero.model';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavButtonsComponent } from './nav-buttons/nav-buttons.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonComponent, CommonModule, RouterModule, NavButtonsComponent],
  providers: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy{
  topFourHeroes: Hero[] = [];
  heroSubscription?: Subscription;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroSubscription = this.heroService.topFourHeroes.subscribe((topFourHeroes: Hero[]) => {
      this.topFourHeroes = topFourHeroes;
    })
  }

  ngOnDestroy(): void {
    this.heroSubscription?.unsubscribe;
  }
}
