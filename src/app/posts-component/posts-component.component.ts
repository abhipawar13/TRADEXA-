import { Component, OnInit } from '@angular/core';
import { PostsService } from '../Services/posts.service';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {

   userPost:any=[]
  constructor(private postsService:PostsService) { 
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((res:any)=>{
      //console.log("Post",res)
      this.userPost=res;
      console.log(this.userPost)
    })
  }

  addPost(){
    // console.log("jhgjhkj")

    
  }

  

}
