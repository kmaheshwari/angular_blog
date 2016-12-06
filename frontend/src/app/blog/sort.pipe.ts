import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sort'})
export class Sort implements PipeTransform {
  transform(value: Array<any>, sortBy: any): Array<any> {
  	if (sortBy && sortBy != "none") {
    	if (sortBy == "latest")
    		return value.sort((a: any,b: any) => {return b.created_at - a.created_at})
	    else if(sortBy == "popular")
	    {
	    	return value.sort((a: any, b: any) => {
  	      if (a.views < b.views)
  	        return 1;
  	      if (a.views > b.views)
  	        return -1;
  	      return 0;
  	    });
	    }	
    }
    else
      return value
  }
}