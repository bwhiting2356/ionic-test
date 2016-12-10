import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Caretaker page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-caretaker',
  templateUrl: 'caretaker.html'
})
export class CaretakerPage {
  tabs = 'notifs';

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CaretakerPage Page');
  }

}
