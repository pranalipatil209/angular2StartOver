import {Component} from 'angular2/core';

@Component({
    selector : 'my-list',
    template : '<h2>List of Fruits</h2>' +
    '<ul>' +
        '<li *ngFor="#myItem of myList" >{{myItem.name}}</li>' +
    '</ul>',
})

export class ItemComponent{
    public myList = [
        {name : 'Apple'},
        {name: 'Orange'},
        {name: 'Mango'}
    ]
}