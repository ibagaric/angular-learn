import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'cFilter'

})

export class CustomFilter implements PipeTransform{
    transform(value: string, startLimit?: number, endLimit?: number){
        if(!value)
            return null;

        let setLimit = (startLimit && endLimit) ? startLimit : 5;
        return value.substring(startLimit, endLimit) + '...';
    }

}