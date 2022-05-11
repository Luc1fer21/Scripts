import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  ids = 0;
  posts: Post[] = [
    {title:"React", text: "JavaScript-библиотека для создания пользовательских интерфейсов", id: this.ids+1},
    {title:"Angular", text: "Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.", id: this.ids+2},
    {title:"Vue", text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces", id:this.ids+ 3},
    {title:"Node.js", text: "Node.js® — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.", id:this.ids+ 4}
  ]  
  updatePosts (event: Post){

    this.posts.unshift(event)
    }

    removeIdPost(id:number) {
      this.posts = this.posts.filter((item)=>item.id!=id)
      }
      
      titleS=''
      func=''   

onChangeSearch(event: string) {
  this.titleS = event;

}

onChangeSearching(event: string){
  this.func = event;
}

  
}

export  interface  Post {
  title: string
  text: string
  id?: number
  }
  
