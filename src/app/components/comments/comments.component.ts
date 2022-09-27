import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { CommentDto } from 'src/app/models/models';
import { QueryParams } from 'src/app/models/query';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public commentsSubject: BehaviorSubject<CommentDto[]> = new BehaviorSubject<CommentDto[]>(null as any);
  public comments$: Observable<CommentDto[]> = this.commentsSubject.asObservable();
  public paginationNumbers: number[] = [1,2,3];

  private paginationParams: QueryParams = {page: 1, limit: 10, sortBy: 'createdAt', order: 'desc'};

  constructor(
    private commentsService: CommentsService  
  ) { }

  ngOnInit(): void {
    this.getComments();
  }

  public getComments(pageIdx: number = 0): void {
    if (pageIdx === 0) {
      this.paginationNumbers = [1,2,3];
    } else {
      this.paginationNumbers = this.paginationNumbers.map(el => el + pageIdx);
    }
    
    this.paginationParams = {...this.paginationParams, page: this.paginationNumbers[pageIdx]};
    this.commentsService.getComments(this.paginationParams).subscribe(comments => this.commentsSubject.next(comments));
  } 

  public createComment(newComment: CommentDto): void {
    this.commentsService.createComment(newComment).subscribe(() => this.getComments());
  }

  public sortComments(order: 'asc' | 'desc'): void {
    this.paginationParams = {...this.paginationParams, order};
    this.getComments();
  }

}
