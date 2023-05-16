import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  pro : Proyectos[] = [];


  constructor( private sProyectos : ProyectosService
  ){}

  ngOnInit(): void {
    this.cargarProyectos();
  }

  toggleExpanded(proyecto: any) {
    proyecto.expanded = !proyecto.expanded;
  }
  cargarProyectos(): void {
    this.sProyectos.lista().subscribe(data =>
      { this.pro = data });
      console.log(this.pro);
  }

}





