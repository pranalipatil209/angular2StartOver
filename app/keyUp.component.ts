import {Component} from 'angular2/core'

@Component({
    selector : 'key-up',
    template : `
                    <h2>Key UP event</h2>
                    <input type="text" (keyup)="onKey($event)">
                    <p>{{val}}</p>
                    <button (click)="clearD()">Clear</button>
               `
})

export class KeyUpComponent{
    val = '';
    onKey(event:KeyboardEvent) {
        this.val += (event.target).value + ' | ';
    }
    clearD(){

    }
}