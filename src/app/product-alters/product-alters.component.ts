import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-product-alters',
  templateUrl: './product-alters.component.html',
  styleUrls: ['./product-alters.component.css'],
})
export class ProductAltersComponent implements OnInit {
  @Input() product
  @Output() notify = new EventEmitter()

  constructor() {}

  ngOnInit() {}
}
