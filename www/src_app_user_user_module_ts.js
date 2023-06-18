"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_user_module_ts"],{

/***/ 454:
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageRoutingModule": () => (/* binding */ UserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page */ 8169);




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_0__.UserPage
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserPageRoutingModule);



/***/ }),

/***/ 8524:
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageModule": () => (/* binding */ UserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 454);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.module */ 677);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 3244);
/* harmony import */ var ng_qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-qrcode */ 9851);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.page */ 8169);










let UserPageModule = class UserPageModule {
};
UserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule,
            _header_header_module__WEBPACK_IMPORTED_MODULE_1__.headerModule,
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__.NgxQRCodeModule,
            ng_qrcode__WEBPACK_IMPORTED_MODULE_9__.QrCodeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_2__.UserPage]
    })
], UserPageModule);



/***/ }),

/***/ 8169:
/*!***********************************!*\
  !*** ./src/app/user/user.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPage": () => (/* binding */ UserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page.html?ngResource */ 7493);
/* harmony import */ var _user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page.scss?ngResource */ 5823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 3244);
/* harmony import */ var src_http_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/http/app.service */ 9530);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);







let UserPage = class UserPage {
    constructor(appService, formBuilder) {
        this.appService = appService;
        this.formBuilder = formBuilder;
        this.collabForm = this.formBuilder.group({
            observation: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_4__.NgxQrcodeElementTypes.URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_4__.NgxQrcodeErrorCorrectionLevels.HIGH;
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.collabForm.controls;
    }
    ngOnInit() {
        this.appSubscription = this.appService.previousUrl.subscribe((url) => {
            this.previousUrl = url;
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.appSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
};
UserPage.ctorParameters = () => [
    { type: src_http_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
UserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-user",
        template: _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserPage);



/***/ }),

/***/ 5823:
/*!************************************************!*\
  !*** ./src/app/user/user.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-label {\n  font-weight: 600;\n}\n\n.avatar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin: 1.2rem;\n}\n\n.avatar-img {\n  border-radius: 1rem;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n}\n\n.button-container {\n  display: grid;\n  grid-gap: 1rem;\n  padding: 1rem;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.navigation {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxxRkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUYiLCJmaWxlIjoidXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1sYWJlbHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbjogMS4ycmVtO1xufVxuXG4uYXZhdGFyLWltZ3tcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xufVxuXG4ubmF2aWdhdGlvbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */";

/***/ }),

/***/ 7493:
/*!************************************************!*\
  !*** ./src/app/user/user.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<app-header [title]=\"'Usuario'\"></app-header>\n\n<ion-content>\n  <div class=\"avatar\">\n      <img\n          class=\"avatar-img\"\n          src=\"data:image/jpeg;base64,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\"\n        />\n  </div>\n\n  <ion-item>\n    <ion-label>Nombre</ion-label>\n    Eduardo Hernandez\n  </ion-item>\n\n  <ion-item>\n    <ion-label> Empresa </ion-label>\n    Nombre Empresa\n  </ion-item>\n\n  <ion-item>\n    <ion-label> Estatus </ion-label>\n    Estatus\n  </ion-item>\n\n  <ion-item>\n    <ion-label> Prioridad </ion-label>\n    Tipo Prioridad\n  </ion-item>\n\n  <ion-item>\n    <ion-label> Asunto </ion-label>\n    Tipo Asunto\n  </ion-item>\n\n  <form [formGroup]=\"collabForm\">\n    <ion-item>\n      <ion-label>Notas:</ion-label>\n      <ion-textarea\n        placeholder=\"Escriba sus observaciones\"\n        formControlName=\"observation\"\n      ></ion-textarea>\n    </ion-item>\n  </form>\n\n  <section class=\"button-container\">\n    <ion-button\n      [disabled]=\"!collabForm.valid\"\n      color=\"danger\"\n      expand=\"block\"\n      class=\"mb-2\"\n      >Cancelar</ion-button\n    >\n    <ion-button\n      [disabled]=\"!collabForm.valid\"\n      color=\"primary\"\n      expand=\"block\"\n      class=\"mb-2\"\n      >Aceptar</ion-button\n    >\n  </section>\n</ion-content>\n";

/***/ }),

