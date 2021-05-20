"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
exports.__esModule = true;
var React = __importStar(require("react"));
var applicationinsights_web_1 = require("@microsoft/applicationinsights-web");
var IS_BROWSER = typeof window !== "undefined";
var appInsights;
exports.withApplicationInsights = function (config) {
    return function (App) {
        var _a;
        return _a = /** @class */ (function (_super) {
                __extends(WithApplicationInsights, _super);
                function WithApplicationInsights() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                WithApplicationInsights.prototype.componentDidMount = function () {
                    this.initializeAppInsights();
                    this.trackPageView();
                };
                WithApplicationInsights.prototype.componentDidCatch = function (error) {
                    if (appInsights) {
                        appInsights.trackException({ exception: error });
                    }
                };
                WithApplicationInsights.prototype.initializeAppInsights = function () {
                    if (IS_BROWSER && config.isEnabled && !appInsights) {
                        appInsights = new applicationinsights_web_1.ApplicationInsights({ config: config });
                        appInsights.loadAppInsights();
                        window.appInsights = appInsights;
                    }
                };
                WithApplicationInsights.prototype.trackPageView = function () {
                    if (appInsights) {
                        var name_1 = location.pathname.replace(/(?=.{34})[a-zA-Z0-9]+(-[a-zA-Z0-9]+){4}\//, '')
                            || this.props.Component.displayName
                            || this.props.Component.name;
                        var properties = {
                            route: this.props.router.route
                        };
                        if (this.props.router.query) {
                            for (var key in this.props.router.query) {
                                properties["query." + key] = this.props.router.query[key];
                            }
                        }
                        appInsights.trackPageView({ name: name_1, properties: properties });
                    }
                };
                WithApplicationInsights.prototype.render = function () {
                    this.trackPageView();
                    return React.createElement(App, this.props);
                };
                return WithApplicationInsights;
            }(React.Component)),
            _a.getInitialProps = function (appCtx) { return __awaiter(_this, void 0, void 0, function () {
                var appProps, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            appProps = { pageProps: {} };
                            if (!App.getInitialProps) return [3 /*break*/, 2];
                            _a = [{}, appProps];
                            return [4 /*yield*/, App.getInitialProps(appCtx)];
                        case 1:
                            appProps = __assign.apply(void 0, _a.concat([_b.sent()]));
                            _b.label = 2;
                        case 2: return [2 /*return*/, __assign({}, appProps)];
                    }
                });
            }); },
            _a;
    };
};
