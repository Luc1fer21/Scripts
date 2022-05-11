import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(post: Post[], textSearch: string): Post[] {
    if(!textSearch.trim()) {
      return post
    } else {
      const i = textSearch[textSearch.length-1];
      textSearch = textSearch.slice(0, -1);
      if(i == '1'){
        return post.filter(item=>{
          return item.title.toLowerCase().includes(textSearch.toLowerCase())
        })
      }
      else{
        return post.filter(item=>{
          return item.text.toLowerCase().includes(textSearch.toLowerCase())
        })
      }
    }
  }
}

