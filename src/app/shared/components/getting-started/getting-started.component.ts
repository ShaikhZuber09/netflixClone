import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
 @ViewChild('gettingStarted') myForm:FormGroup | undefined
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
if(this.myForm?.valid){
this.router.navigate(['/signIn'])
}

  }
}
