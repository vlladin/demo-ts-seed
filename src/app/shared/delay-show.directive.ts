import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[delayMe]'
})
export class DelayDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ){}
    @Input()
    set delayMe(time: number) {
        setTimeout(
            () => {
                this.viewContainerRef.createEmbeddedView(this.templateRef); },
            time); }
}