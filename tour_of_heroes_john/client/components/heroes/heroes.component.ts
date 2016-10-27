import {Component} from "angular2/core";
import {Hero} from "../../classes/hero";
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroService} from '../../services/hero/hero.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'components/heroes/heroes.html',
    styleUrls: ['components/heroes/heroes.css'],
    providers: [],
    directives: [HeroDetailComponent],
    pipes: [],
})
export class HeroesComponent implements OnInit {
    title: string = 'Tour of Heroes';
    selectedHero : Hero;
    heroes: Hero[];

    constructor(private _heroService: HeroService, private _router: Router) { }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        // When returning from promise.. then!! do this.heroes = heroes
    }
  
    ngOnInit() {
        this.getHeroes();
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}