import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css'],
})
export class ProductListComponent {
  products: any = [1, 2, 3, 4];

  product: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.product = products[Number(params.get('productId'))];
    });
  }
}
