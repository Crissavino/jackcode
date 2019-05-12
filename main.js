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

module.exports = "<div class=\"mt-5\" align=\"center\" *ngIf=\"cargando\">\n  <h2>Codeando</h2>\n\n  <div title=\"0\">\n    <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\n      xml:space=\"preserve\">\n      <path opacity=\"0.2\" fill=\"#000\"\n        d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n      s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n      c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\" />\n      <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n      C22.32,8.481,24.301,9.057,26.013,10.047z\">\n        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\"\n          dur=\"0.5s\" repeatCount=\"indefinite\" />\n      </path>\n    </svg>\n  </div>\n\n  <p>Por favor espere</p>\n</div>\n\n<header *ngIf=\"!cargando\" class=\"animated fadeIn\">\n  <h1 class=\"marca\"></h1>\n  <!-- <h1 class=\"marca\">jackCode dev</h1> -->\n\n  <div class=\"fondo-header\">\n    <img src=\"../../../assets/img/header1.png\" alt=\"\">\n  </div>\n\n\n</header>\n\n<section *ngIf=\"!cargando\" class=\"data animated fadeIn fast\">\n\n  <div class=\"ofrecemos\">\n\n    <div class=\"caja sombreado\">\n      <img src=\"../assets/img/development.svg\" class=\"icono\" alt=\"...\">\n      <div class=\"caja-texto\">\n        <h5 class=\"titulo\">Desarrollo Web</h5>\n        <p class=\"texto\">Desarrollamos <strong>páginas</strong> y <strong>aplicaciones web</strong> o\n          <strong>mobile</strong>.</p>\n      </div>\n    </div>\n\n    <div class=\"caja sombreado\">\n      <img src=\"../assets/img/content.svg\" class=\"icono\" alt=\"...\">\n      <div class=\"caja-texto\">\n        <h5 class=\"titulo\">Diseño Web</h5>\n        <p class=\"texto\">Hacemos realidad tus <strong>ideas</strong>.</p>\n      </div>\n    </div>\n\n    <div class=\"caja sombreado\">\n      <img src=\"../assets/img/seo.svg\" class=\"icono\" alt=\"...\">\n      <div class=\"caja-texto\">\n        <h5 class=\"titulo\">SEO</h5>\n        <p class=\"texto\">Utilizamos las mejores técnicas para <strong>posicionarte</strong> en los principales\n          <strong>motores de busqueda</strong>.</p>\n      </div>\n    </div>\n\n    <div class=\"caja sombreado\">\n      <img src=\"../assets/img/ad.svg\" class=\"icono\" alt=\"...\">\n      <div class=\"caja-texto\">\n        <h5 class=\"titulo\">Marketing Digital</h5>\n        <p class=\"texto\">Te ayudamos a <strong>promocionarte</strong> de la mejor manera en las <strong>redes\n            sociales</strong>.</p>\n      </div>\n    </div>\n\n  </div>\n\n  <h2 class=\"titulo-contacto\">Tu consulta no molesta</h2>\n  <div class=\"contacto\">\n      <a class=\"caja-contacto sombreado-contaco\" href=\"mailto:jackcodev@gmail.com?subject=Contacto desde la pagina web\">\n        <img src=\"../assets/img/email.svg\" class=\"icono\" alt=\"\">\n        <div class=\"caja-texto-contacto\">\n          <p class=\"texto\">Podes contactarnos a nuestro mail haciendo click acá</p>\n        </div>\n      </a>\n    \n      <a class=\"caja-contacto sombreado-contaco\" href=\"https://api.whatsapp.com/send?phone=5492215546920\">\n        <img src=\"../assets/img/whatsapp.svg\" class=\"icono\" alt=\"\">\n        <div class=\"caja-texto-contacto\">\n          <p class=\"texto\">O a nuestro Whatsapp haciendo click acá</p>\n        </div>\n      </a>\n  </div>\n\n  <!-- <div class=\"proyectos\">\n\n  </div> -->\n\n</section>\n\n\n<footer *ngIf=\"!cargando\">\n  <div class=\"caja-footer\">\n    <img src=\"../assets/img/jackLogo.png\" alt=\"\" class=\"logo\">\n    <span class=\"texto-footer\">jackCode developer </span>&reg;\n  </div>\n</footer>"

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
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.cargando = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.cargando = false;
        }, 1500);
        setTimeout(function () {
            var options = {
                strings: ['jackcode de', 'jackCode developer'],
                typeSpeed: 80,
                startDelay: 20,
                showCursor: false,
                backSpeed: 50,
                backDelay: 500
            };
            var typed = new typed_js__WEBPACK_IMPORTED_MODULE_2__('.marca', options);
        }, 1800);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_4__["APP_ROUTING"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");


var APP_ROUTES = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


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

module.exports = __webpack_require__(/*! /Users/cristiansavino/Desktop/Trabajo_FSWD/angular/jackcode/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map