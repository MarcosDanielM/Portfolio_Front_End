export class Persona {
  id?: number;
  nombre: string;
  img: string;
  titulo: string;
  sobreMi: string;
  banner: string;
  email: string;
  celular: string;
  ubicacion: string;


    constructor(nombre: string, img: string, titulo: string, sobreMi: string, banner: string, email: string,  celular: string, ubicacion: string){
        this.nombre = nombre;
        this.img = img;
        this.titulo = titulo;
        this.sobreMi = sobreMi;
        this.banner = banner;
        this.email = email;
        this.celular =  celular;
        this.ubicacion = ubicacion;
    }

}

