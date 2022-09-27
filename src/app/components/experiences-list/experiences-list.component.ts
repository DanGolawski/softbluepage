import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/models';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.css']
})
export class ExperiencesListComponent {

  @Input() experiences: Experience[] | null;

}
