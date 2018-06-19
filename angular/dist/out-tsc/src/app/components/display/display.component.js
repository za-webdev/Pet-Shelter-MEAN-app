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
var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(ns, _route, _router) {
        this.ns = ns;
        this._route = _route;
        this._router = _router;
    }
    DisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.id = (params['id']); });
        this.show();
    };
    DisplayComponent.prototype.show = function () {
        var _this = this;
        console.log(this.id);
        this.ns.getOne(this.id, function (data) {
            _this.pet = data;
        });
    };
    DisplayComponent.prototype.destroy = function () {
        this.ns.destroy(this.id, function (data) {
        });
        this._router.navigate(['']);
    };
    DisplayComponent.prototype.likes = function () {
        this.ns.likes(this.id, function (data) {
        });
    };
    DisplayComponent = __decorate([
        core_1.Component({
            selector: 'app-display',
            templateUrl: './display.component.html',
            styleUrls: ['./display.component.css']
        }),
        __metadata("design:paramtypes", [new_service_1.NewService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], DisplayComponent);
    return DisplayComponent;
}());
exports.DisplayComponent = DisplayComponent;
//# sourceMappingURL=display.component.js.map