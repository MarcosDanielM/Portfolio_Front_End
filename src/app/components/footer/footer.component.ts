import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  persona: Persona = new Persona ("", "", "", "", "", "", "", "");

  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data});
      console.log(this.persona);
  }

}
