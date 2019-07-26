import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
//import {ProductService} from '../product.service';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
var Tab3Page = /** @class */ (function () {
    // constructor(public productService: ProductService){
    //   //this.loadProduct();
    // }
    function Tab3Page(http) {
        this.http = http;
    }
    Tab3Page.prototype.ionViewDidLoad = function () {
        this.loadProduct();
    };
    Tab3Page.prototype.loadProduct = function () {
        var _this = this;
        this.http.get('http://aboweb.local:8080/gustoCoffeeRESTAPI/index.php/service')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.data = data.response;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    Tab3Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab3',
            templateUrl: 'tab3.page.html',
            styleUrls: ['tab3.page.scss'],
            providers: [HttpModule]
        }),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], Tab3Page);
    return Tab3Page;
}());
export { Tab3Page };
//# sourceMappingURL=tab3.page.js.map