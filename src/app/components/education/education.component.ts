import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  edu : Educacion[] = [];
  constructor(private sEducacion : EducacionService) {}

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data =>
      { this.edu = data });
      console.log(this.edu);
  }
}

