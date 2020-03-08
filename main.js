(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proyecto/proyecto.component */ "./src/app/proyecto/proyecto.component.ts");
/* harmony import */ var _proyecto_productos1_productos1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proyecto/productos1/productos1.component */ "./src/app/proyecto/productos1/productos1.component.ts");
/* harmony import */ var _proyecto_productos1_productos_productos1_productos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proyecto/productos1-productos/productos1-productos.component */ "./src/app/proyecto/productos1-productos/productos1-productos.component.ts");
/* harmony import */ var _proyecto_productos2_productos2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proyecto/productos2/productos2.component */ "./src/app/proyecto/productos2/productos2.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registrar_registrar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/registrar/registrar.component */ "./src/app/components/registrar/registrar.component.ts");
/* harmony import */ var _proyecto_entro_proyecto_entro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./proyecto-entro/proyecto-entro.component */ "./src/app/proyecto-entro/proyecto-entro.component.ts");
/* harmony import */ var _proyecto_entro_principal_principal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proyecto-entro/principal/principal.component */ "./src/app/proyecto-entro/principal/principal.component.ts");

//




//


//


var APP_ROUTES = [
    { path: 'System', component: _proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_1__["ProyectoComponent"], children: [
            { path: 'Productos1', component: _proyecto_productos1_productos1_component__WEBPACK_IMPORTED_MODULE_2__["Productos1Component"] },
            { path: 'Productos1/Producto/:id', component: _proyecto_productos1_productos_productos1_productos_component__WEBPACK_IMPORTED_MODULE_3__["Productos1ProductosComponent"] },
            { path: 'Productos2', component: _proyecto_productos2_productos2_component__WEBPACK_IMPORTED_MODULE_4__["Productos2Component"] },
            { path: '**', pathMatch: 'full', redirectTo: 'Productos1' }
        ] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'Registro', component: _components_registrar_registrar_component__WEBPACK_IMPORTED_MODULE_6__["RegistrarComponent"] },
    { path: 'SystemProductos', component: _proyecto_entro_proyecto_entro_component__WEBPACK_IMPORTED_MODULE_7__["ProyectoEntroComponent"], children: [
            { path: 'Principal', component: _proyecto_entro_principal_principal_component__WEBPACK_IMPORTED_MODULE_8__["PrincipalComponent"] },
            { path: '**', pathMatch: 'full', redirectTo: 'Principal' }
        ] },
    { path: '**', pathMatch: 'full', redirectTo: 'System' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'proyecto1';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _proyecto_servicio_school_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proyecto/servicio/school.service */ "./src/app/proyecto/servicio/school.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registrar_registrar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/registrar/registrar.component */ "./src/app/components/registrar/registrar.component.ts");
/* harmony import */ var _proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proyecto/proyecto.component */ "./src/app/proyecto/proyecto.component.ts");
/* harmony import */ var _proyecto_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./proyecto/footer/footer.component */ "./src/app/proyecto/footer/footer.component.ts");
/* harmony import */ var _proyecto_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./proyecto/menu/menu.component */ "./src/app/proyecto/menu/menu.component.ts");
/* harmony import */ var _proyecto_productos1_productos1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./proyecto/productos1/productos1.component */ "./src/app/proyecto/productos1/productos1.component.ts");
/* harmony import */ var _proyecto_productos1_productos_productos1_productos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./proyecto/productos1-productos/productos1-productos.component */ "./src/app/proyecto/productos1-productos/productos1-productos.component.ts");
/* harmony import */ var _proyecto_productos2_productos2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./proyecto/productos2/productos2.component */ "./src/app/proyecto/productos2/productos2.component.ts");
/* harmony import */ var _proyecto_entro_proyecto_entro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./proyecto-entro/proyecto-entro.component */ "./src/app/proyecto-entro/proyecto-entro.component.ts");
/* harmony import */ var _proyecto_entro_principal_principal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./proyecto-entro/principal/principal.component */ "./src/app/proyecto-entro/principal/principal.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_registrar_registrar_component__WEBPACK_IMPORTED_MODULE_7__["RegistrarComponent"],
                _proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_8__["ProyectoComponent"],
                _proyecto_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _proyecto_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _proyecto_productos1_productos1_component__WEBPACK_IMPORTED_MODULE_11__["Productos1Component"],
                _proyecto_productos1_productos_productos1_productos_component__WEBPACK_IMPORTED_MODULE_12__["Productos1ProductosComponent"],
                _proyecto_productos2_productos2_component__WEBPACK_IMPORTED_MODULE_13__["Productos2Component"],
                _proyecto_entro_proyecto_entro_component__WEBPACK_IMPORTED_MODULE_14__["ProyectoEntroComponent"],
                _proyecto_entro_principal_principal_component__WEBPACK_IMPORTED_MODULE_15__["PrincipalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["APP_ROUTING"]
            ],
            providers: [
                _proyecto_servicio_school_service__WEBPACK_IMPORTED_MODULE_4__["SchoolsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bd-placeholder-img {\n    font-size: 1.125rem;\n    text-anchor: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n@media (min-width: 768px) {\n    .bd-placeholder-img-lg {\n        font-size: 3.5rem;\n    }\n}\n\n/*Estilos del login*/\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    align-items: center;\n    padding-top: 90px;\n    padding-bottom: 40px;\n    background-color: #757373;\n}\n\n.form-signin {\n    width: 100%;\n    max-width: 420px;\n    padding: 15px;\n    margin: auto;\n}\n\n.form-label-group {\n    position: relative;\n    margin-bottom: 1rem;\n}\n\n.form-label-group>input,\n.form-label-group>label {\n    height: 3.125rem;\n    padding: .75rem;\n}\n\n.form-label-group>label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    margin-bottom: 0;\n    /* Override default `<label>` margin */\n    line-height: 1.5;\n    color: #495057;\n    pointer-events: none;\n    cursor: text;\n    /* Match the input under the label */\n    border: 1px solid transparent;\n    border-radius: .25rem;\n    transition: all .1s ease-in-out;\n}\n\n.form-label-group input::-webkit-input-placeholder {\n    color: transparent;\n}\n\n.form-label-group input::-ms-input-placeholder {\n    color: transparent;\n}\n\n.form-label-group input::-moz-placeholder {\n    color: transparent;\n}\n\n.form-label-group input::placeholder {\n    color: transparent;\n}\n\n.form-label-group input:not(:placeholder-shown) {\n    padding-top: 1.25rem;\n    padding-bottom: .25rem;\n}\n\n.form-label-group input:not(:placeholder-shown)~label {\n    padding-top: .25rem;\n    padding-bottom: .25rem;\n    font-size: 12px;\n    color: #777;\n}\n\n/* Fallback for Edge\n-------------------------------------------------- */\n\n@supports (-ms-ime-align: auto) {\n    .form-label-group>label {\n        display: none;\n    }\n    .form-label-group input::-ms-input-placeholder {\n        color: #777;\n    }\n}\n\n/* Fallback for IE\n-------------------------------------------------- */\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .form-label-group>label {\n        display: none;\n    }\n    .form-label-group input:-ms-input-placeholder {\n        color: #777;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSTtRQUNJLGtCQUFrQjtLQUNyQjtDQUNKOztBQUdELHFCQUFxQjs7QUFFckI7O0lBRUksYUFBYTtDQUNoQjs7QUFFRDtJQUVJLGNBQWM7SUFFZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2Qjs7QUFFRDs7SUFFSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0lBQ1IsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixnQ0FBZ0M7Q0FDbkM7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBTUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmOztBQUdEO3FEQUNxRDs7QUFFckQ7SUFDSTtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLFlBQVk7S0FDZjtDQUNKOztBQUdEO3FEQUNxRDs7QUFFckQ7SUFFSTtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLFlBQVk7S0FDZjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJkLXBsYWNlaG9sZGVyLWltZyB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5iZC1wbGFjZWhvbGRlci1pbWctbGcge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9XG59XG5cblxuLypFc3RpbG9zIGRlbCBsb2dpbiovXG5cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA5MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTczNzM7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MjBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cD5pbnB1dCxcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgICBoZWlnaHQ6IDMuMTI1cmVtO1xuICAgIHBhZGRpbmc6IC43NXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiB0ZXh0O1xuICAgIC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XG4gICAgcGFkZGluZy10b3A6IC4yNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzc3Nztcbn1cblxuXG4vKiBGYWxsYmFjayBmb3IgRWRnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gICAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgfVxufVxuXG5cbi8qIEZhbGxiYWNrIGZvciBJRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSxcbigtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogIzc3NztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\">\n  <div class=\"text-center mb-4\">\n      <img class=\"mb-4\" src=\"../../../assets/image/intranet.jpg\" alt=\"\" width=\"100%\" height=\"100%\">\n      <h1 class=\"h3 mb-3 font-weight-normal\">Ingresar al System </h1>\n  </div>\n\n  <div class=\"form-label-group\">\n      <input type=\"text\" id=\"inputCodigo\" class=\"form-control\" placeholder=\"Codigo de Ingreso\" required autofocus>\n      <label for=\"inputEmail\">Codigo de Ingreso</label>\n  </div>\n\n  <div class=\"form-label-group\">\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Contraseña\" required>\n      <label for=\"inputPassword\">Contraseña</label>\n  </div>\n\n  <div class=\"checkbox mb-3\">\n      <label>\n      <input type=\"checkbox\" value=\"remember-me\"> Recordar Contraseña\n    </label>\n  </div>\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [routerLink]=\"['/SystemProductos']\">Ingresar</button>\n  <div class=\"d-flex justify-content-center links mt-3 mb-2\">\n      No tienes cuenta?<a class=\"ml-2\" [routerLink]=\"['/Registro']\">Regístrate</a>\n  </div>\n  <div class=\"d-flex justify-content-center\">\n      <a class=\"ml-2\" [routerLink]=\"['/#']\">Olvidaste tu contraseña?</a>\n  </div>\n  <p class=\"mt-3 mb-3 text-muted text-center\">&copy</p>\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/registrar/registrar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/registrar/registrar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Registros*/\n\n.container {\n    max-width: 960px;\n}\n\n.lh-condensed {\n    line-height: 1.25;\n}\n\n.bd-placeholder-img {\n    font-size: 1.125rem;\n    text-anchor: middle;\n}\n\n@media (min-width: 768px) {\n    .bd-placeholder-img-lg {\n        font-size: 3.5rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXIvcmVnaXN0cmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYTs7QUFFYjtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSTtRQUNJLGtCQUFrQjtLQUNyQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXIvcmVnaXN0cmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlJlZ2lzdHJvcyovXG5cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTYwcHg7XG59XG5cbi5saC1jb25kZW5zZWQge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuXG4uYmQtcGxhY2Vob2xkZXItaW1nIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5iZC1wbGFjZWhvbGRlci1pbWctbGcge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/registrar/registrar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/registrar/registrar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"py-2 text-center\">\n      <img class=\"d-block mx-auto mb-4\" src=\"../../../assets/image/intranet.jpg\" alt=\"\" width=\"75%\" height=\"75%\">\n      <h2>Registrar Usuario</h2>\n      <p class=\"lead\">\n          Registrate gratis en nuestro sistema y disfruta de los beneficio de nuestro sistema.\n      </p>\n  </div>\n\n  <hr class=\"mb-4\">\n\n  <div class=\"row\">\n\n      <div class=\"col-md-12 order-md-1\">\n          <h4 class=\"mb-3\">Datos Personales</h4>\n          <form novalidate=\"\">\n\n              <div class=\"row\">\n\n                  <div class=\"col-md-6 mb-3\">\n                      <label for=\"nombres\">Nombre completos</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Nombre Completo\" name=\"nombre\" required>\n                  </div>\n\n                  <div class=\"col-md-6 mb-3\">\n                      <label for=\"apellidos\">Apellidos completos</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Apellidos Completos\" name=\"apellido\" required>\n                  </div>\n\n              </div>\n\n              <div class=\"row\">\n\n                  <div class=\"col-md-4 mb-4\">\n                      <label for=\"dni\">DNI</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"DNI\" name=\"dni\">\n                  </div>\n\n                  <div class=\"col-md-4 mb-4\">\n                      <label for=\"celular\">Celular Personal</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Numero Celular\" name=\"celular\" required>\n                  </div>\n\n                  <div class=\"col-md-4 mb-4\">\n                      <label for=\"telefono\">Telefono <span class=\"text-muted\">(Opcional)</span></label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Numero Telefonico\" name=\"telefono\">\n                  </div>\n\n              </div>\n\n              <div class=\"mb-3\">\n                  <label for=\"direccion\">Direccion</label>\n                  <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Escriba la Direccion de su casa\" name=\"direccion\" required>\n                  </div>\n              </div>\n\n              <div class=\"row\">\n\n                  <div class=\"col-md-4 mb-4\">\n                      <label for=\"pais\">Pais</label>\n                      <select class=\"custom-select d-block w-100\" name=\"pais\" required>\n                      <option value=\"\">Pais</option>\n                      <option>Peru</option>\n                      <option>Colombia</option>\n                      <option>Venezuela</option>\n                      <option>Chile</option>\n                      <option>Ecuador</option>\n                    </select>\n                  </div>\n\n                  <div class=\"col-md-4 mb-4\">\n                      <label for=\"ciudad\">Ciudad</label>\n                      <select class=\"custom-select d-block w-100\" name=\"ciudad\" required>\n                      <option value=\"\">Ciudad</option>\n                      <option>Lima</option>\n                      <option>Cusco</option>\n                      <option>Arequipa</option>\n                      <option>Tacna</option>\n                      <option>Moquegua</option>\n                    </select>\n                  </div>\n\n                  <div class=\"col-md-4 mb-4\">\n                      <label for=\"provincia\">Provincia</label>\n                      <select class=\"custom-select d-block w-100\" name=\"provincia\" required>\n                        <option value=\"\">Provincia</option>\n                        <option>Ilo</option>\n                    </select>\n                  </div>\n\n              </div>\n\n              <hr class=\"mb-4\">\n\n              <h4 class=\"mb-3\">Cuenta de Usuario</h4>\n\n\n              <div class=\"mb-3\">\n                  <label for=\"gmail\">Cuenta</label>\n                  <div class=\"input-group\">\n                      <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i></span>\n                      </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Escriba su Gmail o Hotmail\" name=\"gmail\" required>\n                  </div>\n              </div>\n\n              <div class=\"mb-3\">\n                  <label for=\"contra\">Contraseña</label>\n                  <div class=\"input-group\">\n                      <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></span>\n                      </div>\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Escriba su contraseña\" name=\"contra\" required>\n                  </div>\n              </div>\n\n              <div class=\"mb-3\">\n                  <label for=\"contra2\">Repita la Contraseña</label>\n                  <div class=\"input-group\">\n                      <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></span>\n                      </div>\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Repita su contraseña\" name=\"contra2\" required>\n                  </div>\n              </div>\n              <!--\n              <hr class=\"mb-4\">\n\n              <h4 class=\"mb-3\">Tarjeta de Credito</h4>\n\n              <div class=\"row\">\n                  <div class=\"col-md-6 mb-3\">\n                      <label for=\"nombreTarjeta\">Nombre de la Tarjeta</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Nombre de la Tarjeta\" name=\"nombreTarjeta\" required>\n                  </div>\n                  <div class=\"col-md-6 mb-3\">\n                      <label for=\"numeroTarjeta\">Numero de Tarjeta</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Numero de Tarjeta\" name=\"numeroTarjeta\" required>\n                  </div>\n              </div>\n              <div class=\"row\">\n\n                  <div class=\"col-md-3 mb-3\">\n                      <label for=\"mesano\">MM/AAAA</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"MM/AAAA\" name=\"mesano\" required>\n                  </div>\n\n                  <div class=\"col-md-3 mb-3\">\n                      <label for=\"cvv\">CVV</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"CVV\" name=\"cvv\" required>\n                  </div>\n\n              </div>\n\n              <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\" name=\"condicion1\">\n                  <label class=\"custom-control-label\" for=\"same-address\">Acepta los terminos y condiciones de nuestra empresa</label>\n              </div>\n\n              <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\" name=\"condicion2\">\n                  <label class=\"custom-control-label\" for=\"save-info\">Acepta los servicios de la plataforma</label>\n              </div>\n            -->\n              <hr class=\"mb-4\">\n              <button class=\"btn btn-outline-primary btn-lg btn-block\" type=\"submit\" [routerLink]=\"['/']\">Aceptar</button>\n              <hr class=\"mb-4\">\n          </form>\n      </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/registrar/registrar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/registrar/registrar.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarComponent", function() { return RegistrarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegistrarComponent = /** @class */ (function () {
    function RegistrarComponent() {
    }
    RegistrarComponent.prototype.ngOnInit = function () {
    };
    RegistrarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registrar',
            template: __webpack_require__(/*! ./registrar.component.html */ "./src/app/components/registrar/registrar.component.html"),
            styles: [__webpack_require__(/*! ./registrar.component.css */ "./src/app/components/registrar/registrar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistrarComponent);
    return RegistrarComponent;
}());



/***/ }),

/***/ "./src/app/proyecto-entro/principal/principal.component.css":
/*!******************************************************************!*\
  !*** ./src/app/proyecto-entro/principal/principal.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Start Bootstrap - Stylish Portfolio v5.0.5 (https://startbootstrap.com/template-overviews/stylish-portfolio)\n * Copyright 2013-2019 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio/blob/master/LICENSE)\n */\n\n body,\n html {\n     width: 100%;\n     height: 100%\n }\n\n body {\n     font-family: 'Source Sans Pro'\n }\n\n .btn-xl {\n     padding: 1.25rem 2.5rem\n }\n\n .content-section {\n     padding-top: 1rem;\n     padding-bottom: 7.5rem\n }\n\n .content-section-heading h2 {\n     font-size: 3rem\n }\n\n .content-section-heading h3 {\n     font-size: 1rem;\n     text-transform: uppercase\n }\n\n h1,\n h2,\n h3,\n h4,\n h5,\n h6 {\n     font-weight: 700\n }\n\n .text-faded {\n     color: rgba(255, 255, 255, .7)\n }\n\n .map {\n     height: 30rem\n }\n\n @media (max-width:992px) {\n     .map {\n         height: 75%\n     }\n }\n\n .map iframe {\n     pointer-events: none\n }\n\n .scroll-to-top {\n     position: fixed;\n     right: 15px;\n     bottom: 15px;\n     display: none;\n     width: 50px;\n     height: 50px;\n     text-align: center;\n     color: #fff;\n     background: rgba(52, 58, 64, .5);\n     line-height: 45px\n }\n\n .scroll-to-top:focus,\n .scroll-to-top:hover {\n     color: #fff\n }\n\n .scroll-to-top:hover {\n     background: #343a40\n }\n\n .scroll-to-top i {\n     font-weight: 800\n }\n\n .masthead {\n     min-height: 30rem;\n     position: relative;\n     display: table;\n     width: 100%;\n     height: auto;\n     padding-top: 8rem;\n     padding-bottom: 8rem;\n     background-position: center center;\n     background-repeat: no-repeat;\n     background-size: cover\n }\n\n .masthead h1 {\n     font-size: 4rem;\n     margin: 0;\n     padding: 0\n }\n\n @media (min-width:992px) {\n     .masthead {\n         height: 100vh\n     }\n     .masthead h1 {\n         font-size: 5.5rem\n     }\n }\n\n #sidebar-wrapper {\n     position: fixed;\n     z-index: 2;\n     right: 0;\n     width: 250px;\n     height: 100%;\n     transition: all .4s ease 0s;\n     transform: translateX(250px);\n     background: #1d809f;\n     border-left: 1px solid rgba(255, 255, 255, .1)\n }\n\n .sidebar-nav {\n     position: absolute;\n     top: 0;\n     width: 250px;\n     margin: 0;\n     padding: 0;\n     list-style: none\n }\n\n .sidebar-nav li.sidebar-nav-item a {\n     display: block;\n     text-decoration: none;\n     color: #fff;\n     padding: 15px\n }\n\n .sidebar-nav li a:hover {\n     text-decoration: none;\n     color: #fff;\n     background: rgba(255, 255, 255, .2)\n }\n\n .sidebar-nav li a:active,\n .sidebar-nav li a:focus {\n     text-decoration: none\n }\n\n .sidebar-nav>.sidebar-brand {\n     font-size: 1.2rem;\n     background: rgba(52, 58, 64, .1);\n     height: 80px;\n     line-height: 50px;\n     padding-top: 15px;\n     padding-bottom: 15px;\n     padding-left: 15px\n }\n\n .sidebar-nav>.sidebar-brand a {\n     color: #fff\n }\n\n .sidebar-nav>.sidebar-brand a:hover {\n     color: #fff;\n     background: 0 0\n }\n\n #sidebar-wrapper.active {\n     right: 250px;\n     width: 250px;\n     transition: all .4s ease 0s\n }\n\n .menu-toggle {\n     position: fixed;\n     right: 15px;\n     top: 15px;\n     width: 50px;\n     height: 50px;\n     text-align: center;\n     color: #fff;\n     background: rgba(52, 58, 64, .5);\n     line-height: 50px;\n     z-index: 999\n }\n\n .menu-toggle:focus,\n .menu-toggle:hover {\n     color: #fff\n }\n\n .menu-toggle:hover {\n     background: #343a40\n }\n\n .service-icon {\n     background-color: #fff;\n     color: #1d809f;\n     height: 7rem;\n     width: 7rem;\n     display: block;\n     line-height: 7.5rem;\n     font-size: 2.25rem;\n     box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .1)\n }\n\n .callout h2 {\n     font-size: 3.5rem;\n     font-weight: 700;\n     display: block;\n     max-width: 30rem\n }\n\n .portfolio-item {\n     display: block;\n     position: relative;\n     overflow: hidden;\n     max-width: 530px;\n     margin: auto auto 1rem\n }\n\n .portfolio-item .caption {\n     display: flex;\n     height: 100%;\n     width: 100%;\n     background-color: rgba(33, 37, 41, .2);\n     position: absolute;\n     top: 0;\n     bottom: 0;\n     z-index: 1\n }\n\n .portfolio-item .caption .caption-content {\n     color: #fff;\n     margin: auto 2rem 2rem\n }\n\n .portfolio-item .caption .caption-content h2 {\n     font-size: .8rem;\n     text-transform: uppercase\n }\n\n .portfolio-item .caption .caption-content p {\n     font-weight: 300;\n     font-size: 1.2rem\n }\n\n @media (min-width:992px) {\n     .portfolio-item {\n         max-width: none;\n         margin: 0\n     }\n     .portfolio-item .caption {\n         -webkit-transition: -webkit-clip-path .25s ease-out, background-color .7s;\n         -webkit-clip-path: inset(0);\n         clip-path: inset(0)\n     }\n     .portfolio-item .caption .caption-content {\n         transition: opacity .25s;\n         margin-left: 5rem;\n         margin-right: 5rem;\n         margin-bottom: 5rem\n     }\n     .portfolio-item img {\n         -webkit-transition: -webkit-clip-path .25s ease-out;\n         -webkit-clip-path: inset(-1px);\n         clip-path: inset(-1px)\n     }\n     .portfolio-item:hover img {\n         -webkit-clip-path: inset(2rem);\n         clip-path: inset(2rem)\n     }\n     .portfolio-item:hover .caption {\n         background-color: rgba(29, 128, 159, .9);\n         -webkit-clip-path: inset(2rem);\n         clip-path: inset(2rem)\n     }\n }\n\n footer.footer {\n     padding-top: 5rem;\n     padding-bottom: 5rem\n }\n\n footer.footer .social-link {\n     display: block;\n     height: 4rem;\n     width: 4rem;\n     line-height: 4.3rem;\n     font-size: 1.5rem;\n     background-color: #1d809f;\n     transition: background-color .15s ease-in-out;\n     box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .1)\n }\n\n footer.footer .social-link:hover {\n     background-color: #155d74;\n     text-decoration: none\n }\n\n a {\n     color: #1d809f\n }\n\n a:active,\n a:focus,\n a:hover {\n     color: #155d74\n }\n\n .btn-primary {\n     background-color: #1d809f!important;\n     border-color: #1d809f!important;\n     color: #fff!important\n }\n\n .btn-primary:active,\n .btn-primary:focus,\n .btn-primary:hover {\n     background-color: #155d74!important;\n     border-color: #155d74!important\n }\n\n .btn-secondary {\n     background-color: #ecb807!important;\n     border-color: #ecb807!important;\n     color: #fff!important\n }\n\n .btn-secondary:active,\n .btn-secondary:focus,\n .btn-secondary:hover {\n     background-color: #ba9106!important;\n     border-color: #ba9106!important\n }\n\n .btn-dark {\n     color: #fff!important\n }\n\n .btn {\n     box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .1);\n     font-weight: 700\n }\n\n .bg-primary {\n     background-color: #1d809f!important\n }\n\n .text-primary {\n     color: #1d809f!important\n }\n\n .text-secondary {\n     color: #ecb807!important\n }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJveWVjdG8tZW50cm8vcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7O0NBRUY7O0tBRUksWUFBWTtLQUNaLFlBQVk7RUFDZjs7Q0FFRDtLQUNJLDhCQUE4QjtFQUNqQzs7Q0FFRDtLQUNJLHVCQUF1QjtFQUMxQjs7Q0FFRDtLQUNJLGtCQUFrQjtLQUNsQixzQkFBc0I7RUFDekI7O0NBRUQ7S0FDSSxlQUFlO0VBQ2xCOztDQUVEO0tBQ0ksZ0JBQWdCO0tBQ2hCLHlCQUF5QjtFQUM1Qjs7Q0FFRDs7Ozs7O0tBTUksZ0JBQWdCO0VBQ25COztDQUVEO0tBQ0ksOEJBQThCO0VBQ2pDOztDQUVEO0tBQ0ksYUFBYTtFQUNoQjs7Q0FFRDtLQUNJO1NBQ0ksV0FBVztNQUNkO0VBQ0o7O0NBRUQ7S0FDSSxvQkFBb0I7RUFDdkI7O0NBRUQ7S0FDSSxnQkFBZ0I7S0FDaEIsWUFBWTtLQUNaLGFBQWE7S0FDYixjQUFjO0tBQ2QsWUFBWTtLQUNaLGFBQWE7S0FDYixtQkFBbUI7S0FDbkIsWUFBWTtLQUNaLGlDQUFpQztLQUNqQyxpQkFBaUI7RUFDcEI7O0NBRUQ7O0tBRUksV0FBVztFQUNkOztDQUVEO0tBQ0ksbUJBQW1CO0VBQ3RCOztDQUVEO0tBQ0ksZ0JBQWdCO0VBQ25COztDQUVEO0tBQ0ksa0JBQWtCO0tBQ2xCLG1CQUFtQjtLQUNuQixlQUFlO0tBQ2YsWUFBWTtLQUNaLGFBQWE7S0FDYixrQkFBa0I7S0FDbEIscUJBQXFCO0tBQ3JCLG1DQUFtQztLQUNuQyw2QkFBNkI7S0FDN0Isc0JBQXNCO0VBQ3pCOztDQUVEO0tBQ0ksZ0JBQWdCO0tBQ2hCLFVBQVU7S0FDVixVQUFVO0VBQ2I7O0NBRUQ7S0FDSTtTQUNJLGFBQWE7TUFDaEI7S0FDRDtTQUNJLGlCQUFpQjtNQUNwQjtFQUNKOztDQUVEO0tBQ0ksZ0JBQWdCO0tBQ2hCLFdBQVc7S0FDWCxTQUFTO0tBQ1QsYUFBYTtLQUNiLGFBQWE7S0FFYiw0QkFBNEI7S0FFNUIsNkJBQTZCO0tBQzdCLG9CQUFvQjtLQUNwQiw4Q0FBOEM7RUFDakQ7O0NBRUQ7S0FDSSxtQkFBbUI7S0FDbkIsT0FBTztLQUNQLGFBQWE7S0FDYixVQUFVO0tBQ1YsV0FBVztLQUNYLGdCQUFnQjtFQUNuQjs7Q0FFRDtLQUNJLGVBQWU7S0FDZixzQkFBc0I7S0FDdEIsWUFBWTtLQUNaLGFBQWE7RUFDaEI7O0NBRUQ7S0FDSSxzQkFBc0I7S0FDdEIsWUFBWTtLQUNaLG1DQUFtQztFQUN0Qzs7Q0FFRDs7S0FFSSxxQkFBcUI7RUFDeEI7O0NBRUQ7S0FDSSxrQkFBa0I7S0FDbEIsaUNBQWlDO0tBQ2pDLGFBQWE7S0FDYixrQkFBa0I7S0FDbEIsa0JBQWtCO0tBQ2xCLHFCQUFxQjtLQUNyQixrQkFBa0I7RUFDckI7O0NBRUQ7S0FDSSxXQUFXO0VBQ2Q7O0NBRUQ7S0FDSSxZQUFZO0tBQ1osZUFBZTtFQUNsQjs7Q0FFRDtLQUNJLGFBQWE7S0FDYixhQUFhO0tBRWIsMkJBQTJCO0VBQzlCOztDQUVEO0tBQ0ksZ0JBQWdCO0tBQ2hCLFlBQVk7S0FDWixVQUFVO0tBQ1YsWUFBWTtLQUNaLGFBQWE7S0FDYixtQkFBbUI7S0FDbkIsWUFBWTtLQUNaLGlDQUFpQztLQUNqQyxrQkFBa0I7S0FDbEIsWUFBWTtFQUNmOztDQUVEOztLQUVJLFdBQVc7RUFDZDs7Q0FFRDtLQUNJLG1CQUFtQjtFQUN0Qjs7Q0FFRDtLQUNJLHVCQUF1QjtLQUN2QixlQUFlO0tBQ2YsYUFBYTtLQUNiLFlBQVk7S0FDWixlQUFlO0tBQ2Ysb0JBQW9CO0tBQ3BCLG1CQUFtQjtLQUVuQix5Q0FBeUM7RUFDNUM7O0NBRUQ7S0FDSSxrQkFBa0I7S0FDbEIsaUJBQWlCO0tBQ2pCLGVBQWU7S0FDZixnQkFBZ0I7RUFDbkI7O0NBRUQ7S0FDSSxlQUFlO0tBQ2YsbUJBQW1CO0tBQ25CLGlCQUFpQjtLQUNqQixpQkFBaUI7S0FDakIsc0JBQXNCO0VBQ3pCOztDQUVEO0tBR0ksY0FBYztLQUNkLGFBQWE7S0FDYixZQUFZO0tBQ1osdUNBQXVDO0tBQ3ZDLG1CQUFtQjtLQUNuQixPQUFPO0tBQ1AsVUFBVTtLQUNWLFVBQVU7RUFDYjs7Q0FFRDtLQUNJLFlBQVk7S0FDWixzQkFBc0I7RUFDekI7O0NBRUQ7S0FDSSxpQkFBaUI7S0FDakIseUJBQXlCO0VBQzVCOztDQUVEO0tBQ0ksaUJBQWlCO0tBQ2pCLGlCQUFpQjtFQUNwQjs7Q0FFRDtLQUNJO1NBQ0ksZ0JBQWdCO1NBQ2hCLFNBQVM7TUFDWjtLQUNEO1NBQ0ksMEVBQTBFO1NBQzFFLDRCQUE0QjtTQUM1QixtQkFBbUI7TUFDdEI7S0FDRDtTQUVJLHlCQUF5QjtTQUN6QixrQkFBa0I7U0FDbEIsbUJBQW1CO1NBQ25CLG1CQUFtQjtNQUN0QjtLQUNEO1NBQ0ksb0RBQW9EO1NBQ3BELCtCQUErQjtTQUMvQixzQkFBc0I7TUFDekI7S0FDRDtTQUNJLCtCQUErQjtTQUMvQixzQkFBc0I7TUFDekI7S0FDRDtTQUNJLHlDQUF5QztTQUN6QywrQkFBK0I7U0FDL0Isc0JBQXNCO01BQ3pCO0VBQ0o7O0NBRUQ7S0FDSSxrQkFBa0I7S0FDbEIsb0JBQW9CO0VBQ3ZCOztDQUVEO0tBQ0ksZUFBZTtLQUNmLGFBQWE7S0FDYixZQUFZO0tBQ1osb0JBQW9CO0tBQ3BCLGtCQUFrQjtLQUNsQiwwQkFBMEI7S0FFMUIsOENBQThDO0tBRTlDLHlDQUF5QztFQUM1Qzs7Q0FFRDtLQUNJLDBCQUEwQjtLQUMxQixxQkFBcUI7RUFDeEI7O0NBRUQ7S0FDSSxjQUFjO0VBQ2pCOztDQUVEOzs7S0FHSSxjQUFjO0VBQ2pCOztDQUVEO0tBQ0ksb0NBQW9DO0tBQ3BDLGdDQUFnQztLQUNoQyxxQkFBcUI7RUFDeEI7O0NBRUQ7OztLQUdJLG9DQUFvQztLQUNwQywrQkFBK0I7RUFDbEM7O0NBRUQ7S0FDSSxvQ0FBb0M7S0FDcEMsZ0NBQWdDO0tBQ2hDLHFCQUFxQjtFQUN4Qjs7Q0FFRDs7O0tBR0ksb0NBQW9DO0tBQ3BDLCtCQUErQjtFQUNsQzs7Q0FFRDtLQUNJLHFCQUFxQjtFQUN4Qjs7Q0FFRDtLQUVJLDBDQUEwQztLQUMxQyxnQkFBZ0I7RUFDbkI7O0NBRUQ7S0FDSSxtQ0FBbUM7RUFDdEM7O0NBRUQ7S0FDSSx3QkFBd0I7RUFDM0I7O0NBRUQ7S0FDSSx3QkFBd0I7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wcm95ZWN0by1lbnRyby9wcmluY2lwYWwvcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIFN0YXJ0IEJvb3RzdHJhcCAtIFN0eWxpc2ggUG9ydGZvbGlvIHY1LjAuNSAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUtb3ZlcnZpZXdzL3N0eWxpc2gtcG9ydGZvbGlvKVxuICogQ29weXJpZ2h0IDIwMTMtMjAxOSBTdGFydCBCb290c3RyYXBcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0JsYWNrcm9ja0RpZ2l0YWwvc3RhcnRib290c3RyYXAtc3R5bGlzaC1wb3J0Zm9saW8vYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuXG4gYm9keSxcbiBodG1sIHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGhlaWdodDogMTAwJVxuIH1cbiBcbiBib2R5IHtcbiAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nXG4gfVxuIFxuIC5idG4teGwge1xuICAgICBwYWRkaW5nOiAxLjI1cmVtIDIuNXJlbVxuIH1cbiBcbiAuY29udGVudC1zZWN0aW9uIHtcbiAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgIHBhZGRpbmctYm90dG9tOiA3LjVyZW1cbiB9XG4gXG4gLmNvbnRlbnQtc2VjdGlvbi1oZWFkaW5nIGgyIHtcbiAgICAgZm9udC1zaXplOiAzcmVtXG4gfVxuIFxuIC5jb250ZW50LXNlY3Rpb24taGVhZGluZyBoMyB7XG4gICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuIH1cbiBcbiBoMSxcbiBoMixcbiBoMyxcbiBoNCxcbiBoNSxcbiBoNiB7XG4gICAgIGZvbnQtd2VpZ2h0OiA3MDBcbiB9XG4gXG4gLnRleHQtZmFkZWQge1xuICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNylcbiB9XG4gXG4gLm1hcCB7XG4gICAgIGhlaWdodDogMzByZW1cbiB9XG4gXG4gQG1lZGlhIChtYXgtd2lkdGg6OTkycHgpIHtcbiAgICAgLm1hcCB7XG4gICAgICAgICBoZWlnaHQ6IDc1JVxuICAgICB9XG4gfVxuIFxuIC5tYXAgaWZyYW1lIHtcbiAgICAgcG9pbnRlci1ldmVudHM6IG5vbmVcbiB9XG4gXG4gLnNjcm9sbC10by10b3Age1xuICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgIHJpZ2h0OiAxNXB4O1xuICAgICBib3R0b206IDE1cHg7XG4gICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgIHdpZHRoOiA1MHB4O1xuICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgY29sb3I6ICNmZmY7XG4gICAgIGJhY2tncm91bmQ6IHJnYmEoNTIsIDU4LCA2NCwgLjUpO1xuICAgICBsaW5lLWhlaWdodDogNDVweFxuIH1cbiBcbiAuc2Nyb2xsLXRvLXRvcDpmb2N1cyxcbiAuc2Nyb2xsLXRvLXRvcDpob3ZlciB7XG4gICAgIGNvbG9yOiAjZmZmXG4gfVxuIFxuIC5zY3JvbGwtdG8tdG9wOmhvdmVyIHtcbiAgICAgYmFja2dyb3VuZDogIzM0M2E0MFxuIH1cbiBcbiAuc2Nyb2xsLXRvLXRvcCBpIHtcbiAgICAgZm9udC13ZWlnaHQ6IDgwMFxuIH1cbiBcbiAubWFzdGhlYWQge1xuICAgICBtaW4taGVpZ2h0OiAzMHJlbTtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGhlaWdodDogYXV0bztcbiAgICAgcGFkZGluZy10b3A6IDhyZW07XG4gICAgIHBhZGRpbmctYm90dG9tOiA4cmVtO1xuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG4gfVxuIFxuIC5tYXN0aGVhZCBoMSB7XG4gICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgbWFyZ2luOiAwO1xuICAgICBwYWRkaW5nOiAwXG4gfVxuIFxuIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KSB7XG4gICAgIC5tYXN0aGVhZCB7XG4gICAgICAgICBoZWlnaHQ6IDEwMHZoXG4gICAgIH1cbiAgICAgLm1hc3RoZWFkIGgxIHtcbiAgICAgICAgIGZvbnQtc2l6ZTogNS41cmVtXG4gICAgIH1cbiB9XG4gXG4gI3NpZGViYXItd3JhcHBlciB7XG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgei1pbmRleDogMjtcbiAgICAgcmlnaHQ6IDA7XG4gICAgIHdpZHRoOiAyNTBweDtcbiAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZSAwcztcbiAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlIDBzO1xuICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNTBweCk7XG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNTBweCk7XG4gICAgIGJhY2tncm91bmQ6ICMxZDgwOWY7XG4gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSlcbiB9XG4gXG4gLnNpZGViYXItbmF2IHtcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICB0b3A6IDA7XG4gICAgIHdpZHRoOiAyNTBweDtcbiAgICAgbWFyZ2luOiAwO1xuICAgICBwYWRkaW5nOiAwO1xuICAgICBsaXN0LXN0eWxlOiBub25lXG4gfVxuIFxuIC5zaWRlYmFyLW5hdiBsaS5zaWRlYmFyLW5hdi1pdGVtIGEge1xuICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICBjb2xvcjogI2ZmZjtcbiAgICAgcGFkZGluZzogMTVweFxuIH1cbiBcbiAuc2lkZWJhci1uYXYgbGkgYTpob3ZlciB7XG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgY29sb3I6ICNmZmY7XG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpXG4gfVxuIFxuIC5zaWRlYmFyLW5hdiBsaSBhOmFjdGl2ZSxcbiAuc2lkZWJhci1uYXYgbGkgYTpmb2N1cyB7XG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuIH1cbiBcbiAuc2lkZWJhci1uYXY+LnNpZGViYXItYnJhbmQge1xuICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgYmFja2dyb3VuZDogcmdiYSg1MiwgNTgsIDY0LCAuMSk7XG4gICAgIGhlaWdodDogODBweDtcbiAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgcGFkZGluZy1sZWZ0OiAxNXB4XG4gfVxuIFxuIC5zaWRlYmFyLW5hdj4uc2lkZWJhci1icmFuZCBhIHtcbiAgICAgY29sb3I6ICNmZmZcbiB9XG4gXG4gLnNpZGViYXItbmF2Pi5zaWRlYmFyLWJyYW5kIGE6aG92ZXIge1xuICAgICBjb2xvcjogI2ZmZjtcbiAgICAgYmFja2dyb3VuZDogMCAwXG4gfVxuIFxuICNzaWRlYmFyLXdyYXBwZXIuYWN0aXZlIHtcbiAgICAgcmlnaHQ6IDI1MHB4O1xuICAgICB3aWR0aDogMjUwcHg7XG4gICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlIDBzO1xuICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UgMHNcbiB9XG4gXG4gLm1lbnUtdG9nZ2xlIHtcbiAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICByaWdodDogMTVweDtcbiAgICAgdG9wOiAxNXB4O1xuICAgICB3aWR0aDogNTBweDtcbiAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIGNvbG9yOiAjZmZmO1xuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCA1OCwgNjQsIC41KTtcbiAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgIHotaW5kZXg6IDk5OVxuIH1cbiBcbiAubWVudS10b2dnbGU6Zm9jdXMsXG4gLm1lbnUtdG9nZ2xlOmhvdmVyIHtcbiAgICAgY29sb3I6ICNmZmZcbiB9XG4gXG4gLm1lbnUtdG9nZ2xlOmhvdmVyIHtcbiAgICAgYmFja2dyb3VuZDogIzM0M2E0MFxuIH1cbiBcbiAuc2VydmljZS1pY29uIHtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgY29sb3I6ICMxZDgwOWY7XG4gICAgIGhlaWdodDogN3JlbTtcbiAgICAgd2lkdGg6IDdyZW07XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICBsaW5lLWhlaWdodDogNy41cmVtO1xuICAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgLjEpXG4gfVxuIFxuIC5jYWxsb3V0IGgyIHtcbiAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICBtYXgtd2lkdGg6IDMwcmVtXG4gfVxuIFxuIC5wb3J0Zm9saW8taXRlbSB7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgIG1heC13aWR0aDogNTMwcHg7XG4gICAgIG1hcmdpbjogYXV0byBhdXRvIDFyZW1cbiB9XG4gXG4gLnBvcnRmb2xpby1pdGVtIC5jYXB0aW9uIHtcbiAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzNywgNDEsIC4yKTtcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICB0b3A6IDA7XG4gICAgIGJvdHRvbTogMDtcbiAgICAgei1pbmRleDogMVxuIH1cbiBcbiAucG9ydGZvbGlvLWl0ZW0gLmNhcHRpb24gLmNhcHRpb24tY29udGVudCB7XG4gICAgIGNvbG9yOiAjZmZmO1xuICAgICBtYXJnaW46IGF1dG8gMnJlbSAycmVtXG4gfVxuIFxuIC5wb3J0Zm9saW8taXRlbSAuY2FwdGlvbiAuY2FwdGlvbi1jb250ZW50IGgyIHtcbiAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuIH1cbiBcbiAucG9ydGZvbGlvLWl0ZW0gLmNhcHRpb24gLmNhcHRpb24tY29udGVudCBwIHtcbiAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgZm9udC1zaXplOiAxLjJyZW1cbiB9XG4gXG4gQG1lZGlhIChtaW4td2lkdGg6OTkycHgpIHtcbiAgICAgLnBvcnRmb2xpby1pdGVtIHtcbiAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgIG1hcmdpbjogMFxuICAgICB9XG4gICAgIC5wb3J0Zm9saW8taXRlbSAuY2FwdGlvbiB7XG4gICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtY2xpcC1wYXRoIC4yNXMgZWFzZS1vdXQsIGJhY2tncm91bmQtY29sb3IgLjdzO1xuICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDApO1xuICAgICAgICAgY2xpcC1wYXRoOiBpbnNldCgwKVxuICAgICB9XG4gICAgIC5wb3J0Zm9saW8taXRlbSAuY2FwdGlvbiAuY2FwdGlvbi1jb250ZW50IHtcbiAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xuICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IDVyZW07XG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtXG4gICAgIH1cbiAgICAgLnBvcnRmb2xpby1pdGVtIGltZyB7XG4gICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtY2xpcC1wYXRoIC4yNXMgZWFzZS1vdXQ7XG4gICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoLTFweCk7XG4gICAgICAgICBjbGlwLXBhdGg6IGluc2V0KC0xcHgpXG4gICAgIH1cbiAgICAgLnBvcnRmb2xpby1pdGVtOmhvdmVyIGltZyB7XG4gICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoMnJlbSk7XG4gICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDJyZW0pXG4gICAgIH1cbiAgICAgLnBvcnRmb2xpby1pdGVtOmhvdmVyIC5jYXB0aW9uIHtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDEyOCwgMTU5LCAuOSk7XG4gICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoMnJlbSk7XG4gICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDJyZW0pXG4gICAgIH1cbiB9XG4gXG4gZm9vdGVyLmZvb3RlciB7XG4gICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbVxuIH1cbiBcbiBmb290ZXIuZm9vdGVyIC5zb2NpYWwtbGluayB7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICBoZWlnaHQ6IDRyZW07XG4gICAgIHdpZHRoOiA0cmVtO1xuICAgICBsaW5lLWhlaWdodDogNC4zcmVtO1xuICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFkODA5ZjtcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dDtcbiAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMSlcbiB9XG4gXG4gZm9vdGVyLmZvb3RlciAuc29jaWFsLWxpbms6aG92ZXIge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1ZDc0O1xuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiB9XG4gXG4gYSB7XG4gICAgIGNvbG9yOiAjMWQ4MDlmXG4gfVxuIFxuIGE6YWN0aXZlLFxuIGE6Zm9jdXMsXG4gYTpob3ZlciB7XG4gICAgIGNvbG9yOiAjMTU1ZDc0XG4gfVxuIFxuIC5idG4tcHJpbWFyeSB7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDgwOWYhaW1wb3J0YW50O1xuICAgICBib3JkZXItY29sb3I6ICMxZDgwOWYhaW1wb3J0YW50O1xuICAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnRcbiB9XG4gXG4gLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcbiAuYnRuLXByaW1hcnk6Zm9jdXMsXG4gLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1NWQ3NCFpbXBvcnRhbnQ7XG4gICAgIGJvcmRlci1jb2xvcjogIzE1NWQ3NCFpbXBvcnRhbnRcbiB9XG4gXG4gLmJ0bi1zZWNvbmRhcnkge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNiODA3IWltcG9ydGFudDtcbiAgICAgYm9yZGVyLWNvbG9yOiAjZWNiODA3IWltcG9ydGFudDtcbiAgICAgY29sb3I6ICNmZmYhaW1wb3J0YW50XG4gfVxuIFxuIC5idG4tc2Vjb25kYXJ5OmFjdGl2ZSxcbiAuYnRuLXNlY29uZGFyeTpmb2N1cyxcbiAuYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTkxMDYhaW1wb3J0YW50O1xuICAgICBib3JkZXItY29sb3I6ICNiYTkxMDYhaW1wb3J0YW50XG4gfVxuIFxuIC5idG4tZGFyayB7XG4gICAgIGNvbG9yOiAjZmZmIWltcG9ydGFudFxuIH1cbiBcbiAuYnRuIHtcbiAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgIGZvbnQtd2VpZ2h0OiA3MDBcbiB9XG4gXG4gLmJnLXByaW1hcnkge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ4MDlmIWltcG9ydGFudFxuIH1cbiBcbiAudGV4dC1wcmltYXJ5IHtcbiAgICAgY29sb3I6ICMxZDgwOWYhaW1wb3J0YW50XG4gfVxuIFxuIC50ZXh0LXNlY29uZGFyeSB7XG4gICAgIGNvbG9yOiAjZWNiODA3IWltcG9ydGFudFxuIH1cbiAiXX0= */"

/***/ }),

/***/ "./src/app/proyecto-entro/principal/principal.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/proyecto-entro/principal/principal.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-section\" id=\"portfolio\">\n  <div class=\"container\">\n      <div class=\"content-section-heading text-center\">\n          <h3 class=\"text-secondary mb-0\">Productos</h3>\n          <h2 class=\"mb-5\"> System</h2>\n      </div>\n      <div class=\"row no-gutters\">\n          <div class=\"col-lg-6\">\n              <a class=\"portfolio-item\" href=\"#\">\n                  <span class=\"caption\">\n          <span class=\"caption-content\">\n            <h2>Comprados</h2>\n            <p class=\"mb-0\">Productos comprados</p>\n          </span>\n                  </span>\n                  <img class=\"img-fluid\" src=\"../../../assets/image/portfolio-1.jpg\" alt=\"\">\n              </a>\n          </div>\n          <div class=\"col-lg-6\">\n              <a class=\"portfolio-item\" href=\"#\">\n                  <span class=\"caption\">\n          <span class=\"caption-content\">\n            <h2>Carrito de compras</h2>\n            <p class=\"mb-0\">Click para ver productos pendientes</p>\n          </span>\n                  </span>\n                  <img class=\"img-fluid\" src=\"../../../assets/image/portfolio-2.jpg\" alt=\"\">\n              </a>\n          </div>\n          <div class=\"col-lg-6\">\n              <a class=\"portfolio-item\" href=\"#\">\n                  <span class=\"caption\">\n          <span class=\"caption-content\">\n            <h2>Productos3</h2>\n            <p class=\"mb-0\">jnvsdjnvjsd</p>\n          </span>\n                  </span>\n                  <img class=\"img-fluid\" src=\"../../../assets/image/portfolio-3.jpg\" alt=\"\">\n              </a>\n          </div>\n          <div class=\"col-lg-6\">\n              <a class=\"portfolio-item\" href=\"#\">\n                  <span class=\"caption\">\n          <span class=\"caption-content\">\n            <h2>productos</h2>\n            <p class=\"mb-0\">ngvgnsdvgfsdv</p>\n          </span>\n                  </span>\n                  <img class=\"img-fluid\" src=\"../../../assets/image/portfolio-4.jpg\" alt=\"\">\n              </a>\n          </div>\n      </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/proyecto-entro/principal/principal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/proyecto-entro/principal/principal.component.ts ***!
  \*****************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/proyecto-entro/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/proyecto-entro/principal/principal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/proyecto-entro/proyecto-entro.component.css":
/*!*************************************************************!*\
  !*** ./src/app/proyecto-entro/proyecto-entro.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3llY3RvLWVudHJvL3Byb3llY3RvLWVudHJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/proyecto-entro/proyecto-entro.component.html":
/*!**************************************************************!*\
  !*** ./src/app/proyecto-entro/proyecto-entro.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-menu></app-menu>\n  <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/proyecto-entro/proyecto-entro.component.ts":
/*!************************************************************!*\
  !*** ./src/app/proyecto-entro/proyecto-entro.component.ts ***!
  \************************************************************/
/*! exports provided: ProyectoEntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoEntroComponent", function() { return ProyectoEntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProyectoEntroComponent = /** @class */ (function () {
    function ProyectoEntroComponent() {
    }
    ProyectoEntroComponent.prototype.ngOnInit = function () {
    };
    ProyectoEntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proyecto-entro',
            template: __webpack_require__(/*! ./proyecto-entro.component.html */ "./src/app/proyecto-entro/proyecto-entro.component.html"),
            styles: [__webpack_require__(/*! ./proyecto-entro.component.css */ "./src/app/proyecto-entro/proyecto-entro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProyectoEntroComponent);
    return ProyectoEntroComponent;
}());



/***/ }),

/***/ "./src/app/proyecto/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/proyecto/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\");\na.btn-social,\n.btn-social {\n    border-radius: 50%;\n    color: #ffffff !important;\n    display: inline-block;\n    height: 54px;\n    line-height: 54px;\n    margin: 8px 4px;\n    text-align: center;\n    text-decoration: none;\n    transition: background-color .3s;\n    width: 54px;\n}\n.btn-social .fa,\n.btn-social i {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    moz-backface-visibility: hidden;\n    ms-transform: scale(1);\n    o-transform: scale(1);\n    transform: scale(1);\n    transition: all .25s;\n    webkit-backface-visibility: hidden;\n    webkit-transform: scale(1);\n    webkit-transition: all .25s;\n}\n.btn-social:hover,\n.btn-social:focus {\n    color: #fff;\n    outline: none;\n    text-decoration: none;\n}\n.btn-social:hover .fa,\n.btn-social:focus .fa,\n.btn-social:hover i,\n.btn-social:focus i {\n    transform: scale(1.3);\n}\n.btn-social.btn-xs {\n    font-size: 9px;\n    height: 24px;\n    line-height: 13px;\n    margin: 6px 2px;\n    width: 24px;\n}\n.btn-social.btn-sm {\n    font-size: 13px;\n    height: 36px;\n    line-height: 18px;\n    margin: 6px 2px;\n    width: 36px;\n}\n.btn-social.btn-lg {\n    font-size: 22px;\n    height: 72px;\n    line-height: 40px;\n    margin: 10px 6px;\n    width: 72px;\n}\n.btn-behance {\n    background-color: #1769ff;\n}\n.btn-behance:hover {\n    background-color: #4a8aff;\n}\n.btn-bitbucket {\n    background-color: #205081;\n}\n.btn-bitbucket:hover {\n    background-color: #2a69aa;\n}\n.btn-codepen {\n    background-color: #76daff;\n}\n.btn-codepen:hover {\n    background-color: #a9e8ff;\n}\n.btn-deviantart {\n    background-color: #4e6252;\n}\n.btn-deviantart:hover {\n    background-color: #657e6a;\n}\n.btn-digg {\n    background-color: #000;\n}\n.btn-digg:hover {\n    background-color: #1a1a1a;\n}\n.btn-dribbble {\n    background-color: #ea4c89;\n}\n.btn-dribbble:hover {\n    background-color: #ef7aa7;\n}\n.btn-dropbox {\n    background-color: #007ee5;\n}\n.btn-dropbox:hover {\n    background-color: #1998ff;\n}\n.btn-facebook {\n    background-color: #3b5998;\n}\n.btn-facebook:hover {\n    background-color: #4c70ba;\n}\n.btn-flickr {\n    background-color: #0063dc;\n}\n.btn-flickr:hover {\n    background-color: #107cff;\n}\n.btn-foursquare {\n    background-color: #ef4b78;\n}\n.btn-foursquare:hover {\n    background-color: #f37a9b;\n}\n.btn-github {\n    background-color: #4183c4;\n}\n.btn-github:hover {\n    background-color: #689cd0;\n}\n.btn-google-plus {\n    background-color: #dd4b39;\n}\n.btn-google-plus:hover {\n    background-color: #e47365;\n}\n.btn-instagram {\n    background-color: #3f729b;\n}\n.btn-instagram:hover {\n    background-color: #548cb9;\n}\n.btn-jsfiddle {\n    background-color: #4679bd;\n}\n.btn-jsfiddle:hover {\n    background-color: #6c94ca;\n}\n.btn-lastfm {\n    background-color: #e31b23;\n}\n.btn-lastfm:hover {\n    background-color: #e9484e;\n}\n.btn-linkedin {\n    background-color: #0976b4;\n}\n.btn-linkedin:hover {\n    background-color: #0b96e5;\n}\n.btn-paypal {\n    background-color: #253b80;\n}\n.btn-paypal:hover {\n    background-color: #304da8;\n}\n.btn-pinterest {\n    background-color: #cc2127;\n}\n.btn-pinterest:hover {\n    background-color: #e04046;\n}\n.btn-reddit {\n    background-color: #ff4500;\n}\n.btn-reddit:hover {\n    background-color: #ff6a33;\n}\n.btn-skype {\n    background-color: #00aff0;\n}\n.btn-skype:hover {\n    background-color: #24c4ff;\n}\n.btn-soundcloud {\n    background-color: #f80;\n}\n.btn-soundcloud:hover {\n    background-color: #ffa033;\n}\n.btn-stack-overflow {\n    background-color: #fe7a15;\n}\n.btn-stack-overflow:hover {\n    background-color: #fe9748;\n}\n.btn-steam {\n    background-color: #7da10e;\n}\n.btn-steam:hover {\n    background-color: #a1d012;\n}\n.btn-stumbleupon {\n    background-color: #eb4924;\n}\n.btn-stumbleupon:hover {\n    background-color: #ef7053;\n}\n.btn-trello {\n    background-color: #256a92;\n}\n.btn-trello:hover {\n    background-color: #2f88bb;\n}\n.btn-tumblr {\n    background-color: #35465c;\n}\n.btn-tumblr:hover {\n    background-color: #485f7c;\n}\n.btn-twitch {\n    background-color: #6441a5;\n}\n.btn-twitch:hover {\n    background-color: #7e5bbe;\n}\n.btn-twitter {\n    background-color: #55acee;\n}\n.btn-twitter:hover {\n    background-color: #83c3f3;\n}\n.btn-vimeo {\n    background-color: #1ab7ea;\n}\n.btn-vimeo:hover {\n    background-color: #49c6ee;\n}\n.btn-vine {\n    background-color: #00b488;\n}\n.btn-vine:hover {\n    background-color: #00e7af;\n}\n.btn-vk {\n    background-color: #45668e;\n}\n.btn-vk:hover {\n    background-color: #587fae;\n}\n.btn-wechat {\n    background-color: #98d11c;\n}\n.btn-wechat:hover {\n    background-color: #afe53b;\n}\n.btn-wordpress {\n    background-color: #21759b;\n}\n.btn-wordpress:hover {\n    background-color: #2a95c5;\n}\n.btn-xing {\n    background-color: #026466;\n}\n.btn-xing:hover {\n    background-color: #039598;\n}\n.btn-yahoo {\n    background-color: #400191;\n}\n.btn-yahoo:hover {\n    background-color: #5601c4;\n}\n.btn-yelp {\n    background-color: #af0606;\n}\n.btn-yelp:hover {\n    background-color: #e00808;\n}\n.btn-youtube {\n    background-color: #e52d27;\n}\n.btn-youtube:hover {\n    background-color: #ea5955;\n}\n.btn-email {\n    background-color: #44c456;\n}\n.btn-email:hover {\n    background-color: #6bd079;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJveWVjdG8vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRjtBQUNyRjs7SUFFSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxZQUFZO0NBQ2Y7QUFFRDs7SUFFSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQiw0QkFBNEI7Q0FDL0I7QUFFRDs7SUFFSSxZQUFZO0lBQ1osY0FBYztJQUNkLHNCQUFzQjtDQUN6QjtBQUVEOzs7O0lBSUksc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmO0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmO0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtDQUNmO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9wcm95ZWN0by9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcIi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiKTtcbmEuYnRuLXNvY2lhbCxcbi5idG4tc29jaWFsIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICAgIG1hcmdpbjogOHB4IDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xuICAgIHdpZHRoOiA1NHB4O1xufVxuXG4uYnRuLXNvY2lhbCAuZmEsXG4uYnRuLXNvY2lhbCBpIHtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBtcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzO1xuICAgIHdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzO1xufVxuXG4uYnRuLXNvY2lhbDpob3Zlcixcbi5idG4tc29jaWFsOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0bi1zb2NpYWw6aG92ZXIgLmZhLFxuLmJ0bi1zb2NpYWw6Zm9jdXMgLmZhLFxuLmJ0bi1zb2NpYWw6aG92ZXIgaSxcbi5idG4tc29jaWFsOmZvY3VzIGkge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLmJ0bi1zb2NpYWwuYnRuLXhzIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgbWFyZ2luOiA2cHggMnB4O1xuICAgIHdpZHRoOiAyNHB4O1xufVxuXG4uYnRuLXNvY2lhbC5idG4tc20ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luOiA2cHggMnB4O1xuICAgIHdpZHRoOiAzNnB4O1xufVxuXG4uYnRuLXNvY2lhbC5idG4tbGcge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDZweDtcbiAgICB3aWR0aDogNzJweDtcbn1cblxuLmJ0bi1iZWhhbmNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc2OWZmO1xufVxuXG4uYnRuLWJlaGFuY2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YThhZmY7XG59XG5cbi5idG4tYml0YnVja2V0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA1MDgxO1xufVxuXG4uYnRuLWJpdGJ1Y2tldDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhNjlhYTtcbn1cblxuLmJ0bi1jb2RlcGVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzZkYWZmO1xufVxuXG4uYnRuLWNvZGVwZW46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWU4ZmY7XG59XG5cbi5idG4tZGV2aWFudGFydCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNjI1Mjtcbn1cblxuLmJ0bi1kZXZpYW50YXJ0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU3ZTZhO1xufVxuXG4uYnRuLWRpZ2cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5idG4tZGlnZzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcbn1cblxuLmJ0bi1kcmliYmJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNGM4OTtcbn1cblxuLmJ0bi1kcmliYmJsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmN2FhNztcbn1cblxuLmJ0bi1kcm9wYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZWU1O1xufVxuXG4uYnRuLWRyb3Bib3g6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTk4ZmY7XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG59XG5cbi5idG4tZmFjZWJvb2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzcwYmE7XG59XG5cbi5idG4tZmxpY2tyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2M2RjO1xufVxuXG4uYnRuLWZsaWNrcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwN2NmZjtcbn1cblxuLmJ0bi1mb3Vyc3F1YXJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0Yjc4O1xufVxuXG4uYnRuLWZvdXJzcXVhcmU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzdhOWI7XG59XG5cbi5idG4tZ2l0aHViIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4M2M0O1xufVxuXG4uYnRuLWdpdGh1Yjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4OWNkMDtcbn1cblxuLmJ0bi1nb29nbGUtcGx1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbn1cblxuLmJ0bi1nb29nbGUtcGx1czpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0NzM2NTtcbn1cblxuLmJ0bi1pbnN0YWdyYW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjcyOWI7XG59XG5cbi5idG4taW5zdGFncmFtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ4Y2I5O1xufVxuXG4uYnRuLWpzZmlkZGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY3OWJkO1xufVxuXG4uYnRuLWpzZmlkZGxlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM5NGNhO1xufVxuXG4uYnRuLWxhc3RmbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzMWIyMztcbn1cblxuLmJ0bi1sYXN0Zm06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTQ4NGU7XG59XG5cbi5idG4tbGlua2VkaW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTc2YjQ7XG59XG5cbi5idG4tbGlua2VkaW46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjk2ZTU7XG59XG5cbi5idG4tcGF5cGFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUzYjgwO1xufVxuXG4uYnRuLXBheXBhbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGRhODtcbn1cblxuLmJ0bi1waW50ZXJlc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzIxMjc7XG59XG5cbi5idG4tcGludGVyZXN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0MDQ2O1xufVxuXG4uYnRuLXJlZGRpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDUwMDtcbn1cblxuLmJ0bi1yZWRkaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZhMzM7XG59XG5cbi5idG4tc2t5cGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFmZjA7XG59XG5cbi5idG4tc2t5cGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNGM0ZmY7XG59XG5cbi5idG4tc291bmRjbG91ZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4MDtcbn1cblxuLmJ0bi1zb3VuZGNsb3VkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMDMzO1xufVxuXG4uYnRuLXN0YWNrLW92ZXJmbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU3YTE1O1xufVxuXG4uYnRuLXN0YWNrLW92ZXJmbG93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU5NzQ4O1xufVxuXG4uYnRuLXN0ZWFtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2RhMTBlO1xufVxuXG4uYnRuLXN0ZWFtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFkMDEyO1xufVxuXG4uYnRuLXN0dW1ibGV1cG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI0OTI0O1xufVxuXG4uYnRuLXN0dW1ibGV1cG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY3MDUzO1xufVxuXG4uYnRuLXRyZWxsbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NmE5Mjtcbn1cblxuLmJ0bi10cmVsbG86aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjg4YmI7XG59XG5cbi5idG4tdHVtYmxyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0NjVjO1xufVxuXG4uYnRuLXR1bWJscjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NWY3Yztcbn1cblxuLmJ0bi10d2l0Y2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDQxYTU7XG59XG5cbi5idG4tdHdpdGNoOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U1YmJlO1xufVxuXG4uYnRuLXR3aXR0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG59XG5cbi5idG4tdHdpdHRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzYzNmMztcbn1cblxuLmJ0bi12aW1lbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYjdlYTtcbn1cblxuLmJ0bi12aW1lbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzZlZTtcbn1cblxuLmJ0bi12aW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiNDg4O1xufVxuXG4uYnRuLXZpbmU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGU3YWY7XG59XG5cbi5idG4tdmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTY2OGU7XG59XG5cbi5idG4tdms6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdmYWU7XG59XG5cbi5idG4td2VjaGF0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThkMTFjO1xufVxuXG4uYnRuLXdlY2hhdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmZTUzYjtcbn1cblxuLmJ0bi13b3JkcHJlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTc1OWI7XG59XG5cbi5idG4td29yZHByZXNzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5NWM1O1xufVxuXG4uYnRuLXhpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjY0NjY7XG59XG5cbi5idG4teGluZzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzOTU5ODtcbn1cblxuLmJ0bi15YWhvbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwMDE5MTtcbn1cblxuLmJ0bi15YWhvbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2MDFjNDtcbn1cblxuLmJ0bi15ZWxwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWYwNjA2O1xufVxuXG4uYnRuLXllbHA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDA4MDg7XG59XG5cbi5idG4teW91dHViZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MmQyNztcbn1cblxuLmJ0bi15b3V0dWJlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1OTU1O1xufVxuXG4uYnRuLWVtYWlsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRjNDU2O1xufVxuXG4uYnRuLWVtYWlsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmJkMDc5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/proyecto/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/proyecto/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small special-color-dark pt-4 bg-primary\">\n\n  <ul class=\"list-unstyled list-inline text-center text-white\">\n      <li class=\"list-inline-item\">\n          <a class=\"btn-floating btn-fb mx-1\">\n              <a href=\"#\" target=\"_blank\" class=\"btn-social btn-facebook\"><i class=\"fa fa-facebook\"></i></a>\n          </a>\n      </li>\n      <li class=\"list-inline-item\">\n          <a class=\"btn-floating btn-li mx-1\">\n              <a href=\"#\" target=\"_blank\" class=\"btn-social btn-youtube\"><i class=\"fa fa-youtube\"></i></a>\n          </a>\n      </li>\n      <li class=\"list-inline-item\">\n          <a class=\"btn-floating btn-li mx-1\">\n              <a href=\"#\" target=\"_blank\" class=\"btn-social btn-google-plus\"><i class=\"fa fa-google-plus\"></i></a>\n          </a>\n      </li>\n      <li class=\"list-inline-item\">\n          <a class=\"btn-floating btn-li mx-1\">\n              <a href=\"#\" target=\"_blank\" class=\"btn-social btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n          </a>\n      </li>\n      <li class=\"list-inline-item\">\n          <a class=\"btn-floating btn-li mx-1\">\n              <a href=\"#\" target=\"_blank\" class=\"btn-social btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n          </a>\n      </li>\n  </ul>\n  <div class=\"footer-copyright text-center py-3 text-white\">© 2019 Sistema de venta\n\n  </div>\n</footer>\n\n<!--\n<div class=\"container\">\n  <div class=\"row\">\n      <br/><br/>\n      <div class=\"col-md-12\">\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-behance\"><i class=\"fa fa-behance\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-bitbucket\"><i class=\"fa fa-bitbucket\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-codepen\"><i class=\"fa fa-codepen\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-deviantart\"><i class=\"fa fa-deviantart\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-digg\"><i class=\"fa fa-digg\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-dropbox\"><i class=\"fa fa-dropbox\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-facebook\"><i class=\"fa fa-facebook\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-flickr\"><i class=\"fa fa-flickr\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-foursquare\"><i class=\"fa fa-foursquare\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-github\"><i class=\"fa fa-github-alt\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-google-plus\"><i class=\"fa fa-google-plus\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-jsfiddle\"><i class=\"fa fa-jsfiddle\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-lastfm\"><i class=\"fa fa-lastfm\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-paypal\"><i class=\"fa fa-paypal\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-pinterest\"><i class=\"fa fa-pinterest\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-reddit\"><i class=\"fa fa-reddit\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-skype\"><i class=\"fa fa-skype\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-soundcloud\"><i class=\"fa fa-soundcloud\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-stack-overflow\"><i class=\"fa fa-stack-overflow\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-steam\"><i class=\"fa fa-steam\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-stumbleupon\"><i class=\"fa fa-stumbleupon\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-trello\"><i class=\"fa fa-trello\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-tumblr\"><i class=\"fa fa-tumblr\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-twitch\"><i class=\"fa fa-twitch\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-vimeo\"><i class=\"fa fa-vimeo-square\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-vine\"><i class=\"fa fa-vine\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-vk\"><i class=\"fa fa-vk\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-wechat\"><i class=\"fa fa-wechat\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-wordpress\"><i class=\"fa fa-wordpress\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-xing\"><i class=\"fa fa-xing\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-yahoo\"><i class=\"fa fa-yahoo\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-yelp\"><i class=\"fa fa-yelp\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-youtube\"><i class=\"fa fa-youtube\"></i></a>\n          <a href=\"http://scripteden.com/download/eden-ui/\" target=\"_blank\" class=\"btn-social btn-email\"><i class=\"fa fa-envelope\"></i></a>\n      </div>\n  </div>\n</div>-->"

/***/ }),

