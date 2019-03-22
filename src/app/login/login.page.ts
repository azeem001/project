import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router,public alertController: AlertController){}

  goBack()
  {
    this.router.navigate(['home']);
  }

  goToRegister()
  {
    this.router.navigate(['register']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Forgot password?',
      inputs: [{
        name: 'email',
        placeholder: 'Enter your email',
    }],
      buttons: ['Send Email']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
