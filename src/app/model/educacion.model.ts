export class Educacion {
  id?: number;
  institucion: string;
  curso: string;
  inicio: string;
  fin: string;
  certificado: string;
  logo: string;

  constructor(institucion: string,  curso: string,  inicio: string,  fin: string, certificado: string,  logo: string){

    this.institucion = institucion;
    this.curso = curso;
    this.inicio = inicio;
    this.fin = fin;
    this.certificado = certificado;
    this.logo = logo;

  }




}
