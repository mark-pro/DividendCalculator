(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var divcal_1 = require("./divcal");
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var dc = new divcal_1.DividendCalc(12.5, 200);
        document.body.innerHTML = dc.ToString();
    };
    return Startup;
}());
Startup.main();
},{"./divcal":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DividendCalc = (function () {
    function DividendCalc(sharePrice, baseNumberOfShares) {
        var _this = this;
        this.ToString = function () {
            return "{ sharePrice: " + _this.SharePrice + ", baseNumberOfShares: " + _this.BaseNumberOfShares + " }";
        };
        this.SharePrice = sharePrice;
        this.BaseNumberOfShares = baseNumberOfShares;
    }
    DividendCalc.prototype.Print = function () {
        console.log(this.toString());
    };
    return DividendCalc;
}());
exports.DividendCalc = DividendCalc;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYXBwLnRzIiwic3JjL3RzL2RpdmNhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsbUNBQTZDO0FBQzdDO0lBQUE7SUFLQSxDQUFDO0lBSmlCLFlBQUksR0FBbEI7UUFDSSxJQUFJLEVBQUUsR0FBRyxJQUFJLHFCQUFFLENBQUMsSUFBSSxFQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsY0FBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDOzs7O0FDUmY7SUFJSSxzQkFBWSxVQUFrQixFQUFFLGtCQUEwQjtRQUExRCxpQkFHQztRQU1NLGFBQVEsR0FBRztZQUNkLE9BQUEsbUJBQWlCLEtBQUksQ0FBQyxVQUFVLDhCQUF5QixLQUFJLENBQUMsa0JBQWtCLE9BQUk7UUFBcEYsQ0FBb0YsQ0FBQTtRQVRwRixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7SUFDakQsQ0FBQztJQUVNLDRCQUFLLEdBQVo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFJTCxtQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBRVEsb0NBQVkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgRGl2aWRlbmRDYWxjIGFzIERDIH0gZnJvbSBcIi4vZGl2Y2FsXCJcclxuY2xhc3MgU3RhcnR1cCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIG1haW4oKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGRjID0gbmV3IERDKDEyLjUgLCAyMDApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gZGMuVG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG5cclxuU3RhcnR1cC5tYWluKCk7IiwiY2xhc3MgRGl2aWRlbmRDYWxjIHtcclxuICAgIFNoYXJlUHJpY2U6IG51bWJlcjtcclxuICAgIEJhc2VOdW1iZXJPZlNoYXJlczogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNoYXJlUHJpY2U6IG51bWJlciwgYmFzZU51bWJlck9mU2hhcmVzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLlNoYXJlUHJpY2UgPSBzaGFyZVByaWNlO1xyXG4gICAgICAgIHRoaXMuQmFzZU51bWJlck9mU2hhcmVzID0gYmFzZU51bWJlck9mU2hhcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBQcmludCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUb1N0cmluZyA9ICgpID0+IFxyXG4gICAgICAgIGB7IHNoYXJlUHJpY2U6ICR7dGhpcy5TaGFyZVByaWNlfSwgYmFzZU51bWJlck9mU2hhcmVzOiAke3RoaXMuQmFzZU51bWJlck9mU2hhcmVzfSB9YFxyXG59XHJcblxyXG5leHBvcnQgeyBEaXZpZGVuZENhbGMgfTsiXX0=
