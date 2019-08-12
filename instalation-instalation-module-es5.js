(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["instalation-instalation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/instalation/instalation.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/instalation/instalation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" (scroll)=\"scrolou()\">\n  <div class=\"col-4\">\n    <div class=\"card navigation-fixed\" [ngStyle]=\"{ transform: 'translateY(' + windowPosition + 'px)' }\">\n      <div class=\"card-header\"> <button class=\"btn\">Guia</button></div>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <button class=\"btn btn-link\" (click)=\"goTo(0)\">Requerimentos</button>\n        </li>\n        <li class=\"list-group-item\">\n          <button class=\"btn btn-link\" (click)=\"goTo(464)\">Dependencias</button>\n        </li>\n        <li class=\"list-group-item\">\n          <button class=\"btn btn-link\" (click)=\"goTo(854)\">Instalação</button>\n        </li>\n\n        <li class=\"list-group-item\">\n          <button class=\"btn btn-link\" (click)=\"goTo(1484)\">Css Style</button>\n        </li>\n\n        <li class=\"list-group-item\">\n          <button class=\"btn btn-link\" (click)=\"goTo(2461)\">Icones</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-8\">\n\n    <section class=\"mb-5\">\n      <h1 id=\"requirements\">Requerimentos</h1>\n      <hr />\n      <p>\n        Esta é uma biblioteca baseada em Angular8 é necessário que você tenha os seguintes itens instalados no seu\n        computador para prosseguir.\n      </p>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <a href=\"https://nodejs.org/en/\" target=\"_blank\" class=\"text-success\"\n            ><i class=\"fab fa-node-js fa-2x\"></i> NodeJs 10+</a\n          >\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://nodejs.org/en/\" target=\"_blank\" class=\"text-danger\"\n            ><i class=\"fab fa-angular fa-2x\"></i> Angular/CLI 8+</a\n          >\n        </li>\n      </ul>\n      <p>\n        Partiremos nos próximos pontos supondo que você já conhece o framework Angular e já tem seu projeto criado e\n        pronto para a instalação da lib. Se você não conhece o framework Angular acesse o link abaixo para aprender mais\n        sobre.\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <a href=\"https://angular.io/\" class=\"text-primary\"\n            ><i class=\"fas fa-file-alt fa-2x\"></i> Documentação Angular</a\n          >\n        </li>\n      </ul>\n    </section>\n\n    <section id=\"dependencies\" class=\"mt-5\">\n      <h1>Dependencias</h1>\n      <hr />\n      <p>\n        A biblioteca possui algumas dependencias e será necessário baixa-las antes de utiliza-la. Abaixo listo as\n        dependencias obrigatórias.\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item bg-danger\">\n          <div class=\"row\">\n            <div class=\"col-4 pt-2 text-white\">PrimeNg</div>\n            <div class=\"col-8\"><app-clipboard-input [code]=\"'npm install primeng'\"></app-clipboard-input></div>\n          </div>\n        </li>\n        <li class=\"list-group-item bg-danger\">\n          <div class=\"row\">\n            <div class=\"col-4 pt-2 text-white\">Bootstrap</div>\n            <div class=\"col-8\">\n              <app-clipboard-input [code]=\"'npm install bootstrap jquery popper.js'\"></app-clipboard-input>\n            </div>\n          </div>\n        </li>\n      </ul>\n      <em class=\"text-muted\"\n        >Obs: A lib faz uso de alguns componentes da blibioteca do PrimeNG por isso temos a obrigatóriedade desta\n        dependencia. A dependencia do bootstrap pode não ser obrigatório caso você tenha conhecimento em css pode\n        sobrescrever as classes bootstrap nos componentes da biblioteca.</em\n      >\n    </section>\n\n    <section id=\"instalation\" class=\"mt-5\">\n      <h1>Instalação</h1>\n      <hr />\n      <p>Com as dependencias instaladas execute o seguinte comando no diretório raiz do seu projeto angular:</p>\n      <div class=\" p-2 row\">\n        <div class=\"col-12\">\n          <app-clipboard-input [code]=\"'npm i fourward-utils'\"></app-clipboard-input>\n        </div>\n      </div>\n\n      <p class=\"pt-5\">\n        A lib é composta de diversos modulos, basta importa no <code>app.modules.ts</code> ou em qualquer modulo que desejar e sair usando.\n        Acesse a documentação para saber mais.\n      </p>\n      <app-inner-code [containerClass]=\"'p-2 bg-dark mb-2'\" [innerCode]=\"appModuleCode\"></app-inner-code>\n    </section>\n\n    <section id=\"styles\" class=\"mt-5\">\n      <h1>Css Style</h1>\n      <hr />\n      <p>\n        Como explicado na sessão de dependencias temos duas dependencias obrigatórias para nossa lib ser exibida bem\n        formatado e estilizado que são eles o PrimeNG e o Bootstrap. Para adicionar esses pacotes no seu projeto abra o\n        arquivo <code>angular.json</code> e modifique as propiedades <code>styles</code> e <code>scripts</code> no\n        arquivo com o conteudo mostrado abaixo.\n      </p>\n\n      <app-inner-code [containerClass]=\"'p-2 bg-dark mb-2'\" [innerCode]=\"angularJsonCode\"></app-inner-code>\n    </section>\n\n    <section id=\"icons\" class=\"mt-5 mb-5\">\n      <h1>Icones</h1>\n      <hr />\n\n      <p>\n        Alguns componentes fazem uso de icones, a biblioteca <code>ng-fourward-utils</code> permite a utilização da sua\n        lib de icones favorita ( desde que a mesma seja acessada por classes css ).\n      </p>\n\n      <p>Nós recomendamos as seguintes lib de icones:</p>\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item bg-light\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3 pt-2\">PrimeIcons</div>\n            <div class=\"col-sm-12 col-md-9\"><app-clipboard-input [code]=\"'npm install primeicons'\"></app-clipboard-input></div>\n          </div>\n        </li>\n        <li class=\"list-group-item text-center\">OU</li>\n        <li class=\"list-group-item bg-light\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3 pt-2\">FontAwesome</div>\n            <div class=\"col-sm-12 col-md-9\"><app-clipboard-input [code]=\"'npm install @fortawesome/fontawesome-free'\"></app-clipboard-input></div>\n          </div>\n        </li>\n      </ul>\n\n      <p class=\"pt-3\">\n        Com sua biblioteca de icones baixada é preciso configura-la em seu projeto da mesma forma que adicionamos o\n        <code>bootstrap</code> e o <code>primeng</code>\n      </p>\n      <p>\n        Vamos abrir o arquivo <code>angular.json</code> e adicionar mais algumas linhas na nossas tags\n        <code>styles</code>\n      </p>\n\n      <app-inner-code [containerClass]=\"'bg-dark'\" [innerCode]=\"primeIconsImport\"></app-inner-code>\n      <p class=\"font-weight-bold py-3\">OU</p>\n      <app-inner-code [containerClass]=\"'bg-dark'\" [innerCode]=\"fontAwesomeImport\"></app-inner-code>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/instalation/instalation-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/instalation/instalation-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: InstalationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalationRoutingModule", function() { return InstalationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _instalation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instalation.component */ "./src/app/instalation/instalation.component.ts");




var routes = [
    {
        path: '',
        component: _instalation_component__WEBPACK_IMPORTED_MODULE_3__["InstalationComponent"]
    }
];
var InstalationRoutingModule = /** @class */ (function () {
    function InstalationRoutingModule() {
    }
    InstalationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InstalationRoutingModule);
    return InstalationRoutingModule;
}());



/***/ }),

