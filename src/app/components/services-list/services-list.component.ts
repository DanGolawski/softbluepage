import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/models/models';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {

  @Input() services: Service[] | null;

}
