import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent extends BasePageComponent implements OnInit {

  constructor(route:ActivatedRoute) {
    super(route);
   }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  override ngOnInit(): void {}
}
