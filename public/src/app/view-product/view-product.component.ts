import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  allProducts: any;
  product_id: string;

  constructor(private _activatedRoute: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {

    let obs = this._httpService.getAllProducts();
    obs.subscribe(data => {
      console.log('* ** *** View-Product-Component: getAllProducts',data);
      this.allProducts = data;
    })
  }
  deleteProduct(product_id){
    let obs = this._httpService.deleteProduct(product_id)
    obs.subscribe(data=>{
      this._router.navigate(['/products'])
      this.getAllProducts();
    })
  }
  getAllProducts(){
    let obs = this._httpService.getAllProducts();
    obs.subscribe(data => {
      console.log('* ** *** getAllProducts after deleting product',data);
      this.allProducts = data;
    })
  }

}
