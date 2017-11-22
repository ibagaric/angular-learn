import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'titleCase'
})

export class TitleCase implements PipeTransform {

    transform(input: string) {
        if (!input) return null;

        let words = input.split(' ');
        let prep = [
            'of',
            'the',
            'and'
        ]

        for (var i = 0; i < words.length; i++) {
            if (i > 0 && prep.includes(words[i].toLowerCase())) {
                words[i] = words[i].toLowerCase();
            } else {
                words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
            }
        }

        return words.join(' ');

    }
    
} 