import { Component } from "angular2/core";
import { HeroService } from "../../services/hero/hero.service";
import { Hero } from '../../classes/hero';
import { Router } from "angular2/router"

@Component({
    selector: 'my-heroes',
    templateUrl: 'components/dashboard/dashboard.component.html',
    styleUrls: ['components/dashboard/dashboard.component.css'],
    providers: [],
    directives: [],
    pipes: [],
})
export class DashboardComponent {

    heroes: Hero[];

    constructor(private _heroService: HeroService, private _router: Router) { }

    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero: Hero) { 
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }

}