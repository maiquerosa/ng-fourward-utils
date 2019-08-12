(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/fourward-utils/src/lib/fourward-form/fourward-form.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/fourward-utils/src/lib/fourward-form/fourward-form.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"fourwardFormGroup\">\n  <div [class]=\"rowContainerClass\">\n    <ng-template ngFor let-field [ngForOf]=\"fields\" let-i=\"index\" let-odd=\"odd\">\n      <div [ngClass]=\"field.containerClass\">\n        <label *ngIf=\"field.type !== fieldType.CHECKBOX && field.type !== fieldType.INPUTFILE\" [for]=\"field.id\">{{\n          field.label\n        }}</label>\n\n        <!-- Para inputs tipo: texto -->\n        <nfu-input-mask\n          *ngIf=\"field.type === fieldType.TEXT\"\n          [placeholder]=\"field.placeholder || ''\"\n          [id]=\"field.id\"\n          [type]=\"field.maskType || 'noFormat'\"\n          [name]=\"field.name\"\n          [formControlName]=\"field.name\"\n          [className]=\"\n            field.required && isSubmited && fourwardFormGroup.controls[field.name].invalid\n              ? field.inputClass + ' is-invalid'\n              : field.inputClass\n          \"\n        ></nfu-input-mask>\n\n        <!-- Para inputs tipo: autocomplete -->\n\n        <p-autoComplete\n          *ngIf=\"field.type === fieldType.AUTOCOMPLETE\"\n          [field]=\"field.name\"\n          [style]=\"{ width: '100%' }\"\n          [inputStyle]=\"{ width: '100%' }\"\n          [formControlName]=\"field.name\"\n          [placeholder]=\"field.placeholder || ''\"\n          [suggestions]=\"autoCompleteSugestions\"\n          (completeMethod)=\"autoCompleteMethod.emit($event)\"\n        >\n          <ng-template let-item pTemplate=\"item\">\n            <div>\n              <span>{{ item.name }}</span>\n            </div>\n          </ng-template>\n        </p-autoComplete>\n\n        <!-- Para inputs tipo: dropbox -->\n        <select\n          *ngIf=\"field.type === fieldType.DROPDOWN\"\n          [id]=\"field.id\"\n          [formControlName]=\"field.name\"\n          [class]=\"field.required && isSubmited && fourwardFormGroup.controls[field.name].invalid ? 'is-invalid' : ''\"\n          [name]=\"field.name\"\n          [ngClass]=\"field.inputClass\"\n        >\n          <ng-template ngFor let-option [ngForOf]=\"field.options\">\n            <option [value]=\"option.value\">{{ option.key }}</option>\n          </ng-template>\n        </select>\n\n        <!-- Para inputs tipo: textarea -->\n        <textarea\n          *ngIf=\"field.type === fieldType.TEXTAREA\"\n          [placeholder]=\"field.placeholder || ''\"\n          [formControlName]=\"field.name\"\n          [name]=\"field.name\"\n          [id]=\"field.id\"\n          [value]=\"field.defaultValue\"\n          [class]=\"field.required && isSubmited && fourwardFormGroup.controls[field.name].invalid ? 'is-invalid' : ''\"\n          [ngClass]=\"field.inputClass\"\n          cols=\"30\"\n          rows=\"5\"\n        ></textarea>\n\n        <!-- Para inputs tipo: File -->\n        <div\n          class=\"field.inputClass\"\n          *ngIf=\"field.type === fieldType.INPUTFILE\"\n          style=\"margin-left: 0px;margin-right: 0px\"\n        >\n          <label class=\"col-md-3 col-form-label\" [for]=\"field.id\">{{ field.label }}</label>\n          <div class=\"col-md-9\">\n            <input\n              [placeholder]=\"field.placeholder || ''\"\n              [id]=\"field.id\"\n              [name]=\"field.name\"\n              [class]=\"\n                field.required && isSubmited && fourwardFormGroup.controls[field.name].invalid ? 'is-invalid' : ''\n              \"\n              [placeholder]=\"field.placeholder || ''\"\n              [type]=\"field.type\"\n              [value]=\"\n                field.hasDataPipe ? (field.defaultValue || '' | date: 'dd/MM/yyyy HH:mm') : field.defaultValue || ''\n              \"\n            />\n          </div>\n        </div>\n\n        <!-- Para inputs tipo: Checkbox -->\n        <div *ngIf=\"field.type === fieldType.CHECKBOX\" class=\"form-check form-check-inline\">\n          <input\n            [ngClass]=\"field.inputClass\"\n            class=\"form-check-input\"\n            [formControlName]=\"field.name\"\n            id=\"inline-checkbox1\"\n            type=\"checkbox\"\n            [checked]=\"field.defaultValue\"\n            value=\"true\"\n          />\n          <label class=\"form-check-label\" for=\"inline-checkbox1\">{{\n            field.defaultValue ? field.labelTrue : field.labelFalse\n          }}</label>\n        </div>\n\n        <!-- Para inputs tipo: Datepick -->\n        <p-calendar\n          *ngIf=\"field.type === fieldType.DATEPICKER\"\n          [placeholder]=\"field.placeholder || ''\"\n          [id]=\"field.id\"\n          [name]=\"field.name\"\n          [dateFormat]=\"'dd/mm/yy'\"\n          [formControlName]=\"field.name\"\n          [appendTo]=\"'body'\"\n          [styleClass]=\"field.inputClass\"\n          [style]=\"{ padding: '0', border: 'none' }\"\n          [inputStyleClass]=\"\n            field.required && isSubmited && fourwardFormGroup.controls[field.name].invalid\n              ? 'is-invalid ' + field.inputClass\n              : field.inputClass\n          \"\n          [inputStyle]=\"\n            field.required && isSubmited && fourwardFormGroup.controls[field.name].invalid\n              ? { borderColor: '#dc3545', color: '#808194' }\n              : { borderColor: '#d3d4da', color: '#808194' }\n          \"\n        ></p-calendar>\n      </div>\n    </ng-template>\n\n    <div [ngClass]=\"btnContainerClass\">\n      <button *ngIf=\"actionBtn1Enabled && !isLoading\" [ngClass]=\"actionBtn1Class\" (click)=\"actionButton1Click()\">\n        <i [ngClass]=\"actionBtn1Icon\"></i> {{ actionBtn1Label }}\n      </button>\n      <button *ngIf=\"actionBtn1Enabled && isLoading\" type=\"button\" [ngClass]=\"actionBtn1Class\">\n        <i [class]=\"loadingIndicatorClass\"></i>&nbsp;Aguarde...\n      </button>\n\n      <button *ngIf=\"actionBtn2Enabled\" [ngClass]=\"actionBtn2Class\" (click)=\"actionButton2Click()\">\n        <i [ngClass]=\"actionBtn2Icon\"></i> {{ actionBtn2Label }}\n      </button>\n      <button *ngIf=\"cancelBtnEnabled\" type=\"reset\" [ngClass]=\"cancelBtnClass\" (click)=\"cancelButtonClick()\">\n        <i [ngClass]=\"cancelBtnIcon\"></i> {{ cancelBtnLabel }}\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/fourward-utils/src/lib/fourward-input-mask/fourward-input-mask.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/fourward-utils/src/lib/fourward-input-mask/fourward-input-mask.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input\n  type=\"text\"\n  [id]=\"id\"\n  [placeholder]=\"placeholder\"\n  [name]=\"name\"\n  [disabled]=\"disabled\"\n  (ngModelChange)=\"changeEvent($event)\"\n  [class]=\"className\"\n  [maxlength]=\"maxLength\"\n  [ngModel]=\"value\"\n/>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" href=\"#\"><img width=\"200\" src=\"../assets/img/logo.png\" alt=\"\"/></a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['introduction']\">Introdução <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['instalation']\">Instalação</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a\n            class=\"nav-link dropdown-toggle\"\n            href=\"#\"\n            id=\"navbarDropdown\"\n            role=\"button\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            Documentação\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Componentes</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Serviços</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Diretivas</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Models</a>\n          </div>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" />\n        <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n  <main class=\"container bg-white pt-5 mt-5\">\n    <router-outlet></router-outlet>\n  </main>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/introduction/introduction.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/introduction/introduction.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-8\">\n    <h1>Introdução</h1>\n  </div>\n  <div class=\"col-4 pt-4 text-right\">\n    <app-clipboard-input [code]=\"'npm install fourward-utils'\"></app-clipboard-input>\n  </div>\n</div>\n\n<hr />\n\n<p>\n  Visando o desenvolvimento dinâmico e continuo, criamos esta biblioteca de componentes baseado em angular. Estes\n  componentes são comumente utilizados nos projetos da empresa e agora estamos liberando os mesmos para a comunidade, de\n  modo que venha ajudar no desenvolvimento agil e diminuir trabalho codificando componentes que já estão prontos e\n  testados.\n</p>\n\n<hr class=\"hr-light\" />\n\n<h2>Índice</h2>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-4\">\n    <p-panelMenu [model]=\"items\"></p-panelMenu>\n  </div>\n  <div class=\"col-sm-12 col-md-8\">\n    <h2>Biblioteca open source</h2>\n    <p>\n      É possível que você não encontre o componente que precisa, neste caso basta solicitar a criação uma solicitação\n      nas issues no github ou você pode também colaborar com o pacote criando um fork do projeto e desenvolvendo seu\n      própio componente e enviar um PR para adicionar o seu novo componente a lib.\n    </p>\n    <hr />\n\n    <h3>Github do projeto</h3>\n    <a href=\"https://github.com/maiquerosa/ng-fourward-utils\" target=\"_blank\">@maiquerosa/ng-fourward-utils</a>\n    <span class=\"badge badge-primary d-inline-block ml-2\">Versão 0.0.3</span>\n    <br />\n    <br />\n    <h4>\n      Siga este modelo para abertura de issue:\n    </h4>\n    <div class=\"bg-light p-3\">\n      <code>Qual a versão da lib esta utilizando?</code>\n      <p>\n        <em>Nesta sessão você pode postar seu</em> <mark>package.json</mark>\n        <em>ou informar as versões das libs que está usando</em>\n      </p>\n\n      <code>Qual o comportamento que esta enfretando?</code>\n      <p><em>Nesta sessão você pode detalhar o problema que esta enfrentando ao usar a lib</em></p>\n\n      <code>Quais os componentes está utilizando?</code>\n      <p><em>Informe nesta sessão quais os componentes da lib que você esta fazendo uso quando o problema ocorre.</em></p>\n\n      <code>Qual o comportamento esperado?</code>\n      <p><em>Informe brevemente nesta sessão qual o comportamento que você julga ser o correto.</em></p>\n    </div>\n\n    <p> Acesse este <a href=\"#\">link para abertura de chamado</a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reuse-component/clipboard-input/clipboard-input.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reuse-component/clipboard-input/clipboard-input.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\n  <input type=\"text\" class=\"form-control bg-white text-primary\" disabled [id]=\"elementId\" [value]=\"code\" />\n  <div class=\"input-group-append\">\n    <span class=\"input-group-text\"\n      ><i title=\"Copiar\" (click)=\"copyCommand('install-code')\" class=\"text-right far fa-copy fa-lg icon-copy\"></i>\n      <small class=\"cliped-success\" [ngClass]=\"{ copied: installCommandCopied }\">Conteúdo copiado!</small>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reuse-component/inner-code/inner-code.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reuse-component/inner-code/inner-code.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"containerClass\">\n  <pre>\n              <code [class]=\"innerCodeClass\"  [innerHTML]=\"innerCode\">\n              </code>\n            </pre>\n</div>\n"

/***/ }),

