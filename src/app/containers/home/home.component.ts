import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience, Service } from 'src/app/models/models';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public experienceList$: Observable<Experience[]>;
  public servicesList$: Observable<Service[]>;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getExperience();
    this.getServices();
  }

  private getExperience(): void {
    this.experienceList$ = this.homeService.getExperience();
  }

  private getServices(): void {
    this.servicesList$ = this.homeService.getServices();
  }

}
