import {Component} from 'angular2/core';

@Component({
    selector: 'data-bind',
    template:
        `<h3 style="color:darkgreen">data binding demo</h3>
         <ul>
                <li *ngFor="#Item of Items" (click)="onItemClicked(Item)">{{ Item.name }}</li>
         </ul>
         <input type="text" [(ngModel)]="clickedItem.name">
         <h3>Component propery with interpolation</h3>
         <h4>Player name : </h4>{{player}}
         <h4>he is famous in : </h4>{{sport}}
         <h3>Displaying data with constructor or variable initialization</h3>
         <h4>capital is {{capital}}</h4>
         <h3>fruits by *ngFor</h3>
         <ol><li *ngFor="#i of fruits">{{i}}</li></ol>
        `
})

export class dataBindingComponent{
    public Items = [
        {name : 'Pranali'},
        {name: 'Sharvari'},
        {name: 'Chandan'},
        {name: 'Priyanka'},
        {name: 'Komal'},
        {name: 'Mrunal'}
    ];
    public clickedItem = {name:''};
    onItemClicked(item){
        this.clickedItem = item;
    }
    player : 'M.S.Dhoni';
    sport : 'Cricket';
    capital : String;
    constructor(){
        this.capital = 'Delhi';
    }
    fruits = ['apple','cherry','dates','blabla']
}

