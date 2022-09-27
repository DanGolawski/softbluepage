import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentDto } from '../models/models';
import { QueryParams } from '../models/query';
import { RESOURCES } from '../resources';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }

  public getComments(params: QueryParams = {}): Observable<CommentDto[]> {
    const httpParams = new HttpParams({fromObject: {...params}});
    return this.httpClient.get<CommentDto[]>(RESOURCES.comments, {params: httpParams});
  }

  public createComment(newComment: CommentDto): Observable<void> {
    return this.httpClient.post<void>(RESOURCES.comments, newComment);
  }
}
