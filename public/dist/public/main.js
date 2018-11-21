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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-product/view-product.component */ "./src/app/view-product/view-product.component.ts");
/* harmony import */ var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-product/create-product.component */ "./src/app/create-product/create-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/edit-product/edit-product.component.ts");
/* harmony import */ var _details_products_details_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-products/details-products.component */ "./src/app/details-products/details-products.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







console.log('* ** *** in app-routing');
var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', pathMatch: "full", redirectTo: "/products" },
    // { path: '**', pathMatch: "full", redirectTo: "/products"},
    { path: 'products', component: _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_3__["ViewProductComponent"] },
    { path: 'products/new', component: _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_4__["CreateProductComponent"] },
    { path: 'products/edit/:product_id', component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_5__["EditProductComponent"] },
    { path: 'products/:product_id', component: _details_products_details_products_component__WEBPACK_IMPORTED_MODULE_6__["DetailsProductsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Commerce Manager</h1>\n<!-- <ul>\n  <li>Home</li>\n  <li>Product List</li>\n  <li>Product Creation</li>\n</ul> -->\n<!-- <a href=\"/\">Home</a> | \n<a href=\"/products\">Product List</a> | \n<a href=\"/products/new\">Add a New Product</a> -->\n<p></p>\n\n<style>\n  .border{\n    border: 2px solid black;\n    height: auto;\n    width: auto;\n    border-radius: 15px;\n    padding: 15px;\n  }\n</style>\n<div class=\"border\">\n    <router-outlet></router-outlet>\n\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-product/create-product.component */ "./src/app/create-product/create-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/edit-product/edit-product.component.ts");
/* harmony import */ var _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-product/view-product.component */ "./src/app/view-product/view-product.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _details_products_details_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details-products/details-products.component */ "./src/app/details-products/details-products.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_5__["CreateProductComponent"],
                _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["EditProductComponent"],
                _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_7__["ViewProductComponent"],
                _details_products_details_products_component__WEBPACK_IMPORTED_MODULE_11__["DetailsProductsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-product/create-product.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create-product/create-product.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-product/create-product.component.html":
/*!**************************************************************!*\
  !*** ./src/app/create-product/create-product.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>New Product</h1>\n<!-- <p>{{product|json}}</p> -->\n<p *ngIf=\"error.length > 0\">{{error}}</p>\n<form>\n  <p>Name <input type=\"text\" [(ngModel)]=\"product.name\" name=\"product.name\"></p>\n  <p>Quantity <input type=\"text\" [(ngModel)]=\"product.qty\" name=\"product.qty\"></p>\n  <p>Price <input type=\"text\" [(ngModel)]=\"product.price\" name=\"product.price\"></p>\n  <button><input type=\"submit\" (click)=\"createProduct()\" value=\"Create\"></button>\n  <button><a href=\"/products\">Cancel</a></button>\n  <p></p>\n</form>"

/***/ }),

/***/ "./src/app/create-product/create-product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-product/create-product.component.ts ***!
  \************************************************************/
/*! exports provided: CreateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function() { return CreateProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateProductComponent = /** @class */ (function () {
    function CreateProductComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.error = "";
    }
    CreateProductComponent.prototype.ngOnInit = function () {
        this.resetPage();
    };
    CreateProductComponent.prototype.resetPage = function () {
        this.product = {
            title: "",
            price: "",
            img_url: ""
        };
        this.error = "";
    };
    CreateProductComponent.prototype.createProduct = function () {
        var _this = this;
        var obs = this._httpService.createProduct(this.product);
        obs.subscribe(function (data) {
            console.log('createProduct', data);
            if ('errors' in data) {
                _this.error = data['message'];
            }
            else {
                _this.resetPage();
                _this._router.navigate(['/']);
            }
        });
    };
    CreateProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-product',
            template: __webpack_require__(/*! ./create-product.component.html */ "./src/app/create-product/create-product.component.html"),
            styles: [__webpack_require__(/*! ./create-product.component.css */ "./src/app/create-product/create-product.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateProductComponent);
    return CreateProductComponent;
}());



/***/ }),

/***/ "./src/app/details-products/details-products.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/details-products/details-products.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details-products/details-products.component.html":
/*!******************************************************************!*\
  !*** ./src/app/details-products/details-products.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Product Details</h1>\n\n<form>\n\n  <h2>Name: {{product.name}}</h2>\n  <h2>Quantity: {{product.qty}}</h2>\n  <h2>Price {{product.price}}</h2>\n\n  <button (click)=\"deleteProduct(product._id)\">Delete</button>\n  <button (click)=\"mainPage()\">Cancel</button>\n  <p></p>\n</form>"

/***/ }),

/***/ "./src/app/details-products/details-products.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/details-products/details-products.component.ts ***!
  \****************************************************************/
/*! exports provided: DetailsProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsProductsComponent", function() { return DetailsProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsProductsComponent = /** @class */ (function () {
    function DetailsProductsComponent(_activatedRoute, _httpService, _router) {
        this._activatedRoute = _activatedRoute;
        this._httpService = _httpService;
        this._router = _router;
    }
    DetailsProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = this.product = {
            name: "",
            qty: "",
            price: ""
        };
        this.getProduct(this.product);
        this._activatedRoute.params.subscribe(function (params) {
            _this.getProduct(params['product_id']);
        });
    };
    DetailsProductsComponent.prototype.getProduct = function (product_id) {
        var _this = this;
        this._httpService.getProduct(product_id).subscribe(function (data) {
            _this.product = data;
        });
    };
    DetailsProductsComponent.prototype.deleteProduct = function (product_id) {
        var _this = this;
        var obs = this._httpService.deleteProduct(product_id);
        obs.subscribe(function (data) {
            _this._router.navigate(['/products']);
        });
    };
    DetailsProductsComponent.prototype.mainPage = function () {
        this._router.navigate(["/products"]);
    };
    DetailsProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-products',
            template: __webpack_require__(/*! ./details-products.component.html */ "./src/app/details-products/details-products.component.html"),
            styles: [__webpack_require__(/*! ./details-products.component.css */ "./src/app/details-products/details-products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DetailsProductsComponent);
    return DetailsProductsComponent;
}());



/***/ }),

