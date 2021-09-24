import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { tap } from 'rxjs/operators';
import { Store } from 'src/app/shared/interfaces/stores.interface';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
model = {
    name:'',
    store:'',
    shippingAddress:'',
    city: ''
};
isDelivery!: boolean;

stores: Store[] = []


constructor(private dataSvc: DataService ) { }

  ngOnInit(): void {
    this.getStores();
  }

  onPickupOrDelivery(value:boolean):void{
    this.isDelivery = value;
  }

  onSubmit(value:any): void{
    console.log("guardar",value);
  }

   getStores():void{
    this.dataSvc.getStores()
    .pipe(
      tap( (stores: Store[]) => this.stores = stores ) ) 
    .subscribe()
  }
}
