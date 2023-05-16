export class Experiencia {
  id?: number;
  empresa: string;
  posicion: string;
  tareas: string;
  inicio: string;
  fin: string;
  logo: string;

  constructor(empresa: string,  posicion: string,  tareas: string,  inicio: string, fin: string,  logo: string){

    this.empresa = empresa;
    this.posicion = posicion;
    this.tareas = tareas;
    this.inicio = inicio;
    this.fin = fin;
    this.logo = logo;

  }




}
