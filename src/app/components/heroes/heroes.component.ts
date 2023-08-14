import { Component, OnInit } from '@angular/core';
import {HeroesService, Hero} from "../../services/heroes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  constructor(private _heroesService: HeroesService,
              private _router: Router) {}
  ngOnInit(){
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes)
  }
  viewHero(id: number) {
    this._router.navigate(["/hero", id]);
  }
}
