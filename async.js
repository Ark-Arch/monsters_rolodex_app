// leaning Promises.

const myPromise = new Promise((resolve,reject) => {
    if(true){
        setTimeout(()=>{
            resolve('I have succeeded')
        }, 1000)}
    else{
            reject('i failed at it')
        }
})

myPromise
    .then(value => value + '!!!')  // .then wraps return values into another promise. it can only be called on a resolved promise
    .then (newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue))


    // The main benefit of using promises for API calls is that we could seperate our concerns of success or failure.


// fetch is simply a promise := makes an API request.

fetch('https://jsonplaceholder.typicode.com/users') // ths returns a promise.
    .then(response => response.json())
    .then(json => console.log(json))

