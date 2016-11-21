import {Component} from 'angular2/core';
import {ItemComponent} from "./itemList.component";
import {dataBindingComponent} from "./dataBinding.component";
import {todoAppComponent} from "./todoList.component";


@Component({
    selector : 'my-app',
    template : '<my-list></my-list>' +
    '<data-bind></data-bind>' +
    '<shop></shop>',
    directives : [ItemComponent,dataBindingComponent,todoAppComponent]
})

// @View({
//   template : '<h2>My First Angular2 App</h2>'
// })

export class AppComponent{

}
