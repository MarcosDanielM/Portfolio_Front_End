export class Proyectos {
  id?: number;
  titulo: string;
  realizacion: string;
  img: string;
  descripcion: string;
  codigo: string;
  demo: string;

  constructor(titulo: string,  realizacion: string,  img: string,  descripcion: string, codigo: string,  demo: string){

    this.titulo = titulo;
    this.realizacion = realizacion;
    this.img = img;
    this.descripcion = descripcion;
    this.codigo = codigo;
    this.demo = demo;

  }




}