/***/ "./projects/fourward-utils/src/lib/fourward-form/field-form.ts":
/*!*********************************************************************!*\
  !*** ./projects/fourward-utils/src/lib/fourward-form/field-form.ts ***!
  \*********************************************************************/
/*! exports provided: FieldType, FormResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldType", function() { return FieldType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormResult", function() { return FormResult; });
var FieldType;
(function (FieldType) {
    FieldType["TEXT"] = "text";
    FieldType["PASSWORD"] = "password";
    FieldType["DROPDOWN"] = "dropdown";
    FieldType["RADIO"] = "radio";
    FieldType["CHECKBOX"] = "checkbox";
    FieldType["TEXTAREA"] = "textarea";
    FieldType["DATEPICKER"] = "datepicker";
    FieldType["INPUTFILE"] = "file";
    FieldType["AUTOCOMPLETE"] = "autocomplete";
})(FieldType || (FieldType = {}));
class FormResult {
}


/***/ }),

/***/ "./projects/fourward-utils/src/lib/fourward-form/fourward-form.component.scss":
/*!************************************************************************************!*\
  !*** ./projects/fourward-utils/src/lib/fourward-form/fourward-form.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9mb3Vyd2FyZC11dGlscy9zcmMvbGliL2ZvdXJ3YXJkLWZvcm0vZm91cndhcmQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./projects/fourward-utils/src/lib/fourward-form/fourward-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./projects/fourward-utils/src/lib/fourward-form/fourward-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FourwardFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourwardFormComponent", function() { return FourwardFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _field_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field-form */ "./projects/fourward-utils/src/lib/fourward-form/field-form.ts");