/***/ 9851:
/*!*******************************************************!*\
  !*** ./node_modules/ng-qrcode/fesm2015/ng-qrcode.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrCodeComponent": () => (/* binding */ QrCodeComponent),
/* harmony export */   "QrCodeDirective": () => (/* binding */ QrCodeDirective),
/* harmony export */   "QrCodeModule": () => (/* binding */ QrCodeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode */ 5646);







function QrCodeComponent_canvas_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 1);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("qrCode", ctx_r0.value)("qrCodeErrorCorrectionLevel", ctx_r0.errorCorrectionLevel)("qrCodeCenterImageSrc", ctx_r0.centerImageSrc)("qrCodeCenterImageWidth", ctx_r0.centerImageSize)("qrCodeCenterImageHeight", ctx_r0.centerImageSize)("qrCodeMargin", ctx_r0.margin)("width", ctx_r0.size)("height", ctx_r0.size)("darkColor", ctx_r0.darkColor)("lightColor", ctx_r0.lightColor);
  }
}

const validColorRegex = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;

class QrCodeDirective {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef; // eslint-disable-next-line @angular-eslint/no-input-rename

    this.errorCorrectionLevel = QrCodeDirective.DEFAULT_ERROR_CORRECTION_LEVEL;
    this.darkColor = "#000000FF";
    this.lightColor = "#FFFFFFFF"; // eslint-disable-next-line @angular-eslint/no-input-rename

    this.margin = 16;
  }

  ngOnChanges() {
    var _a, _b;

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      if (!this.value) {
        return;
      }

      if (this.version && this.version > 40) {
        console.warn("[qrCode] max version is 40, clamping");
        this.version = 40;
      } else if (this.version && this.version < 1) {
        console.warn("[qrCode] min version is 1, clamping");
        this.version = 1;
      } else if (this.version !== undefined && isNaN(this.version)) {
        console.warn("[qrCode] version should be set to a number, defaulting to auto");
        this.version = undefined;
      }

      const canvas = this.viewContainerRef.element.nativeElement;

      if (!canvas) {
        // native element not available on server side rendering
        return;
      }

      const context = canvas.getContext("2d");

      if (context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      }

      const errorCorrectionLevel = (_a = this.errorCorrectionLevel) !== null && _a !== void 0 ? _a : QrCodeDirective.DEFAULT_ERROR_CORRECTION_LEVEL;
      const dark = validColorRegex.test(this.darkColor) ? this.darkColor : undefined;
      const light = validColorRegex.test(this.lightColor) ? this.lightColor : undefined;

      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)()) {
        if (!dark && this.darkColor) {
          console.error("[ng-qrcode] darkColor set to invalid value, must be RGBA hex color string, eg: #3050A1FF");
        }

        if (!light && this.lightColor) {
          console.error("[ng-qrcode] lightColor set to invalid value, must be RGBA hex color string, eg: #3050A130");
        }
      }

      yield qrcode__WEBPACK_IMPORTED_MODULE_0__.toCanvas(canvas, this.value, {
        version: this.version,
        errorCorrectionLevel,
        width: this.width,
        margin: this.margin,
        color: {
          dark,
          light
        }
      });
      const centerImageSrc = this.centerImageSrc;
      const centerImageWidth = getIntOrDefault(this.centerImageWidth, QrCodeDirective.DEFAULT_CENTER_IMAGE_SIZE);
      const centerImageHeight = getIntOrDefault(this.centerImageHeight, QrCodeDirective.DEFAULT_CENTER_IMAGE_SIZE);

      if (centerImageSrc && context) {
        if (!this.centerImage) {
          this.centerImage = new Image(centerImageWidth, centerImageHeight);
        }

        if (centerImageSrc !== ((_b = this.centerImage) === null || _b === void 0 ? void 0 : _b.src)) {
          this.centerImage.src = centerImageSrc;
        }

        if (centerImageWidth !== this.centerImage.width) {
          this.centerImage.width = centerImageWidth;
        }

        if (centerImageHeight !== this.centerImage.height) {
          this.centerImage.height = centerImageHeight;
        }

        const centerImage = this.centerImage;

        centerImage.onload = () => {
          context.drawImage(centerImage, canvas.width / 2 - centerImageWidth / 2, canvas.height / 2 - centerImageHeight / 2, centerImageWidth, centerImageHeight);
        };
      }
    });
  }

}

