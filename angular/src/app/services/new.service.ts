import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class NewService {

  constructor(private _http:HttpClient) { }


  getAll(cb){
  	this._http.get('/api/pets')
  	.subscribe(data=>cb(data));
  }

  create(pet,cb){
  	this._http.post('/api/pets',pet)
  	.subscribe(data=>cb(data));
  }

  update(id,pet,cb){
  	this._http.put('/api/pets/'+id,pet)
  	.subscribe(data=>cb(data));
  }

  getOne(id,cb){
  	this._http.get('/api/pets/'+id)
  	.subscribe(data=>cb(data));
  }

  destroy(id,cb){
  	this._http.delete('/api/pets/'+id)
  	.subscribe(data=>cb(data));
  }


}
