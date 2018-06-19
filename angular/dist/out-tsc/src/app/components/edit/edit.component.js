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
var EditComponent = /** @class */ (function () {
    function EditComponent(ns, _route, _router) {
        this.ns = ns;
        this._route = _route;
        this._router = _router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.id = (params['id']); });
        this.edit();
    };
    EditComponent.prototype.edit = function () {
        var _this = this;
        this.ns.getOne(this.id, function (data) {
            _this.editpet = data;
            _this.id = data._id;
        });
    };
    EditComponent.prototype.update = function (id) {
        console.log(this.id, this.editpet);
        this.ns.update(this.id, this.editpet, function (data) {
        });
        this._router.navigate(['show/' + this.id]);
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.css']
        }),
        __metadata("design:paramtypes", [new_service_1.NewService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map