System.register(["angular2/core","angular2/router","./+purple-aligator"],function(exports_1,context_1){"use strict";var __moduleName=context_1&&context_1.id;var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};var __metadata=this&&this.__metadata||function(k,v){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(k,v)};var core_1,router_1,_purple_aligator_1;var QqcvIoApp;return{setters:[function(core_1_1){core_1=core_1_1},function(router_1_1){router_1=router_1_1},function(_purple_aligator_1_1){_purple_aligator_1=_purple_aligator_1_1}],execute:function(){QqcvIoApp=function(){function QqcvIoApp(){this.defaultMeaning=42}QqcvIoApp.prototype.meaningOfLife=function(meaning){return"The meaning of life is "+(meaning||this.defaultMeaning)};QqcvIoApp=__decorate([core_1.Component({moduleId:__moduleName,selector:"qqcv-io-app",providers:[router_1.ROUTER_PROVIDERS],templateUrl:"qqcv-io.component.html",styleUrls:["qqcv-io.component.css"],directives:[router_1.ROUTER_DIRECTIVES],pipes:[]}),router_1.RouteConfig([{path:"/purple-aligator",name:"PurpleAligator",component:_purple_aligator_1.PurpleAligatorComponent}]),__metadata("design:paramtypes",[])],QqcvIoApp);return QqcvIoApp}();exports_1("QqcvIoApp",QqcvIoApp)}}});