/***/ "./src/app/instalation/instalation.component.scss":
/*!********************************************************!*\
  !*** ./src/app/instalation/instalation.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-fixed {\n  transition: -webkit-transform 1s ease-out;\n  transition: transform 1s ease-out;\n  transition: transform 1s ease-out, -webkit-transform 1s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9tYWlxdWVyb3NhL25nLWZvdXJ3YXJkLXV0aWxzL3NyYy9hcHAvaW5zdGFsYXRpb24vaW5zdGFsYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2luc3RhbGF0aW9uL2luc3RhbGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFBQSxpQ0FBQTtFQUFBLGdFQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9pbnN0YWxhdGlvbi9pbnN0YWxhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uLWZpeGVkIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2Utb3V0O1xufVxuIiwiLm5hdmlnYXRpb24tZml4ZWQge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1vdXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/instalation/instalation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/instalation/instalation.component.ts ***!
  \******************************************************/
/*! exports provided: InstalationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalationComponent", function() { return InstalationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InstalationComponent = /** @class */ (function () {
    function InstalationComponent() {
        this.installCommandCopied = false;
    }
    InstalationComponent.prototype.ngOnInit = function () {
        this.windowPosition = 0;
        this.appModuleCode = "\n    // outros imports\n    import { FourwardFormModule } from 'ng-fourward-utils';\n\n    @NgModule({\n      declarations: [AppComponent],\n      imports: [..., FourwardFormModule],\n      providers: [],\n      bootstrap: [AppComponent]\n    })\n    export class AppModule {}\n    ";
        this.angularJsonCode = "\n    {\n      \"$schema\": \"./node_modules/@angular/cli/lib/config/schema.json\",\n      \"version\": 1,\n      \"newProjectRoot\": \"projects\",\n      \"projects\": {\n        \"ng-fourward\": {\n          \"projectType\": \"application\",\n          \"schematics\": {\n            \"@schematics/angular:component\": {\n              \"style\": \"scss\"\n            }\n          },\n          \"root\": \"\",\n          \"sourceRoot\": \"src\",\n          \"prefix\": \"app\",\n          \"architect\": {\n            \"build\": {\n              \"builder\": \"@angular-devkit/build-angular:browser\",\n              \"options\": {\n                ...outras propiedade,\n                *\"styles\"*: [\n                  \"node_modules/primeng/resources/themes/nova-light/theme.css\",\n                  \"node_modules/primeng/resources/primeng.min.css\",\n                  \"node_modules/bootstrap/dist/css/bootstrap.min.css\",\n                  \"src/scss/styles.scss\"\n                ],\n                *\"scripts\"*: [\n                  \"node_modules/jquery/dist/jquery.min.js\",\n                  \"node_modules/bootstrap/dist/js/bootstrap.min.js\",\n                  \"node_modules/popper.js/dist/umd/popper.min.js\"\n                ]\n              },\n              .... resto do arquivo\n    ";
        this.primeIconsImport = "\n    \"node_modules/primeicons/primeicons.css\"\n    ";
        this.fontAwesomeImport = "\n      \"node_modules/@fortawesome/fontawesome-free-webfonts/css/fontawesome.css\",\n      \"node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-regular.css\",\n      \"node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-brands.css\",\n      \"node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-solid.css\",\n    ";
    };
    InstalationComponent.prototype.scrolou = function () {
        this.windowPosition = window.scrollY;
    };
    InstalationComponent.prototype.goTo = function (scrollPosition) {
        window.scrollTo({ top: scrollPosition });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], InstalationComponent.prototype, "scrolou", null);
    InstalationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-instalation',
            template: __webpack_require__(/*! raw-loader!./instalation.component.html */ "./node_modules/raw-loader/index.js!./src/app/instalation/instalation.component.html"),
            styles: [__webpack_require__(/*! ./instalation.component.scss */ "./src/app/instalation/instalation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InstalationComponent);
    return InstalationComponent;
}());



/***/ }),

/***/ "./src/app/instalation/instalation.module.ts":
/*!***************************************************!*\
  !*** ./src/app/instalation/instalation.module.ts ***!
  \***************************************************/
/*! exports provided: InstalationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalationModule", function() { return InstalationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _instalation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instalation-routing.module */ "./src/app/instalation/instalation-routing.module.ts");
/* harmony import */ var _instalation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instalation.component */ "./src/app/instalation/instalation.component.ts");
/* harmony import */ var _reuse_component_reuse_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reuse-component/reuse-component.module */ "./src/app/reuse-component/reuse-component.module.ts");






var InstalationModule = /** @class */ (function () {
    function InstalationModule() {
    }
    InstalationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_instalation_component__WEBPACK_IMPORTED_MODULE_4__["InstalationComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _instalation_routing_module__WEBPACK_IMPORTED_MODULE_3__["InstalationRoutingModule"], _reuse_component_reuse_component_module__WEBPACK_IMPORTED_MODULE_5__["ReuseComponentModule"]]
        })
    ], InstalationModule);
    return InstalationModule;
}());



/***/ })

}]);
//# sourceMappingURL=instalation-instalation-module-es5.js.map