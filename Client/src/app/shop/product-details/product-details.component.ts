import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product? : Product;
  
 constructor(private shopservice:ShopService, private activeRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    const id = this.activeRoute.snapshot.paramMap.get('id');
     if (id) this.shopservice.getProduct(+id).subscribe({
     next:product => this.product = product,
     error: error => console.log(error)
     
    })
  }

}
