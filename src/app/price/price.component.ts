import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  public price: any;
  private priceSubscribe: any;  

  constructor(
    private databaseService: DatabaseService,
    private route: ActivatedRoute,) {}

  ngOnInit() {
    this.getPrice();
  }
  

  ngOnDestroy() {
     this.priceSubscribe.unsubscribe();
  }

  getPrice() {
    this.priceSubscribe = this.databaseService.getPrice().subscribe((price: any) => {
      this.price = price;
    })
}
}
