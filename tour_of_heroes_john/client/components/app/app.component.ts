import {Component}        from "angular2/core";
import {HeroesComponent}  from "../heroes/heroes.component";
import {HeroService}      from "../../services/hero/hero.service";
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";

@Component({
  selector: 'my-app',
  templateUrl: 'components/app/my-app.html',
  styleUrls: ['components/app/app.component.css'],
  providers: [HeroService, ROUTER_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
})
@RouteConfig([
  { path: '/heroes',      component: HeroesComponent,       name: 'Heroes'},
  { path: '/dashboard',   component: DashboardComponent,    name: 'Dashboard', useAsDefault: true},
  { path: '/detail/:id',  component: HeroDetailComponent,   name: 'HeroDetail'}
])

/*

 @RouteConfig([
 { path: '/home',       component: HomeComponent,        name: 'Home', useAsDefault: true },
 { path: '/about',      component: AboutComponent,       name: 'About' },
 { path: '/github/...', component: RepoBrowserComponent, name: 'RepoBrowser' },
 ])
 */
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Tour of heroes';
  }

}