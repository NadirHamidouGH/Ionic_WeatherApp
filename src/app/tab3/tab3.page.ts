import { Component } from '@angular/core';
import {  NavController , NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Tab1Page } from '../tab1/tab1.page';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  city: string;

  // public navCtrl:NavController , public navparams : NavParams ,
  constructor(private storage: Storage) {
    this.storage.get('location').then((val)=>{
        if(val != null){
            let location = JSON.parse(val);
            this.city = location.city;
        }else{
            this.city = 'paris';
        }
    });
  }



saveForm(){
  let location = {
    city: this.city
  }
  this.storage.set('location', JSON.stringify(location));
  // this.navCtrl.pop(Tab1Page);
  
}


}
