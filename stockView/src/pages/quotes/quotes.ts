import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuoteService} from '../../providers/quote-service';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
    mySymbol: any;
  quoteData: any;
  selectedCom: any;

  constructor(public navCtrl: NavController, public qSvc: QuoteService, public navParams: NavParams) {
    this.selectedCom=navParams.get("res");

  }

 getQuote(){
   return this.qSvc.getQuote(this.mySymbol).subscribe(res=>this.quoteData=res)
 }

 ngOnInit(){
   if(this.selectedCom){
     this.mySymbol=this.selectedCom.Symbol;
     this.getQuote(); 
   }
 }

}
