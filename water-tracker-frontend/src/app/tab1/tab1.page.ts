import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/service/drink-service';
import { Drink } from 'src/service/model/drink';
import { Day } from 'src/service/model/calendar/day.model';
import { ResponseObject } from 'src/service/model/ResponseObject';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', '../../scss/grid.scss']
})
export class Tab1Page implements OnInit{

  drinks: Array<Drink>= [];
  todaysDrinks: Array<Drink>= [];
  todaysAmount:number = 0;
  totalAmount:number = 0;
  responseObj: ResponseObject= {headers:null, status:null, statusText:'', url:'', ok: null, type: null, body: null };

  constructor(public toastController: ToastController, private drinkService: DrinkService) {}

  ngOnInit(): void {
    this.getDrinks().then(()=>this.getTodaysDrinks());
  }

  async getDrinks(){
    new Promise(resolve=> setTimeout(()=>{
      this.drinkService.getEntities().subscribe(drinks => this.drinks=drinks);
      resolve();
    },50));
  }

  async getTodaysDrinks(){
    new Promise(resolve=> setTimeout(()=>{
      this.drinkService.getTodaysDrinks().subscribe(drinks => this.todaysDrinks=drinks);
      resolve();
    },50));
  }

  getTotalAmountToday(): number{
    this.todaysAmount=0;
      this.todaysDrinks.forEach(drink =>{
        this.todaysAmount+=drink.amount;
      });
      return this.todaysAmount;
  }

  getTotalAmount(): number{
    this.totalAmount=0;
      this.drinks.forEach(drink =>{
        this.totalAmount+=drink.amount;
      });
      return this.totalAmount;
  }

  parseDateStringForPost(date: Date): string{
    const monthNumber: number = date.getMonth()+1;
    const dayOfMonth: string= (date.getDate()>9)?''+date.getDate():'0'+date.getDate();
    const month: string = (monthNumber>9)?''+monthNumber:'0'+monthNumber;
    const hours: string = (date.getHours()>9)?''+date.getHours():'0'+date.getHours();
    const minutes: string = (date.getMinutes()>9)?''+date.getMinutes():'0'+date.getMinutes();
    return date.getFullYear() + '-' + month + '-' + dayOfMonth + 'T'+hours+':'+minutes+':00';
}

async presentToast(status: ResponseObject){
  let toast ;
  switch(status.status){
    case 201:
      toast = await this.toastController.create({
        message: status.status+'  '+status.statusText,
        showCloseButton: true,
        color: 'success',
        duration:2000
      });
      break;
    default:
      toast = await this.toastController.create({
        message: status.status+'  '+status.statusText,
        showCloseButton: true,
        color: 'danger',
        duration:2000
      });
  }
  this.getTodaysDrinks();
  this.getTotalAmountToday();
  toast.present();
}

  async onClick(amountAdd: number){
    return new Promise(resolve=> 
      setTimeout(() => {
        let now: Date = new Date();
        let dateTimeString = this.parseDateStringForPost(now);
        let drink: Drink= {id: null, dateTime: dateTimeString, name:"water", amount: amountAdd }
        this.drinkService.postEntity(drink).subscribe(response=>{
          this.responseObj.status=response['status'];
          this.responseObj.statusText= response['statusText'];
          this.presentToast(this.responseObj);
        });
          resolve();
    } , 100));
  }
}