let FourwardFormComponent = class FourwardFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.fields = [];
        this.actionBtn1Enabled = false;
        this.actionBtn2Enabled = false;
        this.cancelBtnEnabled = false;
        this.getRawValue = true;
        this.autoCompleteSugestions = [];
        this.actionBtn1Click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actionBtn2Click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancelBtnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.autoCompleteMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSubmited = false;
        this.fieldType = _field_form__WEBPACK_IMPORTED_MODULE_3__["FieldType"];
    }
    ngOnInit() {
        this.generateReactiveForm();
    }
    actionButton1Click() {
        this.actionBtn1Click.emit(this.submitForm());
    }
    actionButton2Click() {
        this.actionBtn2Click.emit(this.submitForm());
    }
    cancelButtonClick() {
        this.fourwardFormGroup.reset();
        this.cancelBtnClick.emit();
    }
    submitForm() {
        this.isSubmited = true;
        const formResult = new _field_form__WEBPACK_IMPORTED_MODULE_3__["FormResult"]();
        formResult.data = this.getRawValue ? this.fourwardFormGroup.getRawValue() : this.fourwardFormGroup.value;
        formResult.success = this.fourwardFormGroup.valid;
        this.fourwardFormGroup.reset();
        this.isSubmited = !formResult.success;
        return formResult;
    }
    generateReactiveForm() {
        const controls = {};
        this.fields.forEach((el) => {
            controls[el.name] = this.prepareFieldControl(el);
        });
        this.fourwardFormGroup = this.fb.group(controls);
    }
    prepareFieldControl(field) {
        const defaultValue = field.type === _field_form__WEBPACK_IMPORTED_MODULE_3__["FieldType"].DROPDOWN ? field.options[0].value : field.defaultValue;
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: defaultValue,
            disabled: field.disabled
        }, field.required ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : null);
    }
};
FourwardFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], FourwardFormComponent.prototype, "fields", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardFormComponent.prototype, "rowContainerClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardFormComponent.prototype, "loadingIndicatorClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardFormComponent.prototype, "btnContainerClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FourwardFormComponent.prototype, "actionBtn1Enabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardFormComponent.prototype, "actionBtn1Label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardFormComponent.prototype, "actionBtn1Class", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardFormComponent.prototype, "actionBtn1Icon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FourwardFormComponent.prototype, "actionBtn2Enabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardFormComponent.prototype, "actionBtn2Label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardFormComponent.prototype, "actionBtn2Class", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardFormComponent.prototype, "actionBtn2Icon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FourwardFormComponent.prototype, "cancelBtnEnabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardFormComponent.prototype, "cancelBtnLabel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardFormComponent.prototype, "cancelBtnIcon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardFormComponent.prototype, "cancelBtnClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], FourwardFormComponent.prototype, "isLoading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FourwardFormComponent.prototype, "getRawValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], FourwardFormComponent.prototype, "autoCompleteSugestions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FourwardFormComponent.prototype, "actionBtn1Click", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FourwardFormComponent.prototype, "actionBtn2Click", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FourwardFormComponent.prototype, "cancelBtnClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FourwardFormComponent.prototype, "autoCompleteMethod", void 0);
FourwardFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'nfu-form',
        template: __webpack_require__(/*! raw-loader!./fourward-form.component.html */ "./node_modules/raw-loader/index.js!./projects/fourward-utils/src/lib/fourward-form/fourward-form.component.html"),
        styles: [__webpack_require__(/*! ./fourward-form.component.scss */ "./projects/fourward-utils/src/lib/fourward-form/fourward-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], FourwardFormComponent);



/***/ }),

