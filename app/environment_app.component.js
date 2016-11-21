System.register(['angular2/core', "./itemList.component", "./dataBinding.component", "./todoList.component", "./keyUp.component"], function(exports_1, context_1) {
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
    var core_1, itemList_component_1, dataBinding_component_1, todoList_component_1, keyUp_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (itemList_component_1_1) {
                itemList_component_1 = itemList_component_1_1;
            },
            function (dataBinding_component_1_1) {
                dataBinding_component_1 = dataBinding_component_1_1;
            },
            function (todoList_component_1_1) {
                todoList_component_1 = todoList_component_1_1;
            },
            function (keyUp_component_1_1) {
                keyUp_component_1 = keyUp_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<my-list></my-list>' +
                            '<data-bind></data-bind>' +
                            '<shop></shop>' +
                            '<key-up></key-up>',
                        directives: [itemList_component_1.ItemComponent, dataBinding_component_1.dataBindingComponent, todoList_component_1.todoAppComponent, keyUp_component_1.KeyUpComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=environment_app.component.js.map