QrCodeDirective.DEFAULT_ERROR_CORRECTION_LEVEL = "M";
QrCodeDirective.DEFAULT_CENTER_IMAGE_SIZE = 40;

QrCodeDirective.ɵfac = function QrCodeDirective_Factory(t) {
  return new (t || QrCodeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef));
};

QrCodeDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: QrCodeDirective,
  selectors: [["canvas", "qrCode", ""]],
  inputs: {
    value: ["qrCode", "value"],
    version: ["qrCodeVersion", "version"],
    errorCorrectionLevel: ["qrCodeErrorCorrectionLevel", "errorCorrectionLevel"],
    width: "width",
    height: "height",
    darkColor: "darkColor",
    lightColor: "lightColor",
    centerImageSrc: ["qrCodeCenterImageSrc", "centerImageSrc"],
    centerImageWidth: ["qrCodeCenterImageWidth", "centerImageWidth"],
    centerImageHeight: ["qrCodeCenterImageHeight", "centerImageHeight"],
    margin: ["qrCodeMargin", "margin"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QrCodeDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: `canvas[qrCode]`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCode"]
    }],
    version: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCodeVersion"]
    }],
    errorCorrectionLevel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCodeErrorCorrectionLevel"]
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    darkColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lightColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    centerImageSrc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCodeCenterImageSrc"]
    }],
    centerImageWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCodeCenterImageWidth"]
    }],
    centerImageHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCodeCenterImageHeight"]
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCodeMargin"]
    }]
  });
})();

function getIntOrDefault(value, defaultValue) {
  if (value === undefined || value === "") {
    return defaultValue;
  }

  if (typeof value === "string") {
    return parseInt(value, 10);
  }

  return value;
}

class QrCodeComponent {}

QrCodeComponent.ɵfac = function QrCodeComponent_Factory(t) {
  return new (t || QrCodeComponent)();
};

QrCodeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QrCodeComponent,
  selectors: [["qr-code"]],
  inputs: {
    value: "value",
    size: "size",
    darkColor: "darkColor",
    lightColor: "lightColor",
    errorCorrectionLevel: "errorCorrectionLevel",
    centerImageSrc: "centerImageSrc",
    centerImageSize: "centerImageSize",
    margin: "margin"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "qrCode", "qrCodeErrorCorrectionLevel", "qrCodeCenterImageSrc", "qrCodeCenterImageWidth", "qrCodeCenterImageHeight", "qrCodeMargin", "width", "height", "darkColor", "lightColor", 4, "ngIf"], [3, "qrCode", "qrCodeErrorCorrectionLevel", "qrCodeCenterImageSrc", "qrCodeCenterImageWidth", "qrCodeCenterImageHeight", "qrCodeMargin", "width", "height", "darkColor", "lightColor"]],
  template: function QrCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QrCodeComponent_canvas_0_Template, 1, 10, "canvas", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.value);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, QrCodeDirective],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QrCodeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: "qr-code",
      template: `
    <canvas *ngIf="value"
            [qrCode]="value"
            [qrCodeErrorCorrectionLevel]="errorCorrectionLevel"
            [qrCodeCenterImageSrc]="centerImageSrc"
            [qrCodeCenterImageWidth]="centerImageSize"
            [qrCodeCenterImageHeight]="centerImageSize"
            [qrCodeMargin]="margin"
            [width]="size"
            [height]="size"
            [darkColor]="darkColor"
            [lightColor]="lightColor"
    >
    </canvas>
  `,
      styles: []
    }]
  }], null, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    darkColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lightColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    errorCorrectionLevel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    centerImageSrc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    centerImageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

class QrCodeModule {}

QrCodeModule.ɵfac = function QrCodeModule_Factory(t) {
  return new (t || QrCodeModule)();
};

QrCodeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: QrCodeModule,
  declarations: [QrCodeComponent, QrCodeDirective],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  exports: [QrCodeComponent, QrCodeDirective]
});
QrCodeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QrCodeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [QrCodeComponent, QrCodeDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [QrCodeComponent, QrCodeDirective]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ng-qrcode
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_user_user_module_ts.js.map