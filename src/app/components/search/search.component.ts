import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  heroes: any[] = [];
  text: string = "";

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroService: HeroesService) {
  }
  ngOnInit(){
    this._activatedRoute.params.subscribe(params => {
      this.text = params["text"];
      this.heroes = this._heroService.searchHeroes(params["text"]);
    })
  }
}
