import {  Observable } from 'rxjs';

//we can have all or none of this functions
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

// subscribe could be called without observer
observable.subscribe()

// we could also pass directly the observer functions in subscribe()
observable.subscribe(
    (value) => console.log('next', value), 
    (err) => console.log('error', err), 
    () => console.log('Completed!')
)