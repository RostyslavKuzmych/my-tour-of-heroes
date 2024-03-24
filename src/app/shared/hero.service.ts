import { Injectable, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = [
    new Hero(12, 'Dr. Nice'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan'),
    new Hero(17, 'Dynama'),
    new Hero(18, 'Dr. IQ'),
    new Hero(19, 'Magma'),
    new Hero(20, 'Tornado'),
  ];

  heroesChanged = new BehaviorSubject<Hero[]>(this.heroes);
  topFourHeroes = new BehaviorSubject<Hero[]>(this.heroes.slice(0, 4));

  editHero(editedHero: Hero) {
    this.heroes = this.heroes.map(hero => hero.id === editedHero.id? editedHero : hero);
    this.heroesChanged.next(this.heroes);
    if(this.heroes.slice(0, 4).some(hero => hero.id === editedHero.id)) {
      this.topFourHeroes.next(this.heroes.slice(0, 4))
    }
  }


  getHeroById(id: number) {
    return this.heroes.find(hero => hero.id === id);
  }
}
