import { Component, OnInit } from '@angular/core';
import {NewService} from '../../services/new.service'
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
		private pets:any[];
		private pet:any;
  constructor(private ns:NewService) { }

  ngOnInit() {

  	this.all()

  }

   all(){
  	this.ns.getAll(data=>{
  		this.pets=data.pets;
      console.log(data)

  	})
  }

}
