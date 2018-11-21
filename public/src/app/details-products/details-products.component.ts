import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css']
})
export class DetailsProductsComponent implements OnInit {

  product: any;
  product_id: string;
  constructor(private _activatedRoute: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.product = this.product = {
      name: "",
      qty: "", 
      price: ""
    }
    this.getProduct(this.product);

    this._activatedRoute.params.subscribe(( params: Params) => {
      this.getProduct(params['product_id']);
    })
  }
  getProduct(product_id){
    this._httpService.getProduct(product_id).subscribe(data =>{
      this.product = data;
    })
  }

  deleteProduct(product_id){
    let obs = this._httpService.deleteProduct(product_id)
    obs.subscribe(data=>{
      this._router.navigate(['/products'])
    })
  }
  mainPage(){
    this._router.navigate(["/products"])
  }
  

}
