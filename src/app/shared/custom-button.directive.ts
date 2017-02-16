import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
    selector: '[customButton]'
})
export class CustomButtonDirective {
    @HostBinding('attr.role') role = 'button';
    @HostBinding('class.pressed') isPressed: boolean;

    @HostListener('mousedown') hasPressed() {
        this.isPressed = true;
    }
    @HostListener('mouseup') hasReleased() {
        this.isPressed = false;
    }
}