/***/ "./src/app/proyecto/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/proyecto/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/proyecto/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/proyecto/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/proyecto/menu/menu.component.css":
/*!**************************************************!*\
  !*** ./src/app/proyecto/menu/menu.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3llY3RvL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/proyecto/menu/menu.component.html":
/*!***************************************************!*\
  !*** ./src/app/proyecto/menu/menu.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n  <a class=\"navbar-brand\">\n      <img src=\"favicon.ico\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n<span class=\"navbar-toggler-icon\"></span>\n</button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto\">\n          <!--<li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['Inicio']\">Inicio</a>\n          </li>-->\n          <!--<li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['Servicios']\">Servicios</a>\n          </li>-->\n          <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['Productos1']\">Productos</a>\n          </li>\n          <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['Productos2']\">Productos 2</a>\n          </li>\n          <!--<li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"['Colegios']\">Colegios</a>\n          </li>-->\n      </ul>\n      <form class=\"form-inline mt-2 mt-md-0 \">\n\n          <button class=\"btn btn-outline-light my-2 my-sm-0 mr-sm-2\" type=\"button\" [routerLink]=\"['/login']\">Iniciar Sesion</button>\n\n          <button class=\"btn btn-outline-light my-2 my-sm-0 mr-sm-2\" type=\"button\" [routerLink]=\"['/Registro']\">Registrate</button>\n\n      </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/proyecto/menu/menu.component.ts":
/*!*************************************************!*\
  !*** ./src/app/proyecto/menu/menu.component.ts ***!
  \*************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/proyecto/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/proyecto/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/proyecto/productos1-productos/productos1-productos.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/proyecto/productos1-productos/productos1-productos.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-logo {\n    width: 120px;\n}\n\n\n/* You can add global styles to this file, and also import other style files */\n\n\nbody {\n    padding-bottom: 50px;\n}\n\n\n.main-container {\n    margin-top: 20px;\n}\n\n\n.img-logo {\n    width: 120px;\n}\n\n\n/*Animaciones*/\n\n\n.animated {\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n\n.fast {\n    -webkit-animation-duration: 0.4s;\n    animation-duration: 0.4s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n\n@-webkit-keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n\n.fadeIn {\n    -webkit-animation-name: fadeIn;\n            animation-name: fadeIn;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJveWVjdG8vcHJvZHVjdG9zMS1wcm9kdWN0b3MvcHJvZHVjdG9zMS1wcm9kdWN0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEI7OztBQUdELCtFQUErRTs7O0FBRS9FO0lBQ0kscUJBQXFCO0NBQ3hCOzs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOzs7QUFHRCxlQUFlOzs7QUFFZjtJQUNJLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLDBCQUEwQjtDQUM3Qjs7O0FBRUQ7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQywwQkFBMEI7Q0FDN0I7OztBQUVEO0lBQ0k7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLFdBQVc7S0FDZDtDQUNKOzs7QUFQRDtJQUNJO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7Q0FDSjs7O0FBRUQ7SUFDSSwrQkFBdUI7WUFBdkIsdUJBQXVCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvcHJveWVjdG8vcHJvZHVjdG9zMS1wcm9kdWN0b3MvcHJvZHVjdG9zMS1wcm9kdWN0b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctbG9nbyB7XG4gICAgd2lkdGg6IDEyMHB4O1xufVxuXG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuYm9keSB7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmltZy1sb2dvIHtcbiAgICB3aWR0aDogMTIwcHg7XG59XG5cblxuLypBbmltYWNpb25lcyovXG5cbi5hbmltYXRlZCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5mYXN0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLmZhZGVJbiB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/proyecto/productos1-productos/productos1-productos.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/proyecto/productos1-productos/productos1-productos.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ producto.nombre | uppercase }} <small> 1962-08-01 | date: 'y' </small></h1>\n<hr>\n\n<div class=\"row animated fadeIn fast\">\n    <div class=\"col-md-4\">\n        <img src=\"../../../assets/image/intranet.jpg\" class=\"img-fluid\" alt=\"\">\n        <br><br>\n        <a [routerLink]=\"['/System/Productos1']\" class=\"btn btn-outline-primary btn-block\">Regresar</a>\n    </div>\n    <div class=\"col-md-8\">\n        <h3>Nombre del Producto</h3>\n        <hr>\n        <p>\n            Bio del Producto\n        </p>\n        <div>\n            <img *ngIf=\"producto.descripcion=='Computadora en venta'\" src=\"../../../assets/image/intranet.jpg\" alt=\"\" class=\"img-logo\">\n            <img *ngIf=\"producto.descripcion=='null'\" src=\"../../../assets/image/nota.png\" alt=\"\" class=\"img-logo\">\n        </div>\n    </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/proyecto/productos1-productos/productos1-productos.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/proyecto/productos1-productos/productos1-productos.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Productos1ProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Productos1ProductosComponent", function() { return Productos1ProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicio_school_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicio/school.service */ "./src/app/proyecto/servicio/school.service.ts");




var Productos1ProductosComponent = /** @class */ (function () {
    function Productos1ProductosComponent(activatedRoute, _schoolsService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._schoolsService = _schoolsService;
        this.producto = [];
        this.activatedRoute.params.subscribe(function (params) {
            _this.producto = _this._schoolsService.getProducto1(params['id']);
        });
    }
    Productos1ProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos1-productos',
            template: __webpack_require__(/*! ./productos1-productos.component.html */ "./src/app/proyecto/productos1-productos/productos1-productos.component.html"),
            styles: [__webpack_require__(/*! ./productos1-productos.component.css */ "./src/app/proyecto/productos1-productos/productos1-productos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _servicio_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolsService"]])
    ], Productos1ProductosComponent);
    return Productos1ProductosComponent;
}());