/***/ "./projects/fourward-utils/src/lib/fourward-form/fourward-form.module.ts":
/*!*******************************************************************************!*\
  !*** ./projects/fourward-utils/src/lib/fourward-form/fourward-form.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FourwardFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourwardFormModule", function() { return FourwardFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fourward_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fourward-form.component */ "./projects/fourward-utils/src/lib/fourward-form/fourward-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fourward_input_mask_fourward_input_mask_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fourward-input-mask/fourward-input-mask.module */ "./projects/fourward-utils/src/lib/fourward-input-mask/fourward-input-mask.module.ts");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_7__);








let FourwardFormModule = class FourwardFormModule {
};
FourwardFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _fourward_input_mask_fourward_input_mask_module__WEBPACK_IMPORTED_MODULE_5__["FourwardInputMaskModule"],
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]
        ],
        exports: [_fourward_form_component__WEBPACK_IMPORTED_MODULE_2__["FourwardFormComponent"]],
        declarations: [_fourward_form_component__WEBPACK_IMPORTED_MODULE_2__["FourwardFormComponent"]],
        providers: []
    })
], FourwardFormModule);



/***/ }),

/***/ "./projects/fourward-utils/src/lib/fourward-form/fourward-form.service.ts":
/*!********************************************************************************!*\
  !*** ./projects/fourward-utils/src/lib/fourward-form/fourward-form.service.ts ***!
  \********************************************************************************/
/*! exports provided: FourwardFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourwardFormService", function() { return FourwardFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let FourwardFormService = class FourwardFormService {
    constructor() {
        /* Recriar os campos do formulario */
        this.recriateFormSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.recriateFormFields$ = this.recriateFormSubject.asObservable();
        /* Subjects usado para avisar o fourwardForm que uma ação foi tomada no component Pai */
        this.submitFormAction1Subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.submitFormAction2Subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.submitFormAction3Subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /* Subjects para enviar os dados e o status da validação  do formulario */
        this.sendDataFormAction1 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sendDataFormAction2 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sendDataFormAction3 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /* Observables que o fouwardForm está "Escutando" para realizar a ação de enviar os dados e o
        status de validação do formulario */
        this.submitDataFormAction1$ = this.submitFormAction1Subject.asObservable();
        this.submitDataFormAction2$ = this.submitFormAction2Subject.asObservable();
        this.submitDataFormAction3$ = this.submitFormAction3Subject.asObservable();
        /* Observables que os componentes PAI devem "Escutar" para receber os dados e o status de
        validação do fouwardForm
        */
        this.sendFormDataObs1$ = this.sendDataFormAction1.asObservable();
        this.sendFormDataObs2$ = this.sendDataFormAction2.asObservable();
        this.sendFormDataObs3$ = this.sendDataFormAction3.asObservable();
    }
    /* Métodos utilizados para "TRIGGAR" os eventos do component PAI para o fouwardForm
     Component pai deve "Chamar" este método na execução de uma ação da tela ex: Click em botões, etc...
    */
    dataFormAction1(senderComponent) {
        this.submitFormAction1Subject.next(senderComponent);
    }
    dataFormAction2(senderComponent) {
        this.submitFormAction2Subject.next(senderComponent);
    }
    dataFormAction3(senderComponent) {
        this.submitFormAction3Subject.next(senderComponent);
    }
    /* Métodos utilizados para "TRIGGAR" os eventos de envio dos dados e status do fouwardForm  para o  component PAI
      Estes métodos são apenas do componente fouwardForm e não devem ser chamados em outros componentes
    */
    sendFormData1(formData) {
        this.sendDataFormAction1.next(formData);
    }
    sendFormData2(formData) {
        this.sendDataFormAction2.next(formData);
    }
    sendFormData3(formData) {
        this.sendDataFormAction3.next(formData);
    }
    /* Recriando formulario em Modo lazy */
    recriateForm(fieldForms) {
        this.recriateFormSubject.next(fieldForms);
    }
};
FourwardFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FourwardFormService);



