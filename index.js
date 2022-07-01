// CHAPTER 2: Observable creation operators

import { fromEvent } from "rxjs";

/** Creation operators start the observable pipeline
 * 
 */

 const observer = {
    next: (value) => console.log('next', value),
    error:(err) => console.log('error', err),
    complete:() => console.log('Completed!')
}
// create data streams from DOM events
const source$ = fromEvent(document, 'click');

//subscribe so the observable emits data
const sub1 = source$.subscribe(observer)

//if we subscribe twice we get double emitions
const sub2 = source$.subscribe(observer)

setTimeout(() => {
    console.log('unsubscribe sub2')
    sub2.unsubscribe()
}, 5000)