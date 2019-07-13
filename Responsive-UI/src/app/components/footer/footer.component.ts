import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../../models/subscriber';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  subscriberModel = new Subscriber('', '', true);
  submitted = false;

  // errorMsg = '';

  constructor(){ }

  ngOnInit(){
  }

  onSubmit() {
    this.submitted = true;
  }

}
