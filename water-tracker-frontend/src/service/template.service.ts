import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
                              'Accept':'application/json'})
};
const deleteOptions = {
    headers: new HttpHeaders({'Accept': 'application/json'})
};

@Injectable({
    providedIn: 'root',
})
export abstract class TemplateService<T>{

    constructor(
        protected httpClient: HttpClient,
        protected singleUrl: string,
        protected name: string,
    ){}

    getEntities(): Observable<T[]>{
        console.log('fetched  '+this.singleUrl)
        return this.httpClient.get<T[]>(this.singleUrl)
        .pipe(
            tap(entities=> console.log('fetched  '+this.name+'s')
            ));
    }

    getEntity(id: number): Observable<T>{
        return this.httpClient.get<T>(this.singleUrl+'/'+id)
        .pipe(
            tap(entity=>console.log('fetched '+this.name+' ')
            ));
    }

    updateEntity(entity: T): Observable<T>{
        return this.httpClient.put(this.singleUrl+'/', JSON.stringify(entity), httpOptions).pipe(
            tap( element => console.log('Updated entity')),
            catchError(this.handleError('updateentity', []))
        );;
    }

    postEntity(entity: T){
        httpOptions['observe']='response';
        return this.httpClient.post(this.singleUrl, JSON.stringify(entity), httpOptions);
    }

    deleteEntity(id: number): Observable<boolean>{
        return this.httpClient.delete(this.singleUrl+'/'+id,deleteOptions) as Observable<boolean>;
    }

    protected handleError<Cash>(operation = 'operation', result?: any) {
        return (error: any): Observable< any> => {
       
          // TODO: send the error to remote logging infrastructure
          console.error(error + "lalalala"); // log to console instead
              
          // Let the app keep running by returning an empty result.
          return of(result as  any);
        };
      }
}