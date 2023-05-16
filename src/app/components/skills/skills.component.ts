import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  ski : Skills[] = [];

  constructor( private sSkills : SkillsService
    ){}

    ngOnInit(): void {
      this.cargarSkills();
    }


    cargarSkills(): void {
      this.sSkills.lista().subscribe(data =>
        { this.ski = data });
        console.log(this.ski);
    }

}


