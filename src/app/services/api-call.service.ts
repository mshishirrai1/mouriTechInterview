import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private readonly http: HttpClient) { }

  getData(endPoint:string, paramsRequest?:any): Observable<any>{
    let params = new HttpParams();
    if(paramsRequest){
      for (let i = 0; i < paramsRequest.length; i++) {
        let key = paramsRequest[i].key;
        let val = paramsRequest[i].value;
        params = params.append(key,val);
      }
    }
    return this.http.get<any>(endPoint,{ params: params }).pipe(
      tap(_ => { } )
     );
  }
}
