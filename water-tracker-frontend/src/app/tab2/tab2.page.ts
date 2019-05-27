import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NavController } from '@ionic/angular';
import { Drink } from 'src/service/model/drink';
import { DrinkService } from 'src/service/drink-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit{

  @ViewChild('lineCanvas') lineCanvas: any;
  @ViewChild('lineCanvas2') lineCanvas2: any;
  lineChart: Chart;
  lineChart2: Chart;
  drinks: Array<Drink>= [];
  amounts: Array<number>= [];
  dates: Array<string>= [];

  constructor(public navCtrl: NavController, private drinkService: DrinkService) {
    this.getDrinks();
  }

  async getDrinks(){
    new Promise(resolve=> setTimeout(()=>{
      this.drinkService.getEntities().subscribe(drinks => {
        this.drinks=drinks
        drinks.forEach(drink=>{
          //Only push by day
          this.amounts.push(drink.amount);
          this.dates.push(drink.dateTime.substr(8).replace('T', ' ')); 
          }
        );
      });
      resolve();
    },50))
  }
  ngAfterViewInit() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels: this.dates,
          datasets: [
              {
                  label: "amount",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: this.amounts,
                  spanGaps: false
              }
          ]
      }
  });
  this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {

    type: 'line',
    data: {
        labels: this.dates,
        datasets: [
            {
                label: "amount",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.amounts,
                spanGaps: false
            }
        ]
    }
});
  }
}