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
    }, 1000)
   
    return () => { 
        console.log("clear interval");
        clearInterval(id)
    }
}) 

//subscribe returns a subscription variable
const subscription = observable.subscribe(observer);

//we can subscribe as many times as we need to an observable
const subscription2 = observable.subscribe(observer);

//if we unsubscribe from sub1 sub2 is unsubscribed automatically too
subscription.add(subscription2)

//tells the observable to stop the work they are doing
// cleans up all resources being used by the observable
// the clean up method is run, the observable is not completed
setTimeout(() => {
    subscription.unsubscribe()
    // subscription2.unsubscribe()
}, 5000)