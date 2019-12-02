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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: false,
                    anchorScrolling: "enabled",
                    onSameUrlNavigation: "reload",
                    enableTracing: true,
                    scrollPositionRestoration: "enabled"
                }),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".navbar {\n    background: white;\n    border-bottom: 1px solid black;\n    z-index: 10;\n}\n\n.navbar-brand {\n    font-size: 60px;\n    font-weight: lighter;\n}\n\n.nav-link {\n    font-size: 20px;\n    font-weight: lighter;\n    width: 150px;\n}\n\n.nav-item a {\n    border: 1px transparent;\n    -webkit-transition: border 0.33s;\n    transition: border 0.33s;\n}\n\n.nav-item a:hover {\n    cursor: pointer;\n}\n\n.pad-left { \n    padding-left: 50px;\n}\n\n.pad-right {\n    padding-right: 50px;\n}\n\n/* CSS for the app  */\n\n* {\n    font-weight: lighter;\n}\n\n.about {\n    height: 100px;\n    font-size: 40px;\n    font-weight: lighter;\n    text-align: right;\n    background-color: #4829fa;\n    color: white;\n    padding-right: 30px;\n    padding-top: 10px;\n}\n\n.carousel {\n    background-color: #4829fa;\n    color: white;\n    height: 600px;\n    font-size: 25px;\n    padding-top: 10px;\n    text-align: left;\n    padding-left: 30px;\n    padding-right: 20px;\n}\n\n.carousel-control-prev,\n.carousel-control-next{\n    bottom: -85%;\n}\n\n.carousel-indicators li {\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n}\n\n.col-sm-6 {\n    display: inline-block;\n    padding: 0px;\n    margin-left: 0px;\n}\n\n.crop img{\n    width: 500px;\n    height: auto;\n    border-radius: 50%;\n    border: 1px solid black;\n    box-shadow: 0 0 4px 0 black;\n}\n\n.projects-title {\n    font-size: 60px;\n    text-align: right;\n    padding-right: 75px;\n}\n\n.projects {\n    height: 700px;\n    background-color: #4829fa;\n    color: white;\n}\n\n.resume {\n    background-color: #4829fa;\n    color: white;\n    position: relative;\n    max-width: 100%;\n    margin: 0 auto;\n}\n\n.resume::after {\n    content: '';\n    position: absolute;\n    width: 6px;\n    background-color: white;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    margin-left: -3px;\n}\n\n/* Container around content */\n\n.resume-container {\n    padding: 10px 30px;\n    position: relative;\n    background-color: inherit;\n    width: 50%;\n    color: black;\n}\n\n/* The circles on the timeline */\n\n.resume-container::after {\n    content: '';\n    position: absolute;\n    width: 35px;\n    height: 35px;\n    right: -17px;\n    background-color: #FF9F55;\n    border: 4px solid white;\n    top: 15px;\n    border-radius: 50%;\n    z-index: 1;\n}\n\n.resume-title {\n    font-size: 60px;\n    text-align: right;\n    padding-right: 75px;\n}\n\n/* Place the container to the left */\n\n.left {\nleft: 0px;\n}\n\n/* Place the container to the right */\n\n.right {\nleft: 50%;\n}\n\n/* Add arrows to the left container (pointing right) */\n\n.left::before {\ncontent: \" \";\nheight: 0;\nposition: absolute;\ntop: 23px;\nwidth: 0;\nz-index: 1;\nright: 20px;\nborder: medium solid white;\nborder-width: 10px 0 10px 10px;\nborder-color: transparent transparent transparent white;\n}\n\n/* Add arrows to the right container (pointing left) */\n\n.right::before {\ncontent: \" \";\nheight: 0;\nposition: absolute;\ntop: 23px;\nwidth: 0;\nz-index: 1;\nleft: 20px;\nborder: medium solid white;\nborder-width: 10px 10px 10px 0;\nborder-color: transparent white transparent transparent;\n}\n\n/* Fix the circle for containers on the right side */\n\n.right::after {\nleft: -16px;\n}\n\n/* The actual content */\n\n.content {\npadding: 20px 30px;\nbackground-color: white;\nposition: relative;\nborder-radius: 6px;\n}\n\n/* Media queries - Responsive timeline on screens less than 600px wide */\n\n@media screen and (max-width: 600px) {\n/* Place the timelime to the left */\n.timeline::after {\n    left: 31px;\n}\n\n/* Full-width containers */\n.container {\n    padding-left: 50px;\n    padding-right: 25px;\n}\n\n/* Make sure that all arrows are pointing leftwards */\n.container::before {\n    left: 60px;\n    border: medium solid white;\n    border-width: 10px 10px 10px 0;\n    border-color: transparent white transparent transparent;\n}\n\n/* Make sure all circles are at the same spot */\n.left::after, .right::after {\n    left: 15px;\n}\n\n/* Make all right containers behave like the left ones */\n.right {\n    left: 0%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0NBQXdCO0lBQXhCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBR0EscUJBQXFCOztBQUNyQjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFNBQVM7SUFDVCxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBLDZCQUE2Qjs7QUFDN0I7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUEsb0NBQW9DOztBQUNwQztBQUNBLFNBQVM7QUFDVDs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0FBQ0EsU0FBUztBQUNUOztBQUVBLHNEQUFzRDs7QUFDdEQ7QUFDQSxZQUFZO0FBQ1osU0FBUztBQUNULGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsUUFBUTtBQUNSLFVBQVU7QUFDVixXQUFXO0FBQ1gsMEJBQTBCO0FBQzFCLDhCQUE4QjtBQUM5Qix1REFBdUQ7QUFDdkQ7O0FBRUEsc0RBQXNEOztBQUN0RDtBQUNBLFlBQVk7QUFDWixTQUFTO0FBQ1Qsa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxRQUFRO0FBQ1IsVUFBVTtBQUNWLFVBQVU7QUFDViwwQkFBMEI7QUFDMUIsOEJBQThCO0FBQzlCLHVEQUF1RDtBQUN2RDs7QUFFQSxvREFBb0Q7O0FBQ3BEO0FBQ0EsV0FBVztBQUNYOztBQUVBLHVCQUF1Qjs7QUFDdkI7QUFDQSxrQkFBa0I7QUFDbEIsdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEI7O0FBRUEsd0VBQXdFOztBQUN4RTtBQUNBLG1DQUFtQztBQUNuQztJQUNJLFVBQVU7QUFDZDs7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBLHFEQUFxRDtBQUNyRDtJQUNJLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHVEQUF1RDtBQUMzRDs7QUFFQSwrQ0FBK0M7QUFDL0M7SUFDSSxVQUFVO0FBQ2Q7O0FBRUEsd0RBQXdEO0FBQ3hEO0lBQ0ksUUFBUTtBQUNaO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4ubmF2LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbi5uYXYtaXRlbSBhIHtcbiAgICBib3JkZXI6IDFweCB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zM3M7XG59XG5cbi5uYXYtaXRlbSBhOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWQtbGVmdCB7IFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLnBhZC1yaWdodCB7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuXG4vKiBDU1MgZm9yIHRoZSBhcHAgICovXG4qIHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmFib3V0IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDgyOWZhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY2Fyb3VzZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODI5ZmE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0e1xuICAgIGJvdHRvbTogLTg1JTtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uY29sLXNtLTYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmNyb3AgaW1ne1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggMCBibGFjaztcbn1cblxuLnByb2plY3RzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNzVweDtcbn1cblxuLnByb2plY3RzIHtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODI5ZmE7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVzdW1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDgyOWZhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucmVzdW1lOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5cbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xuLnJlc3VtZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXG4ucmVzdW1lLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcmlnaHQ6IC0xN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjlGNTU7XG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ucmVzdW1lLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNzVweDtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xuLmxlZnQge1xubGVmdDogMHB4O1xufVxuICBcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIHJpZ2h0ICovXG4ucmlnaHQge1xubGVmdDogNTAlO1xufVxuICBcbi8qIEFkZCBhcnJvd3MgdG8gdGhlIGxlZnQgY29udGFpbmVyIChwb2ludGluZyByaWdodCkgKi9cbi5sZWZ0OjpiZWZvcmUge1xuY29udGVudDogXCIgXCI7XG5oZWlnaHQ6IDA7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDIzcHg7XG53aWR0aDogMDtcbnotaW5kZXg6IDE7XG5yaWdodDogMjBweDtcbmJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xuYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxMHB4O1xuYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZTtcbn1cblxuLyogQWRkIGFycm93cyB0byB0aGUgcmlnaHQgY29udGFpbmVyIChwb2ludGluZyBsZWZ0KSAqL1xuLnJpZ2h0OjpiZWZvcmUge1xuY29udGVudDogXCIgXCI7XG5oZWlnaHQ6IDA7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDIzcHg7XG53aWR0aDogMDtcbnotaW5kZXg6IDE7XG5sZWZ0OiAyMHB4O1xuYm9yZGVyOiBtZWRpdW0gc29saWQgd2hpdGU7XG5ib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XG5ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4vKiBGaXggdGhlIGNpcmNsZSBmb3IgY29udGFpbmVycyBvbiB0aGUgcmlnaHQgc2lkZSAqL1xuLnJpZ2h0OjphZnRlciB7XG5sZWZ0OiAtMTZweDtcbn1cbiAgXG4vKiBUaGUgYWN0dWFsIGNvbnRlbnQgKi9cbi5jb250ZW50IHtcbnBhZGRpbmc6IDIwcHggMzBweDtcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xucG9zaXRpb246IHJlbGF0aXZlO1xuYm9yZGVyLXJhZGl1czogNnB4O1xufVxuICBcbi8qIE1lZGlhIHF1ZXJpZXMgLSBSZXNwb25zaXZlIHRpbWVsaW5lIG9uIHNjcmVlbnMgbGVzcyB0aGFuIDYwMHB4IHdpZGUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4vKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cbi50aW1lbGluZTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDMxcHg7XG59XG5cbi8qIEZ1bGwtd2lkdGggY29udGFpbmVycyAqL1xuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi8qIE1ha2Ugc3VyZSB0aGF0IGFsbCBhcnJvd3MgYXJlIHBvaW50aW5nIGxlZnR3YXJkcyAqL1xuLmNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgICBsZWZ0OiA2MHB4O1xuICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbi5sZWZ0OjphZnRlciwgLnJpZ2h0OjphZnRlciB7XG4gICAgbGVmdDogMTVweDtcbn1cblxuLyogTWFrZSBhbGwgcmlnaHQgY29udGFpbmVycyBiZWhhdmUgbGlrZSB0aGUgbGVmdCBvbmVzICovXG4ucmlnaHQge1xuICAgIGxlZnQ6IDAlO1xufVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Nav Bar  -->\n<nav class=\"navbar navbar-light sticky-top navbar-expand-lg\">\n  <ul class=\"navbar-nav mr-auto\">\n    <span class=\"pad-left\">\n      <li class=\"nav-item\">\n        <a class=\"navbar-brand\" href=\"#\">Ryan Hernandez</a>\n      </li>\n    </span>\n  </ul>\n  <span class=\"pad-right\">\n    <ul class=\"navbar-nav ml-auto nav-fill\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\".\" fragment=\"aboutme-link\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\".\" fragment=\"experience-link\">Experience</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\".\" fragment=\"project-link\">Projects</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\".\" fragment=\"bottom-link\">Contact</a>\n      </li>\n    </ul>\n  </span>\n</nav>\n\n<!-- Main Page -->\n<div class=\"col-sm-12\">\n  <div align=\"center\">\n    <div class=\"col-sm-10\">\n      <div class=\"box\">\n\n        <!-- About Section -->\n        <div class=\"row\">\n          <div class=\"col-sm-6\" id=\"aboutme-link\" style=\"padding-top: 100px;\">\n            <div class=\"crop\">\n              <img src=\"assets/ryanandbrittni.png\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"about\">\n              About Me\n            </div>\n            <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n              <ol class=\"carousel-indicators\">\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n              </ol>\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                  <br><br>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n                  et\n                  dolore magna aliqua. Eget mi proin sed libero. Adipiscing enim eu turpis egestas pretium aenean\n                  pharetra\n                  magna. Nibh nisl condimentum id venenatis. Varius vel pharetra vel turpis nunc eget lorem dolor.\n                  Felis\n                  donec\n                  et odio pellentesque diam volutpat commodo sed egestas.\n                </div>\n                <div class=\"carousel-item\">\n                  <br><br>\n                  Sed vulputate odio ut enim blandit volutpat maecenas\n                  volutpat. Ut diam quam nulla porttitor massa id neque aliquam. Massa sed elementum tempus egestas\n                  sed\n                  sed.\n                  Mauris commodo quis imperdiet massa. Dolor sit amet consectetur adipiscing elit ut aliquam purus.\n                  Maecenas\n                  pharetra convallis posuere morbi leo urna molestie at. Tellus cras adipiscing enim eu turpis egestas\n                  pretium\n                  aenean pharetra.\n                </div>\n                <div class=\"carousel-item\">\n                  <br><br>\n                  Arcu risus quis varius quam quisque id. At imperdiet dui accumsan sit amet. Iaculis at erat\n                  pellentesque\n                  adipiscing commodo. Felis eget nunc lobortis mattis aliquam. Accumsan sit amet nulla facilisi morbi.\n                  Iaculis\n                  nunc sed augue lacus viverra. Sagittis eu volutpat odio facilisis. Id diam maecenas ultricies mi\n                  eget\n                  mauris\n                  pharetra et ultrices. Ipsum dolor sit amet consectetur. Turpis cursus in hac habitasse platea.\n                </div>\n              </div>\n              <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n              <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <!-- Resume Section -->\n        <div class=\"row\" align=\"left\">\n          <div class=\"col-sm-6\">\n            <div class=\"resume-title\" id=\"experience-link\">\n              Experience\n            </div>\n          </div>\n          <div class=\"col-sm-6\" id=\"experience\">\n            <div class=\"resume\">\n              <div class=\"resume-container left\">\n                <div class=\"content\" ngsReveal>\n                  <h2>Aug 2017</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                    labore\n                    et\n                    dolore magna aliqua. Eget mi proin sed libero. Adipiscing enim eu turpis egestas pretium aenean\n                    pharetra\n                    magna. Nibh nisl condimentum id venenatis. Varius vel pharetra vel turpis nunc eget lorem dolor.\n                  </p>\n                </div>\n              </div>\n              <div class=\"resume-container right\">\n                <div class=\"content\" ngsReveal>\n                  <h2>2016</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                    labore\n                    et\n                    dolore magna aliqua. Eget mi proin sed libero. Adipiscing enim eu turpis egestas pretium aenean\n                    pharetra</p>\n                </div>\n              </div>\n              <div class=\"resume-container left\">\n                <div class=\"content\" ngsReveal>\n                  <h2>2015</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                    labore\n                    et\n                    dolore magna aliqua.</p>\n                </div>\n              </div>\n              <div class=\"resume-container right\">\n                <div class=\"content\" ngsReveal>\n                  <h2>2014</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                    labore\n                    et\n                    dolore magna aliqua. Eget mi proin sed libero. Adipiscing enim eu turpis egestas pretium aenean\n                    pharetra\n                    magna. Nibh nisl condimentum id venenatis. Varius vel pharetra vel turpis nunc eget lorem dolor.\n                  </p>\n                </div>\n              </div>\n              <div class=\"resume-container left\">\n                <div class=\"content\" ngsReveal>\n                  <h2>2013</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                    labore\n                    et\n                    dolore magna aliqua.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Projects Section -->\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"projects-title\" id=\"project-link\">\n              Projects\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"projects\">\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Footer  -->\n<div class=\"footer\">\n  <div class=\"bottom\" id=\"bottom-link\">\n    Contact: &nbsp;&nbsp;<a href=\"mailto:ryanhernandez@ou.edu\" target=\"_blank\"><i class=\"fas fa-envelope\"></i></a>\n    &nbsp;&nbsp;<a href=\"https://www.linkedin.com/in/ryan-hernandez-developer\" target=\"_blank\"><i\n        class=\"fab fa-linkedin\"></i></a>\n    &nbsp;&nbsp;<a href=\"https://github.com/ryan-hernandez\" target=\"_blank\"><i class=\"fab fa-github-square\"></i></a>\n  </div>\n</div>\n<div class=\"message\">\n  <small style=\"color: gray;\">This web page was designed and created by Ryan Hernandez using Angular\n    Typescript</small>\n</div>"

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
        this.title = 'Ryan Hernandez';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-scrollreveal */ "./node_modules/ngx-scrollreveal/esm5/ngx-scrollreveal.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([], {
                    useHash: true,
                    anchorScrolling: "enabled",
                    onSameUrlNavigation: "reload",
                    scrollPositionRestoration: "enabled"
                }),
                ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_4__["NgsRevealModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /Users/ryanhernandez/Desktop/git/personal/ResumeWebsite/Resume-Website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map