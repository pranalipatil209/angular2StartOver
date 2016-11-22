import {Component} from 'angular2/core';

@Component({
    selector : 'key-up',
    template : `
                    <h2>Key UP event</h2>
                    <input type="text" (keyup)="onKey($event)">
                    <p>{{val}}</p>
                    <button (click)="clearD()">Clear</button><br><br>
                    <p>User Input from local template variable</p>
                    <input type="text" #key_val (keyup)="0">
                    <p>{{key_val.value}}</p>
                    <p>Key event filtering & onblur event</p>
                    <input #myVal (keyup.enter)="values = myVal.value" (blur)="values = myVal.value">
                    <p>{{values}}</p>
               `
})

export class KeyUpComponent{
    val = '';
    values = '';
    onKey(event:KeyboardEvent) {
        this.val += (event.target).value + ' | ';
    }
    clearD(){
        this.val = '';
    }
}