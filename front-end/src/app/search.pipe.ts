import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(pages: string[], searchInput: string): any[]{     
        if(!searchInput) {
            return  [];
        }
       searchInput = searchInput.toLowerCase();
       return pages.filter(
           x =>x.toLowerCase().includes(searchInput)
       )
     }
}