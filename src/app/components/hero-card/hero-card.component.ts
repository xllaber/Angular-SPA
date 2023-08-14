import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {
  @Input() hero: any = {};
  // @ts-ignore
  @Input() index: number;

  @Output() heroSelect: EventEmitter<number>;

  constructor(private _router: Router) {
    this.heroSelect = new EventEmitter();
  }

  viewHero() {
    // console.log(this.index);
    this._router.navigate(["/hero", this.index]);
    // this.heroSelect.emit(this.index);
  }
}
