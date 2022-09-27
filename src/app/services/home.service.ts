import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience, Service } from '../models/models';
import { RESOURCES } from '../resources';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  public getExperience(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(RESOURCES.experience);
  }

  public getServices(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(RESOURCES.services);
  }
}
