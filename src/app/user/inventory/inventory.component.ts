import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  productName:String;
  productPrice;
  constructor(private route: ActivatedRoute,private router: Router) {
    route.paramMap.subscribe((obj:ParamMap)=>{
      this.productName=(obj.get("pPname"));
    })

  }

  ngOnInit(): void {
    let pPrice = parseInt(this.route.snapshot.paramMap.get('pPrice'));
    this.productPrice=pPrice;
  }

  checkProduct=false;
  removeP(){
    this.checkProduct=true;
  }
  buyNow(){

  }
}