/***/ }),

/***/ "./projects/fourward-utils/src/lib/fourward-input-mask/fourward-input-mask.component.ts":
/*!**********************************************************************************************!*\
  !*** ./projects/fourward-utils/src/lib/fourward-input-mask/fourward-input-mask.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: InputType, FourwardInputMaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputType", function() { return InputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourwardInputMaskComponent", function() { return FourwardInputMaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var FourwardInputMaskComponent_1;


const InputType = {
    CPF: 'cpf',
    CNPJ: 'cnpj',
    PHONE: 'phone',
    CURRENCY: 'currency',
    PERCENT: 'percent',
    ZIPCODE: 'zipcode',
    NO_FORMAT: 'noFormat',
    NUMBER: 'number'
};
let FourwardInputMaskComponent = FourwardInputMaskComponent_1 = class FourwardInputMaskComponent {
    constructor() {
        this.type = InputType.CPF;
        this.disabled = false;
        this.maxLength = 50;
        this.value = '';
        this.maskFormatMap = new Map();
    }
    ngOnInit() {
        this.setDefaultMaxLength();
        this.setFormatMask();
    }
    changeEvent(event) {
        this.setDefaultMaxLength();
        let noFormatText = event;
        if (this.type !== InputType.NO_FORMAT) {
            noFormatText = event.replace(/\D/g, '');
        }
        const inputField = document.querySelector('#' + this.id);
        if (!noFormatText.length) {
            this.value = '';
            inputField.value = '';
            this.propagateOnChange('');
            return;
        }
        this.value = this.maskFormatMap.get(this.type)(noFormatText);
        if (this.type === InputType.CURRENCY || this.type === InputType.PERCENT) {
            let numberValue = this.value.replace('.', '');
            numberValue = numberValue.replace(',', '.');
            this.propagateOnChange(parseFloat(numberValue));
            return;
        }
        this.propagateOnChange(this.value);
    }
    writeValue(obj) {
        if (obj) {
            this.type === InputType.CPF
                ? (this.value = this.formatToCpf(obj))
                : this.type === InputType.CNPJ
                    ? (this.value = this.formatToCnpj(obj))
                    : this.type === InputType.PHONE
                        ? (this.value = this.formatToPhone(obj))
                        : this.type === InputType.PHONE
                            ? (this.value = this.formatToCurrency(obj.toString()))
                            : this.type === InputType.PERCENT
                                ? (this.value = this.formatToPercent(obj.toString()))
                                : this.type === InputType.ZIPCODE
                                    ? (this.value = this.formatToZipCode(obj))
                                    : (this.value = this.formatToNothing(obj));
        }
        else {
            this.value = '';
        }
    }
    registerOnChange(fn) {
        this.propagateOnChange = fn;
    }
    registerOnTouched(fn) {
        // todo
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    formatToCpf(v) {
        v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
        v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
        // de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos
        return v;
    }
    formatToCnpj(v) {
        v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/, '$1.$2'); // Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); // Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/\.(\d{3})(\d)/, '.$1/$2'); // Coloca uma barra entre o oitavo e o nono dígitos
        v = v.replace(/(\d{4})(\d)/, '$1-$2'); // Coloca um hífen depois do bloco de quatro dígitos
        return v;
    }
    formatToPhone(v) {
        v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
        if (v.length <= 5) {
            v = v.replace(/^(\d{2})(\d{1,3})/, '($1) $2'); // Separa o DDD do telefone
        }
        else if (v.length > 6 && v.length <= 10) {
            v = v.replace(/(\d{2})(\d{1,4})(\d{1,4})/, '($1) $2-$3'); // Separa o DDD e ajusta os digitos do celular
        }
        else {
            v = v.replace(/(\d{2})(\d{1,5})(\d{1,4})/, '($1) $2-$3'); // Separa o DDD e ajusta os digitos do celular
        }
        if (v.length === 0) {
            return null;
        }
        return v;
    }
    formatToCurrency(v) {
        v = v.replace(/\D/g, '');
        if (v.length === 3) {
            v = v.replace(/(\d{1})(\d{2})/, '$1,$2');
        }
        else if (v.length === 4) {
            v = v.replace(/(\d{2})(\d{2})/, '$1,$2');
        }
        else if (v.length === 5) {
            v = v.replace(/(\d{3})(\d{2})/, '$1,$2');
        }
        else if (v.length === 6) {
            v = v.replace(/(\d{1})(\d{3})(\d{2})/, '$1.$2,$3');
        }
        else if (v.length === 7) {
            v = v.replace(/(\d{2})(\d{3})(\d{2})/, '$1.$2,$3');
        }
        else if (v.length === 8) {
            v = v.replace(/(\d{3})(\d{3})(\d{2})/, '$1.$2,$3');
        }
        else if (v.length === 9) {
            v = v.replace(/(\d{1})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3,$4');
        }
        else if (v.length === 10) {
            v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3,$4');
        }
        else if (v.length === 11) {
            v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3,$4');
        }
        else if (v.length === 12) {
            v = v.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3.$4,$5');
        }
        else {
            v = v.replace(/(\d{10,})(\d{2})/, '$1.$2');
        }
        if (v.length === 0) {
            return '0,00';
        }
        return v;
    }
    formatToPercent(v) {
        v = v.replace(/\D/g, '');
        if (v.length >= 3) {
            v = v.replace(/(\d{1,12})(\d{2})/, '$1,$2');
        }
        if (v.length === 0) {
            return '0';
        }
        return v;
    }
    formatToNumber(v) {
        v = v.replace(/\D/g, '');
        return v;
    }
    formatToZipCode(v) {
        v = v.replace(/\D/g, '');
        if (v.length === 3) {
            v = v.replace(/(\d{2})(\d{1})/, '$1.$2');
        }
        else if (v.length === 4) {
            v = v.replace(/(\d{2})(\d{2})/, '$1.$2');
        }
        else if (v.length === 5) {
            v = v.replace(/(\d{2})(\d{3})/, '$1.$2');
        }
        else if (v.length === 6) {
            v = v.replace(/(\d{2})(\d{3})(\d{1})/, '$1.$2-$3');
        }
        else if (v.length === 7) {
            v = v.replace(/(\d{2})(\d{3})(\d{2})/, '$1.$2-$3');
        }
        else if (v.length === 8) {
            v = v.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
        }
        if (v.length === 0) {
            return '';
        }
        return v;
    }
    formatToNothing(v) {
        return v;
    }
    setDefaultMaxLength() {
        if (this.type === InputType.ZIPCODE) {
            this.maxLength = 10;
        }
        if (this.type === InputType.CPF) {
            this.maxLength = 14;
        }
        if (this.type === InputType.CNPJ) {
            this.maxLength = 18;
        }
    }
    setFormatMask() {
        this.maskFormatMap.set(InputType.CPF, text => this.formatToCpf(text));
        this.maskFormatMap.set(InputType.CNPJ, text => this.formatToCnpj(text));
        this.maskFormatMap.set(InputType.PHONE, text => this.formatToPhone(text));
        this.maskFormatMap.set(InputType.NUMBER, text => this.formatToNumber(text));
        this.maskFormatMap.set(InputType.NO_FORMAT, text => this.formatToNothing(text));
        this.maskFormatMap.set(InputType.ZIPCODE, text => this.formatToZipCode(text));
        this.maskFormatMap.set(InputType.CURRENCY, text => this.formatToCurrency(text));
        this.maskFormatMap.set(InputType.PERCENT, text => this.formatToPercent(text));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardInputMaskComponent.prototype, "className", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FourwardInputMaskComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardInputMaskComponent.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardInputMaskComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FourwardInputMaskComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FourwardInputMaskComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FourwardInputMaskComponent.prototype, "maxLength", void 0);
FourwardInputMaskComponent = FourwardInputMaskComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'nfu-input-mask',
        template: __webpack_require__(/*! raw-loader!./fourward-input-mask.component.html */ "./node_modules/raw-loader/index.js!./projects/fourward-utils/src/lib/fourward-input-mask/fourward-input-mask.component.html"),
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: FourwardInputMaskComponent_1,
                multi: true
            }
        ]
    })
], FourwardInputMaskComponent);



