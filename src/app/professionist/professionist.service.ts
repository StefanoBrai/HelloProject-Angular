import { Injectable } from '@angular/core';
import { Professionist } from './Professionist';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'  //Questo servizio è disponibile dalla root in giù, altrimenti si mette il nome di dove lo si vuole disponibile
})
export class ProfessionistService {

  updateProfessionist(pro : Professionist) {
    
    const header = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http.put<Professionist>(this.url, pro, {headers : header})
  }

  deleteProfessionist(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }

  private counter : number = 100;

  insertProfessionist(professionist: Professionist): Observable<Professionist> {
    const header = new HttpHeaders({'Content-Type' : 'application/json'});
    professionist.id = (++this.counter).toString();
    return this.http.post<Professionist>(this.url, professionist, {headers : header});
  }
  
  professionistsArray: Professionist[];

  private url: string = "http://localhost/api/professionists";

  public getProfessionist(): Observable<Professionist[]> {    //any è il tipo base
    return this.http.get<Professionist[]>(this.url);
  }

  constructor(private http: HttpClient) { }

}