/***/ }),

/***/ "./src/app/proyecto/productos1/productos1.component.css":
/*!**************************************************************!*\
  !*** ./src/app/proyecto/productos1/productos1.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#team {\n    background: #eee !important;\n}\n\n.btn-primary:hover,\n.btn-primary:focus {\n    box-shadow: none;\n    outline: none;\n}\n\n.btn-primary {\n    color: #fff;\n}\n\nsection {\n    padding: 60px 0;\n}\n\nsection .section-title {\n    text-align: center;\n    margin-bottom: 50px;\n    text-transform: uppercase;\n}\n\n#team .card {\n    border: none;\n    background: #ffffff;\n}\n\n.image-flip:hover .backside,\n.image-flip.hover .backside {\n    transform: rotateY(0deg);\n    border-radius: .25rem;\n}\n\n.image-flip:hover .frontside,\n.image-flip.hover .frontside {\n    transform: rotateY(180deg);\n}\n\n.mainflip {\n    -webkit-transition: 1s;\n    -webkit-transform-style: preserve-3d;\n    -ms-transition: 1s;\n    -moz-transition: 1s;\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    transition: 1s;\n    transform-style: preserve-3d;\n    position: relative;\n}\n\n.frontside {\n    position: relative;\n    z-index: 2;\n    margin-bottom: 30px;\n}\n\n.backside {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: white;\n    transform: rotateY(-180deg);\n    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);\n}\n\n.frontside,\n.backside {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transition: 1s;\n    -webkit-transform-style: preserve-3d;\n    -moz-transition: 1s;\n    -moz-transform-style: preserve-3d;\n    -o-transition: 1s;\n    -o-transform-style: preserve-3d;\n    -ms-transition: 1s;\n    -ms-transform-style: preserve-3d;\n    transition: 1s;\n    transform-style: preserve-3d;\n}\n\n.frontside .card,\n.backside .card {\n    min-height: 312px;\n}\n\n.backside .card a {\n    font-size: 18px;\n    color: #007b5e !important;\n}\n\n.frontside .card .card-title,\n.backside .card .card-title {\n    color: #007b5e !important;\n}\n\n.frontside .card .card-body img {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n}\n\n.espacio-icon {\n    margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJveWVjdG8vcHJvZHVjdG9zMS9wcm9kdWN0b3MxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7Q0FDL0I7O0FBRUQ7O0lBRUksaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7O0FBRUQ7O0lBTUkseUJBQXlCO0lBQ3pCLHNCQUFzQjtDQUN6Qjs7QUFFRDs7SUFLSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCO0lBS2xCLDRCQUE0QjtJQUc1QixnREFBZ0Q7Q0FDbkQ7O0FBRUQ7O0lBRUksb0NBQW9DO0lBR3BDLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZiw2QkFBNkI7Q0FDaEM7O0FBRUQ7O0lBRUksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtDQUM3Qjs7QUFFRDs7SUFFSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Byb3llY3RvL3Byb2R1Y3RvczEvcHJvZHVjdG9zMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RlYW0ge1xuICAgIGJhY2tncm91bmQ6ICNlZWUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxuLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDYwcHggMDtcbn1cblxuc2VjdGlvbiAuc2VjdGlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI3RlYW0gLmNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uaW1hZ2UtZmxpcDpob3ZlciAuYmFja3NpZGUsXG4uaW1hZ2UtZmxpcC5ob3ZlciAuYmFja3NpZGUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG5cbi5pbWFnZS1mbGlwOmhvdmVyIC5mcm9udHNpZGUsXG4uaW1hZ2UtZmxpcC5ob3ZlciAuZnJvbnRzaWRlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5tYWluZmxpcCB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1zLXRyYW5zaXRpb246IDFzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogMXM7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zaXRpb246IDFzO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZnJvbnRzaWRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYmFja3NpZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggN3B4IDlweCAtNHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDVweCA3cHggOXB4IC00cHggcmdiKDE1OCwgMTU4LCAxNTgpO1xuICAgIGJveC1zaGFkb3c6IDVweCA3cHggOXB4IC00cHggcmdiKDE1OCwgMTU4LCAxNTgpO1xufVxuXG4uZnJvbnRzaWRlLFxuLmJhY2tzaWRlIHtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtbXMtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbW96LXRyYW5zaXRpb246IDFzO1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtby10cmFuc2l0aW9uOiAxcztcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tcy10cmFuc2l0aW9uOiAxcztcbiAgICAtbXMtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4uZnJvbnRzaWRlIC5jYXJkLFxuLmJhY2tzaWRlIC5jYXJkIHtcbiAgICBtaW4taGVpZ2h0OiAzMTJweDtcbn1cblxuLmJhY2tzaWRlIC5jYXJkIGEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzAwN2I1ZSAhaW1wb3J0YW50O1xufVxuXG4uZnJvbnRzaWRlIC5jYXJkIC5jYXJkLXRpdGxlLFxuLmJhY2tzaWRlIC5jYXJkIC5jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogIzAwN2I1ZSAhaW1wb3J0YW50O1xufVxuXG4uZnJvbnRzaWRlIC5jYXJkIC5jYXJkLWJvZHkgaW1nIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lc3BhY2lvLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/proyecto/productos1/productos1.component.html":
/*!***************************************************************!*\
  !*** ./src/app/proyecto/productos1/productos1.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 mx-auto text-center\">\n      <img src=\"assets/image/intranet.jpg\" class=\"img-fluid align-items-center\" alt=\"Responsive image\">\n  </div>\n</div>\n<!-- Team -->\n<section id=\"team\" class=\"pb-5\">\n  <div class=\"container\">\n      <h5 class=\"section-title h1 text-black-50\">Productos</h5>\n      <div class=\"row\">\n          <!-- Team member -->\n          <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let productos of producto1; let i = index\">\n              <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                  <div class=\"mainflip\">\n                      <div class=\"frontside\">\n                          <div class=\"card\">\n                              <div class=\"card-body text-center\">\n                                  <p><img class=\" img-fluid\" [src]=\"productos.imgAlumno\" alt=\"card image\"></p>\n                                  <h4 class=\"text-primary\">{{ productos.nombre }}</h4>\n                                  <p class=\"card-text \">{{ productos.descripcion }}</p>\n                                  <i class=\"fa fa-star fa-2x text-warning espacio-icon\" aria-hidden=\"true\"></i>\n                                  <i class=\"fa fa-star fa-2x text-warning espacio-icon\" aria-hidden=\"true\"></i>\n                                  <i class=\"fa fa-star fa-2x text-warning espacio-icon\" aria-hidden=\"true\"></i>\n                                  <i class=\"fa fa-star fa-2x text-warning espacio-icon\" aria-hidden=\"true\"></i>\n                                  <i class=\"fa fa-star fa-2x text-warning espacio-icon\" aria-hidden=\"true\"></i>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"backside\">\n                          <div class=\"card\">\n                              <div class=\"card-body text-center mt-4\">\n                                  <h4 class=\"text-primary\">{{ productos.nombre }}</h4>\n                                  <img [src]=\"productos.imgColegio\" class=\"img-fluid\" width=\"75%\" height=\"75%\">\n                                  <ul class=\"list-inline\">\n                                      <button type=\"button\" class=\"btn btn-outline-primary btn-block\" (click)=\"verProducto(i)\">Ingresar</button>\n                                  </ul>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <!-- ./Team member -->\n\n\n      </div>\n  </div>\n</section>\n<!-- Team -->\n"

/***/ }),

