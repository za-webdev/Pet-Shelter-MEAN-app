webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var body_component_1 = __webpack_require__("./src/app/components/body/body.component.ts");
var new_component_1 = __webpack_require__("./src/app/components/new/new.component.ts");
var display_component_1 = __webpack_require__("./src/app/components/display/display.component.ts");
var edit_component_1 = __webpack_require__("./src/app/components/edit/edit.component.ts");
var routes = [
    { path: '', component: body_component_1.BodyComponent },
    { path: "show/:id", component: display_component_1.DisplayComponent },
    { path: "edit/:id", component: edit_component_1.EditComponent },
    { path: "new", component: new_component_1.NewComponent },
    { path: "**", redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Pet Shelter</h1>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var new_service_1 = __webpack_require__("./src/app/services/new.service.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var body_component_1 = __webpack_require__("./src/app/components/body/body.component.ts");
var new_component_1 = __webpack_require__("./src/app/components/new/new.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var display_component_1 = __webpack_require__("./src/app/components/display/display.component.ts");
var edit_component_1 = __webpack_require__("./src/app/components/edit/edit.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                body_component_1.BodyComponent,
                new_component_1.NewComponent,
                display_component_1.DisplayComponent,
                edit_component_1.EditComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [new_service_1.NewService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/body/body.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\n\tmargin-left: 10%;\n}\n\na{\n\tmargin-left: 5%;\n}\n\n.box{\n\tpadding: 2.5%;\n\tmargin: 2.5%;\n\tbackground-color:#e9ecef;\n}"

/***/ }),

/***/ "./src/app/components/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main\">\n<h1>These pets are looking for home!</h1>\n<a href=\"new\">Add a pet to the shelter </a>\n\n  \t<div *ngIf=\"pets\">\n\t<div *ngFor=\"let pet of pets\" class=\"box\">\n\t\n\t<h4>Pet Name:</h4> <p>{{pet.name}}</p>\n\t<h4>Pet Type:</h4> <p>{{pet.type}}</p>\n\t<h4>Description:</h4> <p>{{pet.description}}</p>\n\t\n\t<button class=\"btn btn-primary\" [routerLink]=\"['/show/'+pet._id]\">Details</button>\n\t<button class=\"btn btn-primary\" [routerLink]=\"['/edit/'+pet._id]\">Edit</button>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/body/body.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var new_service_1 = __webpack_require__("./src/app/services/new.service.ts");
var BodyComponent = /** @class */ (function () {
    function BodyComponent(ns) {
        this.ns = ns;
    }
    BodyComponent.prototype.ngOnInit = function () {
        this.all();
    };
    BodyComponent.prototype.all = function () {
        var _this = this;
        this.ns.getAll(function (data) {
            _this.pets = data.pets;
            console.log(data);
        });
    };
    BodyComponent = __decorate([
        core_1.Component({
            selector: 'app-body',
            template: __webpack_require__("./src/app/components/body/body.component.html"),
            styles: [__webpack_require__("./src/app/components/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [new_service_1.NewService])
    ], BodyComponent);
    return BodyComponent;
}());
exports.BodyComponent = BodyComponent;


/***/ }),

/***/ "./src/app/components/display/display.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\n\tpadding-top:5%;\n\tpadding-left: 10%;\n}\n\na{\n\tmargin-left:80%;\n}\n\nspan{\n\tfont-weight:30px;\n\tfont-size:30px;\n}"

/***/ }),

/***/ "./src/app/components/display/display.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"\">Home</a>\n<div class=\"container\">\n<div *ngIf=\"pet\">\n\n<h2>Details about {{pet.name}}</h2>\n<h3>Pet type: {{pet.type}}</h3>\n<h3>Pet description: {{pet.description}}</h3>\n<h3>Skills:</h3><br>\n<h3>Skill 1: {{pet.skill_1}}</h3>\n<h3>Skill 2: {{pet.skill_2}}</h3>\n<h3> Skill 3: {{pet.skill_3}}</h3>\n<h3> likes:{{numberOfLikes}}</h3>\n\n<button class=\"btn btn-primary\" (click)=\"destroy(pet._id)\" value=\"{{pet._id}}\">Adopt this pet</button>\n<button  class=\"btn btn-primary\"(click)=\"likeButtonClick()\">Like this pet</button>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/display/display.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var new_service_1 = __webpack_require__("./src/app/services/new.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var DisplayComponent = /** @class */ (function () {
    // private numberOfLikes:number;
    function DisplayComponent(ns, _route, _router) {
        this.ns = ns;
        this._route = _route;
        this._router = _router;
        this.numberOfLikes = 0;
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
    DisplayComponent.prototype.likeButtonClick = function () {
        this.numberOfLikes++;
    };
    DisplayComponent = __decorate([
        core_1.Component({
            selector: 'app-display',
            template: __webpack_require__("./src/app/components/display/display.component.html"),
            styles: [__webpack_require__("./src/app/components/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [new_service_1.NewService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], DisplayComponent);
    return DisplayComponent;
}());
exports.DisplayComponent = DisplayComponent;


/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = "h3{\n\tmargin-left:30%;\n}"

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>Edit This Pet</h3>\n\n<div *ngIf=\"editpet\">\n<div class=\"container\">\n<form (submit)=\"update()\">\n  <div class=\"form-group\">\n    <label>Pet Name:</label>\n    <input type=\"text\"\n     class=\"form-control\"\n      [(ngModel)]='editpet.name'\n        name='editpet.name'\n        required\n        minlength=\"3\" \n        maxlength=\"24\"\n        #name=\"ngModel\" \n       ><p *ngIf=\"!name.valid && !name.pristine\" style=\"color: red\"> Name must be 3 characters long</p>\n  </div>\n   <div class=\"form-group\">\n    <label>Pet Type:</label>\n    <input type=\"text\"\n     class=\"form-control\"\n      [(ngModel)]='editpet.type'\n        name='editpet.type'\n        required\n        minlength=\"3\" \n        maxlength=\"24\"\n        #type=\"ngModel\" \n       ><p *ngIf=\"!type.valid && !type.pristine\" style=\"color: red\"> Type must be 3 characters long</p>\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <textarea type=\"text\"\n     class=\"form-control\"\n      [(ngModel)]='editpet.description'\n        name='editpet.description'\n        minlength=\"3\" \n        maxlength=\"255\"\n        #description=\"ngModel\"\n        ></textarea>\n        <p *ngIf=\"!description.valid && !description.pristine\" style=\"color: red\"> Description must be 3 characters long</p>\n  </div>\n  <h4>Skills (optional):</h4>\n  <div class=\"form-group\">\n    <label>Skill 1:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]='editpet.skill_1' name='editpet.skill_1'>\n  </div>\n  <div class=\"form-group\">\n    <label>Skill 2:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]='editpet.skill_2' name='editpet.skill_2'>\n  </div>\n  <div class=\"form-group\">\n    <label>skill 3:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]='editpet.skill_3' name='editpet.skill_3'>\n  </div>\n  \n  <button type=\"submit\" class=\"btn btn-primary\">Edit pet </button>\n  <button class=\"btn btn-primary\" [routerLink]=\"['']\"> Cancel</button>\n\n</form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var new_service_1 = __webpack_require__("./src/app/services/new.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
            template: __webpack_require__("./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/components/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [new_service_1.NewService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/components/new/new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Know of a pet needing home?</h2>\n<div class=\"container\">\n<form (submit)=\"create()\">\n  <div class=\"form-group\">\n    <label>Pet Name:</label>\n    <input type=\"text\"\n     class=\"form-control\" \n     [(ngModel)]='addpet.name'\n      name='addpet.name'\n      required\n      minlength=\"3\" \n      maxlength=\"24\"\n      #name=\"ngModel\" \n      > <p *ngIf=\"!name.valid && !name.pristine\" style=\"color: red\"> Name must be 3 characters long</p>\n  </div>\n   <div class=\"form-group\">\n    <label>Pet Type:</label>\n    <input type=\"text\"\n     class=\"form-control\"\n      [(ngModel)]='addpet.type'\n      name='addpet.type'\n      required\n      minlength=\"3\" \n      maxlength=\"24\"\n      #type=\"ngModel\" \n       > <p *ngIf=\"!type.valid && !type.pristine\" style=\"color: red\"> Type must be 3 characters long</p>\n  </div>\n  <div class=\"form-group\">\n    <label>Description:</label>\n    <textarea \n      type=\"text\"\n      class=\"form-control\"\n      [(ngModel)]='addpet.description'\n      name='addpet.description'\n      required\n      minlength=\"3\" \n      maxlength=\"255\"\n      #description=\"ngModel\"\n      ></textarea> \n      <p *ngIf=\"!description.valid && !description.pristine\" style=\"color: red\"> Description must be 3 characters long</p>\n  </div>\n  <h4>Skills:</h4><br>\n  <div class=\"form-group\">\n    <label>Skill 1:</label>\n    <input type=\"text\" class=\"form-control\"\n     [(ngModel)]='addpet.skill_1'\n      name='addpet.skill_1'\n      >\n  </div>\n  <div class=\"form-group\">\n    <label>Skill 2:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]='addpet.skill_2' name='addpet.skill_2'>\n  </div>\n  <div class=\"form-group\">\n    <label>skill 3:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]='addpet.skill_3' name='addpet.skill_3'>\n  </div>\n  \n  <button type=\"submit\" class=\"btn btn-primary\">Add pet </button>\n  <button class=\"btn btn-primary\"  [routerLink]=\"['']\"> Cancel</button>\n\n</form>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/new/new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var new_service_1 = __webpack_require__("./src/app/services/new.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
            template: __webpack_require__("./src/app/components/new/new.component.html"),
            styles: [__webpack_require__("./src/app/components/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [new_service_1.NewService, router_1.Router])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;


/***/ }),

/***/ "./src/app/services/new.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map