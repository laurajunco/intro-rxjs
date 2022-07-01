// CHAPTER 2: Observable creation operators

import { from } from "rxjs";

 const observer = {
    next: (value) => console.log('next', value),
    error:(err) => console.log('error', err),
    complete:() => console.log('Completed!')
}

// Checks the argument type and emits the value in the way that makes most sense
//any item with lenght property: will emit each individual value
const source$ = from([1, 2, 3, 4, 5]); // array
const source2$ = from('Laura'); //string

//promise
//e its the response when it completes
const source3$ = from(fetch(
    'https://api.github.com/users/octocat'
)); //string


source$.subscribe(observer)
source2$.subscribe(observer)
source3$.subscribe(observer)
