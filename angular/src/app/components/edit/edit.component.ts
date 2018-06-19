import { Component, OnInit } from '@angular/core';
import {NewService} from '../../services/new.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
		private id:any;
	private editpet;
  constructor(
  	private ns:NewService,
  	private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {

  	this._route.params.subscribe((params: Params) => this.id=(params['id']));
  	this.edit();
  }

   edit(){
    this.ns.getOne(this.id,data=>{
      this.editpet=data;
      this.id=data._id
    })
  }

  update(id){
    console.log(this.id,this.editpet)
    this.ns.update(this.id,this.editpet,data=>{
      
    });

     this._router.navigate(['show/'+this.id]);



}

}
