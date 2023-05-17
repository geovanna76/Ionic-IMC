import { Component } from '@angular/core';
import { convertToParamMap } from '@angular/router';
import { AlertController, IonButtons } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string=""
  altura:number=0
  resultado:number=0


  constructor(
    public alertController: AlertController,
    ) {}


    calculo(){
      if(this.radioSelecionada == 'masc'){
        this.resultado = (72.7 * this.altura) -58
        this.exibirAlert()
      }
      else{
        this.resultado = (62.1 * this.altura) -44.7
        this.exibirAlert()
      }
    }


    async exibirAlert() {
      const alert = await this.alertController.create({
        header: "Seu peso ideal é: " + Math.floor(this.resultado) + 'kg',
        buttons: ['OK']
      })
      alert.present();

    }









}
