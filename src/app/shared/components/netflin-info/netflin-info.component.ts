import { Component, Input, OnInit } from '@angular/core';
import { IurlObject } from '../../inteface/netflix';


@Component({
  selector: 'app-netflin-info',
  templateUrl: './netflin-info.component.html',
  styleUrls: ['./netflin-info.component.scss']
})
export class NetflinInfoComponent implements OnInit {
@Input() dataObj!:IurlObject
  constructor() { }

  ngOnInit(): void {
  }

}
