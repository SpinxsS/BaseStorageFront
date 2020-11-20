import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SistemasExternosService {
  private API_SERVER = 'http://localhost:8003/client/cuatro/';


  constructor(private httpClient: HttpClient) { }

  public getAllSistemasExternos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public crearSistemaExterno(SistemExterno: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, SistemExterno);
  }
}
