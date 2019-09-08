import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private router:Router,private navCtrl: NavController) { 
    console.log("list constructor  ");
  }

  ngOnInit() {
    console.log("ngOnInit in list page ")
  }
  gotToHome() {
    let index = Math.random()*10;
    // this.router.navigateByUrl(`/home/${index}`);
    // this.router.navigateByUrl('/home');
    // this.navCtrl.setRoot();
    // this.navCtrl.pop();
    this.navCtrl.navigateBack('/home');
  }

}
