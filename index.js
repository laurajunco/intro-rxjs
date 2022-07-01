import {  Observable } from 'rxjs';

const observer = {
    next: (value) => console.log('next', value),
    error:(err) => console.log('error', err),
    complete:() => console.log('Completed!')
}

const observable = new Observable(subscriber => {
    let count = 0;
    const id = setInterval(()=> {
        subscriber.next(count++)
        subscriber.complete()
    }, 1000)
   
    //returns the cleanup function
    //it runs after complete() is run
    return () => { 
        console.log("clear interval");
        clearInterval(id)
    }
}) 

console.log('before');
observable.subscribe(observer)
console.log('after');