import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentDto } from 'src/app/models/models';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Output() newComment: EventEmitter<CommentDto> = new EventEmitter();

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  public sendComment(): void {
    if (this.form.invalid) {
      return;
    }
    this.newComment.emit(this.form.value);
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      text: [null, [Validators.required]]
    })
  }

}
