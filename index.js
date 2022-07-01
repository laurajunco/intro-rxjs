// CHAPTER 2: Observable creation operators

import { of, range } from "rxjs";

 const observer = {
    next: (value) => console.log('next', value),
    error:(err) => console.log('error', err),
    complete:() => console.log('Completed!')
}

// Emits each number in sequence before completing
//synchrounously
// no flattening up of the values 
const source$ = of([1], 2, 3, 4, 5);

//emits each value in the range 3 - 7
const range$ = range(3, 5)

source$.subscribe(observer)

range$.subscribe(observer)
