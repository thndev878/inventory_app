import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product_id: string;
  product: any;
  error: string;
  // error: String="";

  
  constructor(private _httpService:HttpService, private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params)=>{
      let obs = this._httpService.getProduct(params['product_id'])
      obs.subscribe(data=>{
        console.log('* ** *** edit-product: ngOnInit', data);
        this.product = data;
        console.log('* ** *** edit-product.components: this.product=', this.product);
      })
    })
  }
  updateProduct(){
    let obs = this._httpService.updateProduct(this.product)
    obs.subscribe(data=>{
      if('errors' in data){
        this.error = data['message'];

      }
      else{
        this._router.navigate(['/products'])
      }
    })
  }
  deleteProduct(product_id){
    let obs = this._httpService.deleteProduct(this.product_id)
    obs.subscribe(data=>{
      this._router.navigate(['/products'])
    })
  }
}
