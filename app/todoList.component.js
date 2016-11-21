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
    var todoAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            todoAppComponent = (function () {
                function todoAppComponent() {
                    this.work = [
                        { name: 'Bake a cake' },
                        { name: 'dance class' },
                        { name: 'feed dog' }
                    ];
                    this.selectedItem = { name: '' };
                }
                todoAppComponent.prototype.onClick = function (selected) {
                    this.selectedItem = selected;
                };
                todoAppComponent.prototype.onAdd = function (listItem) {
                    this.work.push({ name: listItem.value });
                    listItem.value = '';
                };
                todoAppComponent.prototype.onDelete = function () {
                    this.work.splice(this.work.indexOf(this.selectedItem), 1);
                };
                todoAppComponent = __decorate([
                    core_1.Component({
                        selector: 'shop',
                        template: "    \n                    <div style=\"margin: auto\">\n                        <h3 style=\"color: deeppink\">TODO APP</h3>\n                        <h4>Pending work</h4>\n                        <ul>\n                            <li *ngFor=\"#i of work\" (click)=\"onClick(i)\">{{i.name}}</li>\n                        </ul>\n                        <b>Current Work : {{selectedItem.name}}</b><br> \n                        <button (click)=\"onDelete()\">DELETE</button><br><br>\n                        <input type=\"text\" #listItem>\n                        <button (click)=\"onAdd(listItem)\" >ADD</button>\n                    </div>\n               "
                    }), 
                    __metadata('design:paramtypes', [])
                ], todoAppComponent);
                return todoAppComponent;
            }());
            exports_1("todoAppComponent", todoAppComponent);
        }
    }
});
//# sourceMappingURL=todoList.component.js.map