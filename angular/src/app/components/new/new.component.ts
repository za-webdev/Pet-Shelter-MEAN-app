import { Component, OnInit } from '@angular/core';
import {NewService} from '../../services/new.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
	private addpet;
  constructor(private ns:NewService,private _router: Router) { }

  ngOnInit() {

  	this.addpet={
      name:"",
      type:"",
      description:"",
      skill_1:"",
      skill_2:"",
      skill_3:"",
    };

  }

  create(){
    this.ns.create(this.addpet,(data)=>{ 
      
      
    });

    this._router.navigate(['']);

}

}
