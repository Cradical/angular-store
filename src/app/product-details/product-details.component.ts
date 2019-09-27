import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { products } from '../products'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  addToCart(product) {
    window.alert('The product has been added to the cart')
    this.cartServices.addToCart(product)
  }

  product: any

  constructor(
    private route: ActivatedRoute,
    private cartServices: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('productId')]
    })
  }
}
