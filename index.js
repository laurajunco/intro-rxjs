import {  Observable } from 'rxjs';

const observer = {
    next: (value) => console.log('next', value),
    error:(err) => console.log('error', err),
    complete:() => console.log('Completed!')
}

const observable = new Observable(subscriber => {
    // pushing or emitting a value
    subscriber.next('Hello')
    subscriber.next('World')
    subscriber.complete()
    subscriber.next('This wont emit')
}) 

observable.subscribe(observer)