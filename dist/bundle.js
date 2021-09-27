/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Cart.ts":
/*!*********************!*\
  !*** ./src/Cart.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Cart = (function () {\r\n    function Cart() {\r\n        this._products = [];\r\n    }\r\n    Cart.prototype.addProduct = function (p) {\r\n        this._products.push(p);\r\n    };\r\n    return Cart;\r\n}());\r\nexports[\"default\"] = Cart;\r\n\n\n//# sourceURL=webpack://rodrigo_alonso_compartido/./src/Cart.ts?");

/***/ }),

/***/ "./src/Catalogue.ts":
/*!**************************!*\
  !*** ./src/Catalogue.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Catalogue = (function () {\r\n    function Catalogue() {\r\n        this._products = [];\r\n    }\r\n    Catalogue.prototype.add = function (p) {\r\n        this._products.push(p);\r\n    };\r\n    Catalogue.prototype.getAllProducts = function () {\r\n        return this._products;\r\n    };\r\n    Catalogue.prototype.searchById = function (id) {\r\n        return this._products.find(function (p) { return p.id == id; });\r\n    };\r\n    return Catalogue;\r\n}());\r\nexports[\"default\"] = Catalogue;\r\n\n\n//# sourceURL=webpack://rodrigo_alonso_compartido/./src/Catalogue.ts?");

/***/ }),

/***/ "./src/Product.ts":
/*!************************!*\
  !*** ./src/Product.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Product = (function () {\r\n    function Product() {\r\n        this._id;\r\n        this._productName;\r\n        this._price;\r\n        this._description;\r\n        this._image;\r\n        this._stock;\r\n    }\r\n    Object.defineProperty(Product.prototype, \"id\", {\r\n        get: function () {\r\n            return this._id;\r\n        },\r\n        set: function (v) {\r\n            this._id = v;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Product.prototype, \"productName\", {\r\n        get: function () {\r\n            return this._productName;\r\n        },\r\n        set: function (v) {\r\n            this._productName = v;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Product.prototype, \"price\", {\r\n        get: function () {\r\n            return this._price;\r\n        },\r\n        set: function (v) {\r\n            this._price = v;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Product.prototype, \"description\", {\r\n        get: function () {\r\n            return this._description;\r\n        },\r\n        set: function (v) {\r\n            this._description = v;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Product.prototype, \"image\", {\r\n        get: function () {\r\n            return this._image;\r\n        },\r\n        set: function (v) {\r\n            this._image = v;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return Product;\r\n}());\r\nexports[\"default\"] = Product;\r\n\n\n//# sourceURL=webpack://rodrigo_alonso_compartido/./src/Product.ts?");

/***/ }),

/***/ "./src/Store.ts":
/*!**********************!*\
  !*** ./src/Store.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Cart_1 = __importDefault(__webpack_require__(/*! ./Cart */ \"./src/Cart.ts\"));\r\nvar Catalogue_1 = __importDefault(__webpack_require__(/*! ./Catalogue */ \"./src/Catalogue.ts\"));\r\nvar Product_1 = __importDefault(__webpack_require__(/*! ./Product */ \"./src/Product.ts\"));\r\nvar Store = (function () {\r\n    function Store() {\r\n        this._cart = new Cart_1.default();\r\n        this._catalogue = new Catalogue_1.default();\r\n    }\r\n    Store.prototype.getCart = function () {\r\n        return this._cart;\r\n    };\r\n    Store.prototype.getCatalogue = function () {\r\n        return this._catalogue;\r\n    };\r\n    Store.prototype.fetchProducts = function (url) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var productData;\r\n            var _this = this;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        productData = [];\r\n                        return [4, fetch(url)\r\n                                .then(function (res) { return res.json(); })\r\n                                .then(function (json) { return productData = json; })\r\n                                .catch(function (err) { return console.log(\"Ocurrio un error.\", err); })];\r\n                    case 1:\r\n                        _a.sent();\r\n                        productData.forEach(function (item) {\r\n                            var product = new Product_1.default();\r\n                            console.log(item.productName);\r\n                            product.id = item.id;\r\n                            product.productName = item.productName;\r\n                            product.price = item.price;\r\n                            product.description = item.description;\r\n                            product.image = item.image;\r\n                            _this._catalogue.add(product);\r\n                        });\r\n                        return [2];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return Store;\r\n}());\r\nexports[\"default\"] = Store;\r\n\n\n//# sourceURL=webpack://rodrigo_alonso_compartido/./src/Store.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Store_1 = __importDefault(__webpack_require__(/*! ./Store */ \"./src/Store.ts\"));\r\nvar renderProductList_1 = __importDefault(__webpack_require__(/*! ./views/renderProductList */ \"./src/views/renderProductList.ts\"));\r\nvar store = new Store_1.default();\r\nvar productCard = document.getElementById(\"js-product-card\");\r\nvar url = \"http://demo1372636.mockable.io/api/tina\";\r\n(function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var catalogue, products;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4, store.fetchProducts(url)];\r\n            case 1:\r\n                _a.sent();\r\n                catalogue = store.getCatalogue();\r\n                products = catalogue.getAllProducts();\r\n                products.forEach(function (product) {\r\n                    if (!productCard) {\r\n                        throw new Error(\"there is not a product card\");\r\n                        return;\r\n                    }\r\n                    productCard.innerHTML += (0, renderProductList_1.default)(product);\r\n                });\r\n                return [2];\r\n        }\r\n    });\r\n}); })();\r\n\n\n//# sourceURL=webpack://rodrigo_alonso_compartido/./src/index.ts?");

/***/ }),

/***/ "./src/views/renderProductList.ts":
/*!****************************************!*\
  !*** ./src/views/renderProductList.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction renderProductList(product) {\r\n    return \"\\n    <div name=\\\"card-product\\\" class=\\\"d-flex container product-card\\\" data-product-id=\\\"\" + product.id + \"\\\">\\n        <div class=\\\"product-img\\\">\\n            <img src=\\\"\" + product.image + \"\\\" alt=\\\"\\\">\\n        </div>\\n        <div class=\\\"d-flex product-listing\\\">\\n            <h3 class=\\\"item-name\\\">\" + product.productName + \"</h3>\\n            <p class=\\\"item-info\\\">\" + product.description + \"</p>\\n            <p class=\\\"item-price\\\"> Precio: $\" + product.price + \"</p>\\n        </div>\\n        <div class=\\\"d-flex sell-options\\\">\\n            <a href=\\\"#\\\" class=\\\"product-button\\\">Comprar</a>\\n            <div class=\\\"button\\\">\\n                <img src=\\\"src/img/img-cart.png\\\" alt=\\\"\\\" class=\\\"icon\\\">\\n            </div>\\n        </div>\\n    </div>\\n    \";\r\n}\r\nexports[\"default\"] = renderProductList;\r\n\n\n//# sourceURL=webpack://rodrigo_alonso_compartido/./src/views/renderProductList.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;