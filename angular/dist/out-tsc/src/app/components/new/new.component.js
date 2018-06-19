"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var new_service_1 = require("../../services/new.service");
var router_1 = require("@angular/router");
var NewComponent = /** @class */ (function () {
    function NewComponent(ns, _router) {
        this.ns = ns;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.addpet = {
            name: "",
            type: "",
            description: "",
            skill_1: "",
            skill_2: "",
            skill_3: "",
        };
    };
    NewComponent.prototype.create = function () {
        this.ns.create(this.addpet, function (data) {
        });
        this._router.navigate(['']);
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'app-new',
            templateUrl: './new.component.html',
            styleUrls: ['./new.component.css']
        }),
        __metadata("design:paramtypes", [new_service_1.NewService, router_1.Router])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;
//# sourceMappingURL=new.component.js.map