/***/ }),

/***/ "./projects/fourward-utils/src/lib/fourward-input-mask/fourward-input-mask.module.ts":
/*!*******************************************************************************************!*\
  !*** ./projects/fourward-utils/src/lib/fourward-input-mask/fourward-input-mask.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: FourwardInputMaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourwardInputMaskModule", function() { return FourwardInputMaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _fourward_input_mask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fourward-input-mask.component */ "./projects/fourward-utils/src/lib/fourward-input-mask/fourward-input-mask.component.ts");





let FourwardInputMaskModule = class FourwardInputMaskModule {
};
FourwardInputMaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_fourward_input_mask_component__WEBPACK_IMPORTED_MODULE_4__["FourwardInputMaskComponent"]],
        exports: [_fourward_input_mask_component__WEBPACK_IMPORTED_MODULE_4__["FourwardInputMaskComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
    })
], FourwardInputMaskModule);



/***/ }),

/***/ "./projects/fourward-utils/src/public-api.ts":
/*!***************************************************!*\
  !*** ./projects/fourward-utils/src/public-api.ts ***!
  \***************************************************/
/*! exports provided: FieldType, FormResult, FourwardFormComponent, FourwardFormModule, FourwardFormService, InputType, FourwardInputMaskComponent, FourwardInputMaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_fourward_form_field_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/fourward-form/field-form */ "./projects/fourward-utils/src/lib/fourward-form/field-form.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldType", function() { return _lib_fourward_form_field_form__WEBPACK_IMPORTED_MODULE_0__["FieldType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormResult", function() { return _lib_fourward_form_field_form__WEBPACK_IMPORTED_MODULE_0__["FormResult"]; });

/* harmony import */ var _lib_fourward_form_fourward_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/fourward-form/fourward-form.component */ "./projects/fourward-utils/src/lib/fourward-form/fourward-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FourwardFormComponent", function() { return _lib_fourward_form_fourward_form_component__WEBPACK_IMPORTED_MODULE_1__["FourwardFormComponent"]; });

/* harmony import */ var _lib_fourward_form_fourward_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/fourward-form/fourward-form.module */ "./projects/fourward-utils/src/lib/fourward-form/fourward-form.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FourwardFormModule", function() { return _lib_fourward_form_fourward_form_module__WEBPACK_IMPORTED_MODULE_2__["FourwardFormModule"]; });

