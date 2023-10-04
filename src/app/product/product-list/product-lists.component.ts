import { Component } from '@angular/core';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css'],
})
export class ProductListComponent {
  products: any = [1, 2, 3, 4];
}
