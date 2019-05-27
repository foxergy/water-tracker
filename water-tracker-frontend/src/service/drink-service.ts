import { TemplateService } from './template.service';
import { Drink } from './model/drink';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class DrinkService extends TemplateService<Drink>{
    url: string = "http://192.168.1.103:8087/drinks";

    constructor(httpClient: HttpClient){
        super(httpClient, "http://192.168.1.103:8087/drinks", "Drink");
    }

    getTodaysDrinks(): Observable<Drink[]>{
        console.log('fetched  '+this.singleUrl)
        return this.httpClient.get<Drink[]>(this.singleUrl+'/today')
        .pipe(
            tap(entities=> console.log('fetched  '+this.name+'s')
            ));
    }

}