/***/ "./src/app/proyecto/productos1/productos1.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/proyecto/productos1/productos1.component.ts ***!
  \*************************************************************/
/*! exports provided: Productos1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Productos1Component", function() { return Productos1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicio_school_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicio/school.service */ "./src/app/proyecto/servicio/school.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Productos1Component = /** @class */ (function () {
    function Productos1Component(_schoolsService, router) {
        this._schoolsService = _schoolsService;
        this.router = router;
        this.producto1 = [];
    }
    Productos1Component.prototype.ngOnInit = function () {
        this.producto1 = this._schoolsService.getProductos1();
    };
    Productos1Component.prototype.verProducto = function (idx) {
        this.router.navigate(['System/Productos1/Producto', idx]);
    };
    Productos1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos1',
            template: __webpack_require__(/*! ./productos1.component.html */ "./src/app/proyecto/productos1/productos1.component.html"),
            styles: [__webpack_require__(/*! ./productos1.component.css */ "./src/app/proyecto/productos1/productos1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicio_school_service__WEBPACK_IMPORTED_MODULE_2__["SchoolsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Productos1Component);
    return Productos1Component;
}());



/***/ }),

/***/ "./src/app/proyecto/productos2/productos2.component.css":
/*!**************************************************************!*\
  !*** ./src/app/proyecto/productos2/productos2.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#team {\n    background: #eee !important;\n}\n\n.btn-primary:hover,\n.btn-primary:focus {\n    background-color: #108d6f;\n    border-color: #108d6f;\n    box-shadow: none;\n    outline: none;\n}\n\n.btn-primary {\n    color: #fff;\n    background-color: #007b5e;\n    border-color: #007b5e;\n}\n\nsection {\n    padding: 60px 0;\n}\n\nsection .section-title {\n    text-align: center;\n    color: #007b5e;\n    margin-bottom: 50px;\n    text-transform: uppercase;\n}\n\n#team .card {\n    border: none;\n    background: #ffffff;\n}\n\n.image-flip:hover .backside,\n.image-flip.hover .backside {\n    transform: rotateY(0deg);\n    border-radius: .25rem;\n}\n\n.image-flip:hover .frontside,\n.image-flip.hover .frontside {\n    transform: rotateY(180deg);\n}\n\n.mainflip {\n    -webkit-transition: 1s;\n    -webkit-transform-style: preserve-3d;\n    -ms-transition: 1s;\n    -moz-transition: 1s;\n    -moz-transform: perspective(1000px);\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    transition: 1s;\n    transform-style: preserve-3d;\n    position: relative;\n}\n\n.frontside {\n    position: relative;\n    -webkit-transform: rotateY(0deg);\n    -ms-transform: rotateY(0deg);\n    z-index: 2;\n    margin-bottom: 30px;\n}\n\n.backside {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: white;\n    transform: rotateY(-180deg);\n    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);\n}\n\n.frontside,\n.backside {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transition: 1s;\n    -webkit-transform-style: preserve-3d;\n    -moz-transition: 1s;\n    -moz-transform-style: preserve-3d;\n    -o-transition: 1s;\n    -o-transform-style: preserve-3d;\n    -ms-transition: 1s;\n    -ms-transform-style: preserve-3d;\n    transition: 1s;\n    transform-style: preserve-3d;\n}\n\n.frontside .card,\n.backside .card {\n    min-height: 312px;\n}\n\n.backside .card a {\n    font-size: 18px;\n    color: #007b5e !important;\n}\n\n.frontside .card .card-title,\n.backside .card .card-title {\n    color: #007b5e !important;\n}\n\n.frontside .card .card-body img {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJveWVjdG8vcHJvZHVjdG9zMi9wcm9kdWN0b3MyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7Q0FDL0I7O0FBRUQ7O0lBRUksMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtDQUN2Qjs7QUFFRDs7SUFNSSx5QkFBeUI7SUFDekIsc0JBQXNCO0NBQ3pCOztBQUVEOztJQUtJLDJCQUEyQjtDQUM5Qjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFLbEIsNEJBQTRCO0lBRzVCLGdEQUFnRDtDQUNuRDs7QUFFRDs7SUFFSSxvQ0FBb0M7SUFHcEMsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLDZCQUE2QjtDQUNoQzs7QUFFRDs7SUFFSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0NBQzdCOztBQUVEOztJQUVJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHJveWVjdG8vcHJvZHVjdG9zMi9wcm9kdWN0b3MyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGVhbSB7XG4gICAgYmFja2dyb3VuZDogI2VlZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIsXG4uYnRuLXByaW1hcnk6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDhkNmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTA4ZDZmO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YjVlO1xuICAgIGJvcmRlci1jb2xvcjogIzAwN2I1ZTtcbn1cblxuc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNjBweCAwO1xufVxuXG5zZWN0aW9uIC5zZWN0aW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDdiNWU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jdGVhbSAuY2FyZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5pbWFnZS1mbGlwOmhvdmVyIC5iYWNrc2lkZSxcbi5pbWFnZS1mbGlwLmhvdmVyIC5iYWNrc2lkZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cblxuLmltYWdlLWZsaXA6aG92ZXIgLmZyb250c2lkZSxcbi5pbWFnZS1mbGlwLmhvdmVyIC5mcm9udHNpZGUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLm1haW5mbGlwIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbXMtdHJhbnNpdGlvbjogMXM7XG4gICAgLW1vei10cmFuc2l0aW9uOiAxcztcbiAgICAtbW96LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mcm9udHNpZGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJhY2tzaWRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDdweCA5cHggLTRweCByZ2IoMTU4LCAxNTgsIDE1OCk7XG4gICAgLW1vei1ib3gtc2hhZG93OiA1cHggN3B4IDlweCAtNHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcbiAgICBib3gtc2hhZG93OiA1cHggN3B4IDlweCAtNHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcbn1cblxuLmZyb250c2lkZSxcbi5iYWNrc2lkZSB7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2l0aW9uOiAxcztcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW8tdHJhbnNpdGlvbjogMXM7XG4gICAgLW8tdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbXMtdHJhbnNpdGlvbjogMXM7XG4gICAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmZyb250c2lkZSAuY2FyZCxcbi5iYWNrc2lkZSAuY2FyZCB7XG4gICAgbWluLWhlaWdodDogMzEycHg7XG59XG5cbi5iYWNrc2lkZSAuY2FyZCBhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMwMDdiNWUgIWltcG9ydGFudDtcbn1cblxuLmZyb250c2lkZSAuY2FyZCAuY2FyZC10aXRsZSxcbi5iYWNrc2lkZSAuY2FyZCAuY2FyZC10aXRsZSB7XG4gICAgY29sb3I6ICMwMDdiNWUgIWltcG9ydGFudDtcbn1cblxuLmZyb250c2lkZSAuY2FyZCAuY2FyZC1ib2R5IGltZyB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/proyecto/productos2/productos2.component.html":
/*!***************************************************************!*\
  !*** ./src/app/proyecto/productos2/productos2.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 mx-auto text-center\">\n      <img src=\"assets/image/intranet.jpg\" class=\"img-fluid align-items-center\" alt=\"Responsive image\">\n  </div>\n</div>\n<!-- Team -->\n<section id=\"team\" class=\"pb-5\">\n  <div class=\"container\">\n      <h5 class=\"section-title h1 text-black-50\">Productos 2</h5>\n      <div class=\"row\">\n          <!-- Team member -->\n          <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let productos of producto2\">\n              <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                  <div class=\"mainflip\">\n                      <div class=\"frontside\">\n                          <div class=\"card\">\n                              <div class=\"card-body text-center\">\n                                  <p><img class=\" img-fluid\" [src]=\"productos.imgDocente\" alt=\"card image\"></p>\n                                  <h4 class=\"text-primary\">{{ productos.nombre }}</h4>\n                                  <p class=\"card-text \">{{ productos.descripcion }}</p>\n                                  <i class=\"fa fa-star fa-2x text-warning espacio-icon\" aria-hidden=\"true\"></i>\n                                  <i class=\"fa fa-star fa-2x text-warning espacio-icon\" aria-hidden=\"true\"></i>\n                                  <i class=\"fa fa-star fa-2x text-warning espacio-icon\" aria-hidden=\"true\"></i>\n                                  <i class=\"fa fa-star fa-2x text-warning espacio-icon\" aria-hidden=\"true\"></i>\n                                  <i class=\"fa fa-star fa-2x text-warning espacio-icon\" aria-hidden=\"true\"></i>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"backside\">\n                          <div class=\"card\">\n                              <div class=\"card-body text-center mt-4\">\n                                  <h4 class=\"text-primary\">{{ productos.nombre }}</h4>\n                                  <img [src]=\"productos.imgColegio\" class=\"img-fluid\" width=\"75%\" height=\"75%\">\n                                  <ul class=\"list-inline\">\n                                      <button type=\"button\" class=\"btn btn-outline-primary btn-block\">Ingresar</button>\n                                  </ul>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <!-- ./Team member -->\n\n\n      </div>\n  </div>\n</section>\n<!-- Team -->\n"

/***/ }),

