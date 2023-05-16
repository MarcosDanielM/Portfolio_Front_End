import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  URL = 'http://localhost:8080/proyectos/'
  constructor(private httpClient: HttpClient) { }

   //Lista
   public lista(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.URL + 'lista');
  }

  //Traer informacion de experiencia
  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);
  }

  //Guardar experiencia
  public save(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyectos);
  }

  //Actualizar experiencia
  public update(id: number, proyectos: Proyectos ): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyectos)
  }

  //Eliminar experiencia
  public delete (id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