/* harmony import */ var _lib_fourward_form_fourward_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/fourward-form/fourward-form.service */ "./projects/fourward-utils/src/lib/fourward-form/fourward-form.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FourwardFormService", function() { return _lib_fourward_form_fourward_form_service__WEBPACK_IMPORTED_MODULE_3__["FourwardFormService"]; });

/* harmony import */ var _lib_fourward_input_mask_fourward_input_mask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/fourward-input-mask/fourward-input-mask.component */ "./projects/fourward-utils/src/lib/fourward-input-mask/fourward-input-mask.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputType", function() { return _lib_fourward_input_mask_fourward_input_mask_component__WEBPACK_IMPORTED_MODULE_4__["InputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FourwardInputMaskComponent", function() { return _lib_fourward_input_mask_fourward_input_mask_component__WEBPACK_IMPORTED_MODULE_4__["FourwardInputMaskComponent"]; });

/* harmony import */ var _lib_fourward_input_mask_fourward_input_mask_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/fourward-input-mask/fourward-input-mask.module */ "./projects/fourward-utils/src/lib/fourward-input-mask/fourward-input-mask.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FourwardInputMaskModule", function() { return _lib_fourward_input_mask_fourward_input_mask_module__WEBPACK_IMPORTED_MODULE_5__["FourwardInputMaskModule"]; });

/*
 * Public API Surface of fourward-utils
 */
/* Form Module */




/* InputMask Module */




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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");




