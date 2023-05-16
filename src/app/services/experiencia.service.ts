import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService  {
  expURL = 'http://localhost:8080/experiencia/'
  constructor(private httpClient: HttpClient) { }

 //Lista
  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
  }

  //Traer informacion de experiencia
  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  //Guardar experiencia
  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  //Actualizar experiencia
  public update(id: number, experiencia: Experiencia ): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia)
  }

  //Eliminar experiencia
  public delete (id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }

}
