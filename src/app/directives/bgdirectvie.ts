import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive ({
    selector: '[defColOnEvent]'
})

// ElementRef -- ?
// HostListener -- ?

export class DefaultColorOnEventDirective {
    constructor(private elemRef: ElementRef) {
    } 

    @HostListener('mouseover') onMouseOver() {
        this.changeColor('#B2D732');
    }
     
    @HostListener('mouseleave') onMouseLeave() {
        this.changeColor('');
    }

    private changeColor(color: String) {
        this.elemRef.nativeElement.style.backgroundColor = color;
    }

}