/***/ "./src/app/edit-product/edit-product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-product/edit-product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"product\">\n    <!-- <p>{{product|json}}</p> -->\n\n  <h1>Edit Product {{product.title}}</h1>\n    <p *ngIf=\"error\">{{error}}</p>\n    <form>\n      <p>Name <input type=\"text\" [(ngModel)]=\"product.name\" name=\"product.name\" [value]=\"product.name\"></p>\n      <p>Quantity <input type=\"text\" [(ngModel)]=\"product.qty\" name=\"product.qty\" [value]=\"product.qty\"></p>\n      <p>Price <input type=\"text\" [(ngModel)]=\"product.price\" name=\"product.price\" [value]=\"product.price\"></p>\n      <button><input type=\"submit\" (click)=\"updateProduct()\" value=\"Update\"></button>\n      <button><input type=\"submit\" (click)=\"deleteProduct()\" value=\"Delete\"></button>\n      <p></p>\n    </form>\n    \n</div>\n"

/***/ }),

/***/ "./src/app/edit-product/edit-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.ts ***!
  \********************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProductComponent = /** @class */ (function () {
    // error: String="";
    function EditProductComponent(_httpService, _router, _activatedRoute) {
        this._httpService = _httpService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            var obs = _this._httpService.getProduct(params['product_id']);
            obs.subscribe(function (data) {
                console.log('* ** *** edit-product: ngOnInit', data);
                _this.product = data;
                console.log('* ** *** edit-product.components: this.product=', _this.product);
            });
        });
    };
    EditProductComponent.prototype.updateProduct = function () {
        var _this = this;
        var obs = this._httpService.updateProduct(this.product);
        obs.subscribe(function (data) {
            if ('errors' in data) {
                _this.error = data['message'];
            }
            else {
                _this._router.navigate(['/products']);
            }
        });
    };
    EditProductComponent.prototype.deleteProduct = function (product_id) {
        var _this = this;
        var obs = this._httpService.deleteProduct(this.product_id);
        obs.subscribe(function (data) {
            _this._router.navigate(['/products']);
        });
    };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.css */ "./src/app/edit-product/edit-product.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllProducts = function () {
        return this._http.get('/api/products');
    };
    HttpService.prototype.createProduct = function (product) {
        console.log('* ** *** creating product ...');
        return this._http.post('/api/products', product);
    };
    HttpService.prototype.getProduct = function (product_id) {
        return this._http.get('/api/products/' + product_id);
    };
    HttpService.prototype.updateProduct = function (product) {
        return this._http.put('/api/products/' + product._id, product);
    };
    HttpService.prototype.deleteProduct = function (product_id) {
        return this._http.delete('/api/products/' + product_id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/view-product/view-product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-product/view-product.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-product/view-product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-product/view-product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Products List</h1>\n\n<a href=\"/products/new\"><button>Add a New Product</button></a>\n<p></p>\n\n<style>\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}\n</style>\n\n\n<table>\n  <tr>\n    <th>id</th>\n    <th>Name</th>\n    <th>Qty</th>\n    <th>Price</th>\n    <th>Action</th>\n  </tr>\n  <tr *ngFor=\"let product of allProducts\">\n    <td>{{product._id}}</td>\n    <td>{{product.name}}</td>\n    <td>{{product.qty}}</td>\n    <td>$ {{product.price}}</td>\n    <td>\n      <a href=\"/products/edit/{{product._id}}\"><button>Edit</button></a>\n      <!-- <button (click)=\"deleteProduct(product._id)\">Delete</button> -->\n      \n      <a href=\"/products/{{product._id}}\"><button>Details</button></a>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/view-product/view-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-product/view-product.component.ts ***!
  \********************************************************/
/*! exports provided: ViewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductComponent", function() { return ViewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewProductComponent = /** @class */ (function () {
    function ViewProductComponent(_activatedRoute, _httpService, _router) {
        this._activatedRoute = _activatedRoute;
        this._httpService = _httpService;
        this._router = _router;
    }
    ViewProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var obs = this._httpService.getAllProducts();
        obs.subscribe(function (data) {
            console.log('* ** *** View-Product-Component: getAllProducts', data);
            _this.allProducts = data;
        });
    };
    ViewProductComponent.prototype.deleteProduct = function (product_id) {
        var _this = this;
        var obs = this._httpService.deleteProduct(product_id);
        obs.subscribe(function (data) {
            _this._router.navigate(['/products']);
            _this.getAllProducts();
        });
    };
    ViewProductComponent.prototype.getAllProducts = function () {
        var _this = this;
        var obs = this._httpService.getAllProducts();
        obs.subscribe(function (data) {
            console.log('* ** *** getAllProducts after deleting product', data);
            _this.allProducts = data;
        });
    };
    ViewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-product',
            template: __webpack_require__(/*! ./view-product.component.html */ "./src/app/view-product/view-product.component.html"),
            styles: [__webpack_require__(/*! ./view-product.component.css */ "./src/app/view-product/view-product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewProductComponent);
    return ViewProductComponent;
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

module.exports = __webpack_require__(/*! /home/thn05/Dropbox/_eclipse-workspace/_CodingDojoAcademy/wk15_mean/Day128/commerce_exam2/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map