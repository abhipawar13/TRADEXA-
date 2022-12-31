import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  user() {
    throw new Error('Method not implemented.');
  }
  
  userPost() {
    throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) { }

//Getting JSon Data
  getPosts=()=>{
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }
//for sumbit prompt form
  addPost=(data:any)=>{
    return this._http.post('https://jsonplaceholder.typicode.com/posts',data);
  }
}
