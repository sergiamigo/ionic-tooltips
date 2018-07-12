import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Tooltip } from './tooltip.directive';
import { TooltipBox } from './tooltip-box.component';
import { TestPage } from './tooltip.spec';
var TooltipsModule = (function () {
    function TooltipsModule() {
    }
    return TooltipsModule;
}());
export { TooltipsModule };
TooltipsModule.decorators = [
    { type: NgModule, args: [{
                entryComponents: [
                    TooltipBox,
                ],
                declarations: [
                    Tooltip,
                    TooltipBox,
                    TestPage
                ],
                imports: [
                    IonicModule,
                ],
                exports: [
                    Tooltip,
                ],
            },] },
];
/** @nocollapse */
TooltipsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tooltips.module.js.map