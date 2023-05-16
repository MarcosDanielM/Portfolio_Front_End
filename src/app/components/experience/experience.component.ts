import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  expe: Experiencia[] = [];
  constructor( private sExperiencia: ExperienciaService) { }


  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data =>
      { this.expe = data });
      console.log(this.expe);
  }


}
