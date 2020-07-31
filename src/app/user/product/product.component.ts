import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
constructor(private router:Router){

}
  rup="₹";
  namesearch:string='';
productArr1=[
  { name:"Laptop",
    price:30000,
    image: '../../assets/images/products/laptop.jpg',
    desc:"Your laptop, your way Work and play your way virtually anywhere. With laptop-to-tablet versatility."
  },
  { name:"Refrigerator",
     price:22000,
    image: '../../assets/images/products/refrigerator.png',
    desc:"Direct Cool Refrigerators Energy efficient and compact, direct cool refrigerators."
  },
  { name:"Washing Machine",
    price:20000,
    image: '../../assets/images/products/washing.jpg',
    desc:"Top-loading washing machines are easy on your back, as they don’t require you to bend on your knees."
  },
  { name:"Television",
    price:15000,
    image: '../../assets/images/products/tv.jpg',
    desc:"Television (TV), sometimes shortened to tele or telly, is a telecommunication medium used"
  },
  { name:"Smartphone",
    price:15000,
    image: '../../assets/images/products/mobile.jpg',
    desc:"Smartphones are a class of mobile phones and of multi-purpose mobile computing devices."
  }
]
ProductSelect:boolean=false;
pName:string;
Pprice;
  selectedProduct(product,price){
    this.ProductSelect=true;
    this.pName=product;
    this.Pprice=price;
  }
        public SelectedProductName = this.pName;
  me=false;
  cart(){
    if(this.ProductSelect==true){
     this.me=true;
    }else{
      alert("Please Add Some Product");
    }
  }
  inventory(){
    this.router.navigate(['/user/inventory'+'/'+this.pName+'/'+this.Pprice]);

  }
  ngOnInit(): void {
  }

}
