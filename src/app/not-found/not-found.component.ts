import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule, CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  @Input() visible:boolean = false;
  @Input() notFoundMessage:string = "Nothing found!";
  @Input() resetLinkText: string = "Reset";
  @Input() resetLinkRoute: string = "/";

  constructor() {}
}
