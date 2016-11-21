import {Component} from 'angular2/core';

@Component({
    selector : 'shop',
    template : `    
                    <div style="margin: auto">
                        <h3 style="color: deeppink">TODO APP</h3>
                        <h4>Pending work</h4>
                        <ul>
                            <li *ngFor="#i of work" (click)="onClick(i)">{{i.name}}</li>
                        </ul>
                        <b>Current Work : {{selectedItem.name}}</b><br> 
                        <button (click)="onDelete()">DELETE</button><br><br>
                        <input type="text" #listItem>
                        <button (click)="onAdd(listItem)" >ADD</button>
                    </div>
               `
})

export class todoAppComponent {
    public work = [
        {name:'Bake a cake'},
        {name:'dance class'},
        {name:'feed dog'}
    ];
    public selectedItem = {name:''};
    onClick(selected){
        this.selectedItem = selected;
    }
    onAdd(listItem){
        this.work.push({name:listItem.value});
        listItem.value = '';
    }
    onDelete(){
        this.work.splice(this.work.indexOf(this.selectedItem),1);
    }
}