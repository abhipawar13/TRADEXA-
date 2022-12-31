import { Component, OnInit } from '@angular/core';
import { PostsService } from '../Services/posts.service';
@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css']
})
export class DailogComponent implements OnInit {
  user: any;
  userPost: any;
  postsService: any;

  constructor(private userData:PostsService) { 
   
  }
  
  ngOnInit(): void {
    this.postsService.userPost().subscribe((res:any)=>{
      //console.log("Post",res)
      this.userPost=res;
      console.log(this.userPost)
    });
  }

  getUserFormData(data:any){
    console.warn(data);
    this.userData.addPost(data).subscribe((data)=>{
      console.warn(data)
    })
  }

}
