import { Component, Input } from '@angular/core';

@Component({
    selector: 'product-card',
    templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

    @Input() product: any;

    constructor() { }

}