/***/ "./src/app/proyecto/productos2/productos2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/proyecto/productos2/productos2.component.ts ***!
  \*************************************************************/
/*! exports provided: Productos2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Productos2Component", function() { return Productos2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicio_school_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicio/school.service */ "./src/app/proyecto/servicio/school.service.ts");



var Productos2Component = /** @class */ (function () {
    function Productos2Component(_schoolsService) {
        this._schoolsService = _schoolsService;
        this.producto2 = [];
    }
    Productos2Component.prototype.ngOnInit = function () {
        this.producto2 = this._schoolsService.getProducto2();
    };
    Productos2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos2',
            template: __webpack_require__(/*! ./productos2.component.html */ "./src/app/proyecto/productos2/productos2.component.html"),
            styles: [__webpack_require__(/*! ./productos2.component.css */ "./src/app/proyecto/productos2/productos2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicio_school_service__WEBPACK_IMPORTED_MODULE_2__["SchoolsService"]])
    ], Productos2Component);
    return Productos2Component;
}());



/***/ }),

/***/ "./src/app/proyecto/proyecto.component.css":
/*!*************************************************!*\
  !*** ./src/app/proyecto/proyecto.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3llY3RvL3Byb3llY3RvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/proyecto/proyecto.component.html":
/*!**************************************************!*\
  !*** ./src/app/proyecto/proyecto.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-menu></app-menu>\n  <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/proyecto/proyecto.component.ts":
/*!************************************************!*\
  !*** ./src/app/proyecto/proyecto.component.ts ***!
  \************************************************/
