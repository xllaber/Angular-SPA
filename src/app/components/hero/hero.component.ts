import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../services/heroes.service";
// import {HeroesComponent} from "../heroes/heroes.component";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  hero: any = {};

  constructor(  private _activatedRoute: ActivatedRoute,
                private _heroService: HeroesService) {
    this._activatedRoute.params.subscribe(params => {
      this.hero = this._heroService.getHero(params["id"]);
      console.log(this.hero);
    })
  }
}
