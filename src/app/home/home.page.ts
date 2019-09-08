import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  

  constructor(private router:Router,private navCtrl: NavController) {
    console.log("incoming to home constructor")
  }
  ngOnInit() {
    console.log("incoming to home ngOnInit");


  }
  gotToRoute() {
    console.log("incoming to bondddd ");
    //let index = Math.random()*10;
    this.navCtrl.navigateBack('/list');

    // this.router.navigateByUrl(`/list/${index}`);
    // this.router.navigateByUrl('/list');
    // this.navCtrl.pop();
    //this.navCtrl.navigateRoot('/list');
  }

}