/*! exports provided: ProyectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoComponent", function() { return ProyectoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProyectoComponent = /** @class */ (function () {
    function ProyectoComponent() {
    }
    ProyectoComponent.prototype.ngOnInit = function () {
    };
    ProyectoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proyecto',
            template: __webpack_require__(/*! ./proyecto.component.html */ "./src/app/proyecto/proyecto.component.html"),
            styles: [__webpack_require__(/*! ./proyecto.component.css */ "./src/app/proyecto/proyecto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProyectoComponent);
    return ProyectoComponent;
}());



/***/ }),

/***/ "./src/app/proyecto/servicio/school.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/proyecto/servicio/school.service.ts ***!
  \*****************************************************/
/*! exports provided: SchoolsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsService", function() { return SchoolsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SchoolsService = /** @class */ (function () {
    function SchoolsService() {
        // Servicios para la pagina del Alumno
        this.producto1 = [
            {
                nombre: 'Producto',
                imgAlumno: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgAlumno: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgAlumno: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgAlumno: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgAlumno: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgAlumno: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgAlumno: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgAlumno: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgAlumno: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            }
        ];
        // Servicios para la pagina del Docente
        this.producto2 = [
            {
                nombre: 'Producto',
                imgDocente: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgDocente: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgDocente: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgDocente: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgDocente: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgDocente: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgDocente: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgDocente: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            },
            {
                nombre: 'Producto',
                imgDocente: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
                imgColegio: '../../../assets/image/intranet.jpg',
                descripcion: 'Computadora en venta'
            }
        ];
        console.log('Servicio listo para usar!!');
    }
    // Los get de la pagina de Alumnos de la Intranet
    SchoolsService.prototype.getProductos1 = function () {
        return this.producto1;
    };
    SchoolsService.prototype.getProducto1 = function (idx) {
        return this.producto1[idx];
    };
    // Los get de la pagina de Docentes de la Intranet
    SchoolsService.prototype.getProducto2 = function () {
        return this.producto2;
    };
    SchoolsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SchoolsService);
    return SchoolsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anthonymamani/Desktop/proyecto1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map