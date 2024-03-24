import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../../shared/hero.model';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { HeroService } from '../../shared/hero.service';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  editedHero?: Hero;
  name?: string = '';
  editedHeroStart?: Hero;
  editedHeroId?: number;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.editedHeroId = +params['id'];
      this.editedHero = this.heroService.getHeroById(this.editedHeroId);
      this.name = this.editedHero?.name;
      this.editedHeroStart = this.editedHero;
    })
  }

  ngOnDestroy(): void {
    if (
      this.name
      && this.editedHero
      && this.editedHero?.name !== this.name
      ) {
        console.log(this.ngOnDestroy.toString)
      this.heroService.editHero({...this.editedHero, name: this.name});
    }
    console.log(this.name);
    console.log(this.editedHero)
  }
}

