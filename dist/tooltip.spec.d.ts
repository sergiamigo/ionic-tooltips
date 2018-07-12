import { AfterViewInit, ElementRef, ViewContainerRef } from '@angular/core';
import { Tooltip } from './tooltip.directive';
export declare class TestPage implements AfterViewInit {
    _viewport: ViewContainerRef;
    button: ElementRef;
    tooltip: Tooltip;
    active: boolean;
    constructor(_viewport: ViewContainerRef);
    getButtonNativeElement(): HTMLButtonElement;
    getTooltip(): Tooltip;
    ngAfterViewInit(): void;
}