const routes = [
    {
        path: '',
        redirectTo: 'introduction',
        pathMatch: 'full'
    },
    {
        path: 'introduction',
        component: _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"]
    },
    {
        path: 'instalation',
        loadChildren: () => __webpack_require__.e(/*! import() | instalation-instalation-module */ "instalation-instalation-module").then(__webpack_require__.bind(null, /*! ./instalation/instalation.module */ "./src/app/instalation/instalation.module.ts")).then(m => m.InstalationModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ng-fourward-utils';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_fourward_utils_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/fourward-utils/src/public-api */ "./projects/fourward-utils/src/public-api.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panelmenu */ "./node_modules/primeng/panelmenu.js");
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_panelmenu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reuse_component_reuse_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reuse-component/reuse-component.module */ "./src/app/reuse-component/reuse-component.module.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__["IntroductionComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            projects_fourward_utils_src_public_api__WEBPACK_IMPORTED_MODULE_5__["FourwardInputMaskModule"],
            projects_fourward_utils_src_public_api__WEBPACK_IMPORTED_MODULE_5__["FourwardFormModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            primeng_panelmenu__WEBPACK_IMPORTED_MODULE_8__["PanelMenuModule"],
            _reuse_component_reuse_component_module__WEBPACK_IMPORTED_MODULE_9__["ReuseComponentModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/introduction/introduction.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/introduction/introduction.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/introduction/introduction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntroductionComponent = class IntroductionComponent {
    constructor() {
        this.items = [];
    }
    ngOnInit() {
        this.items = [
            {
                label: 'Instalação',
                icon: 'pi pi-pw pi-cog',
                routerLink: ['/instalation']
            },
            {
                label: 'Componentes',
                items: [
                    {
                        label: 'nfu-form',
                        routerLink: '#'
                    },
                    {
                        label: 'nfu-table',
                        routerLink: '#'
                    },
                    {
                        label: 'nfu-input-text-mask',
                        routerLink: '#'
                    }
                ]
            },
            {
                label: 'Serviços',
                items: [
                    {
                        label: 'FourwardFormService',
                        routerLink: '#'
                    }
                ]
            },
            {
                label: 'Diretivas',
                items: [
                    {
                        label: 'Em desenvolvimento',
                        routerLink: '#'
                    }
                ]
            },
            {
                label: 'Models',
                items: [
                    {
                        label: 'Em desenvolvimento',
                        routerLink: '#'
                    }
                ]
            }
        ];
    }
};
IntroductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-introduction',
        template: __webpack_require__(/*! raw-loader!./introduction.component.html */ "./node_modules/raw-loader/index.js!./src/app/introduction/introduction.component.html"),
        styles: [__webpack_require__(/*! ./introduction.component.scss */ "./src/app/introduction/introduction.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IntroductionComponent);



/***/ }),

/***/ "./src/app/reuse-component/clipboard-input/clipboard-input.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/reuse-component/clipboard-input/clipboard-input.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-copy {\n  -webkit-transform: transform 1ms ease-out;\n          transform: transform 1ms ease-out;\n  width: 100%;\n  z-index: 999;\n}\n\n.icon-copy:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.input-group-text {\n  cursor: pointer;\n  position: relative;\n}\n\n.cliped-success {\n  position: absolute;\n  left: -70px;\n  bottom: 5px;\n  font-size: 0.8em;\n  opacity: 0;\n}\n\n.copied {\n  -webkit-animation: copied 2s ease-out backwards;\n          animation: copied 2s ease-out backwards;\n}\n\n@-webkit-keyframes copied {\n  100% {\n    z-index: 99999;\n    -webkit-transform: translateY(40px);\n            transform: translateY(40px);\n    opacity: 1;\n  }\n}\n\n@keyframes copied {\n  100% {\n    z-index: 99999;\n    -webkit-transform: translateY(40px);\n            transform: translateY(40px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9tYWlxdWVyb3NhL25nLWZvdXJ3YXJkLXV0aWxzL3NyYy9hcHAvcmV1c2UtY29tcG9uZW50L2NsaXBib2FyZC1pbnB1dC9jbGlwYm9hcmQtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JldXNlLWNvbXBvbmVudC9jbGlwYm9hcmQtaW5wdXQvY2xpcGJvYXJkLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLCtDQUFBO1VBQUEsdUNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxVQUFBO0VDQ0Y7QUFDRjs7QUROQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxVQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JldXNlLWNvbXBvbmVudC9jbGlwYm9hcmQtaW5wdXQvY2xpcGJvYXJkLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tY29weSB7XG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtIDFtcyBlYXNlLW91dDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmljb24tY29weTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmlucHV0LWdyb3VwLXRleHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNsaXBlZC1zdWNjZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNzBweDtcbiAgYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jb3BpZWQge1xuICBhbmltYXRpb246IGNvcGllZCAycyBlYXNlLW91dCBiYWNrd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgY29waWVkIHtcbiAgMTAwJSB7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiIsIi5pY29uLWNvcHkge1xuICB0cmFuc2Zvcm06IHRyYW5zZm9ybSAxbXMgZWFzZS1vdXQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5pY29uLWNvcHk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbGlwZWQtc3VjY2VzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTcwcHg7XG4gIGJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY29waWVkIHtcbiAgYW5pbWF0aW9uOiBjb3BpZWQgMnMgZWFzZS1vdXQgYmFja3dhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGNvcGllZCB7XG4gIDEwMCUge1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/reuse-component/clipboard-input/clipboard-input.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/reuse-component/clipboard-input/clipboard-input.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClipboardInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardInputComponent", function() { return ClipboardInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClipboardInputComponent = class ClipboardInputComponent {
    constructor() {
        this.elementId = 'cliped-input';
        this.installCommandCopied = false;
    }
    ngOnInit() { }
    copyCommand() {
        const el = document.getElementById(this.elementId);
        el.disabled = false;
        el.select();
        el.disabled = true;
        document.execCommand('copy');
        this.installCommandCopied = true;
        setTimeout(() => {
            this.installCommandCopied = false;
        }, 3000);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ClipboardInputComponent.prototype, "code", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ClipboardInputComponent.prototype, "elementId", void 0);
ClipboardInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clipboard-input',
        template: __webpack_require__(/*! raw-loader!./clipboard-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/reuse-component/clipboard-input/clipboard-input.component.html"),
        styles: [__webpack_require__(/*! ./clipboard-input.component.scss */ "./src/app/reuse-component/clipboard-input/clipboard-input.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ClipboardInputComponent);



/***/ }),

/***/ "./src/app/reuse-component/inner-code/inner-code.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/reuse-component/inner-code/inner-code.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldXNlLWNvbXBvbmVudC9pbm5lci1jb2RlL2lubmVyLWNvZGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/reuse-component/inner-code/inner-code.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/reuse-component/inner-code/inner-code.component.ts ***!
  \********************************************************************/
/*! exports provided: InnerCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerCodeComponent", function() { return InnerCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InnerCodeComponent = class InnerCodeComponent {
    constructor() {
        this.innerCodeClass = 'text-warning';
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InnerCodeComponent.prototype, "containerClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InnerCodeComponent.prototype, "innerCodeClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InnerCodeComponent.prototype, "innerCode", void 0);
InnerCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inner-code',
        template: __webpack_require__(/*! raw-loader!./inner-code.component.html */ "./node_modules/raw-loader/index.js!./src/app/reuse-component/inner-code/inner-code.component.html"),
        styles: [__webpack_require__(/*! ./inner-code.component.scss */ "./src/app/reuse-component/inner-code/inner-code.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InnerCodeComponent);



/***/ }),

/***/ "./src/app/reuse-component/reuse-component.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/reuse-component/reuse-component.module.ts ***!
  \***********************************************************/
/*! exports provided: ReuseComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReuseComponentModule", function() { return ReuseComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _clipboard_input_clipboard_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clipboard-input/clipboard-input.component */ "./src/app/reuse-component/clipboard-input/clipboard-input.component.ts");
/* harmony import */ var _inner_code_inner_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inner-code/inner-code.component */ "./src/app/reuse-component/inner-code/inner-code.component.ts");





let ReuseComponentModule = class ReuseComponentModule {
};
ReuseComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_clipboard_input_clipboard_input_component__WEBPACK_IMPORTED_MODULE_3__["ClipboardInputComponent"], _inner_code_inner_code_component__WEBPACK_IMPORTED_MODULE_4__["InnerCodeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_clipboard_input_clipboard_input_component__WEBPACK_IMPORTED_MODULE_3__["ClipboardInputComponent"], _inner_code_inner_code_component__WEBPACK_IMPORTED_MODULE_4__["InnerCodeComponent"]]
    })
], ReuseComponentModule);



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
const environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/maiquerosa/ng-fourward-utils/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map