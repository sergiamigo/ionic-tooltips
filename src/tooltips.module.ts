import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Tooltip } from './tooltip.directive';
import { TooltipBox } from './tooltip-box.component';
import { TestPage } from './tooltip.spec';

@NgModule({
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
})
export class TooltipsModule {
}
