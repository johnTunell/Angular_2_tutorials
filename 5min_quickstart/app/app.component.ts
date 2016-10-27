import {Component} from 'angular2/core';

@Component({        // Decorator
    selector: 'my-app',     // CSS selector. The element for this component is called my-app. Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element in the host HTML
    template: '<h1>My SECOND Angular 2 App</h1>'     // The html shown
})
export class AppComponent { }

