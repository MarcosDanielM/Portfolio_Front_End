export class Skills {
  id?: number;
  lenguaje: string;
  progreso: string;
  icono: string;
  logo: string;
  color: string;
  size: string;


  constructor(lenguaje: string,  progreso: string,  icono: string, logo: string, color: string, size: string){

    this.lenguaje = lenguaje;
    this.progreso = progreso;
    this.icono = icono;
    this.logo = logo;
    this.color = color;
    this.size = size;

  }




}

