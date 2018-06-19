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
var http_1 = require("@angular/common/http");
var NewService = /** @class */ (function () {
    function NewService(_http) {
        this._http = _http;
    }
    NewService.prototype.getAll = function (cb) {
        this._http.get('/api/pets')
            .subscribe(function (data) { return cb(data); });
    };
    NewService.prototype.create = function (pet, cb) {
        this._http.post('/api/pets', pet)
            .subscribe(function (data) { return cb(data); });
    };
    NewService.prototype.update = function (id, pet, cb) {
        this._http.put('/api/pets/' + id, pet)
            .subscribe(function (data) { return cb(data); });
    };
    NewService.prototype.getOne = function (id, cb) {
        this._http.get('/api/pets/' + id)
            .subscribe(function (data) { return cb(data); });
    };
    NewService.prototype.destroy = function (id, cb) {
        this._http.delete('/api/pets/' + id)
            .subscribe(function (data) { return cb(data); });
    };
    NewService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NewService);
    return NewService;
}());
exports.NewService = NewService;
//# sourceMappingURL=new.service.js.map