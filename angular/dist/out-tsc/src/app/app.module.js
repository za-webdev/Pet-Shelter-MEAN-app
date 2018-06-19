"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var new_service_1 = require("./services/new.service");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var body_component_1 = require("./components/body/body.component");
var new_component_1 = require("./components/new/new.component");
var forms_1 = require("@angular/forms");
var display_component_1 = require("./components/display/display.component");
var edit_component_1 = require("./components/edit/edit.component");
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
//# sourceMappingURL=app.module.js.map