System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var dataBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            dataBindingComponent = (function () {
                function dataBindingComponent() {
                    this.Items = [
                        { name: 'Pranali' },
                        { name: 'Sharvari' },
                        { name: 'Chandan' },
                        { name: 'Priyanka' },
                        { name: 'Komal' },
                        { name: 'Mrunal' }
                    ];
                    this.clickedItem = { name: '' };
                    this.fruits = ['apple', 'cherry', 'dates', 'blabla'];
                    this.capital = 'Delhi';
                }
                dataBindingComponent.prototype.onItemClicked = function (item) {
                    this.clickedItem = item;
                };
                dataBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'data-bind',
                        template: "<h3 style=\"color:darkgreen\">data binding demo</h3>\n         <ul>\n                <li *ngFor=\"#Item of Items\" (click)=\"onItemClicked(Item)\">{{ Item.name }}</li>\n         </ul>\n         <input type=\"text\" [(ngModel)]=\"clickedItem.name\">\n         <h3>Component propery with interpolation</h3>\n         <h4>Player name : </h4>{{player}}\n         <h4>he is famous in : </h4>{{sport}}\n         <h3>Displaying data with constructor or variable initialization</h3>\n         <h4>capital is {{capital}}</h4>\n         <h3>fruits by *ngFor</h3>\n         <ol><li *ngFor=\"#i of fruits\">{{i}}</li></ol>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], dataBindingComponent);
                return dataBindingComponent;
            }());
            exports_1("dataBindingComponent", dataBindingComponent);
        }
    }
});
//# sourceMappingURL=dataBinding.component.js.map