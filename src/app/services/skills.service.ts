import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = 'http://localhost:8080/skills/'
  constructor(private httpClient: HttpClient) { }

   //Lista
   public lista(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.URL + 'lista');
  }

  //Traer informacion de experiencia
  public detail(id: number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.URL + `detail/${id}`);
  }

  //Guardar experiencia
  public save(skills: Skills): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', skills);
  }

  //Actualizar experiencia
  public update(id: number, skills: Skills ): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skills)
  }

  //Eliminar experiencia
  public delete (id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
