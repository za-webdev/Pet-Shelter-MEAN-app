import { Component, OnInit } from '@angular/core';
import {NewService} from '../../services/new.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
		private id:any;
		private pet;
		private like:any;
		// private numberOfLikes:number;
  constructor(
  	private ns:NewService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }
  	private numberOfLikes:number=0;
  ngOnInit() {

  	this._route.params.subscribe((params: Params) => this.id=(params['id']));
  	 this.show();


  	 

  }


  show(){
  	console.log(this.id)
  	this.ns.getOne(this.id,data=>{
  		this.pet=data;
  	})
  }

   destroy(){
  	this.ns.destroy(this.id,data=>{
  		
  	});
  	   this._router.navigate(['']);
  }


	likeButtonClick(){
		this.numberOfLikes++;
	}

 

}

}
