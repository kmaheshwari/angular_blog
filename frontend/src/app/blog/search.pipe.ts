import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'search'})

export class Search implements PipeTransform {
  transform(value: Array<any>, searchBy: any): Array<any> {
    if (searchBy) {     
      let keys = ['detail', 'author', 'title', 'short_description'];
      return value.filter((item: any) => {
        var truthy = 0;
        for(let key in keys)  
          if (item[keys[key]].toLowerCase().indexOf(searchBy.toLowerCase()) > -1) truthy+=1
        if(truthy>0) return true 
      });
    } 
    else 
      return value;
  }
}