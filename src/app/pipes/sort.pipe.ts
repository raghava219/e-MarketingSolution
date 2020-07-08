import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'custompipe'
})


export class custompipePipe implements PipeTransform {
    
    transform(value: any, ...args: any[]) {
        ;
    }

}