import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  expURL = 'http://localhost:8080/educacion/'
  constructor(private httpClient: HttpClient) { }

  //Lista
  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.expURL + 'lista');
  }

  //Traer informacion de experiencia
  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.expURL + `detail/${id}`);
  }

  //Guardar experiencia
  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', educacion);
  }

  //Actualizar experiencia
  public update(id: number, educacion: Educacion ): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, educacion)
  }

  //Eliminar experiencia
  public delete (id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
