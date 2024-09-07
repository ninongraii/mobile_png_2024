/* ? async functions are a way to work with asynchronous
    code in a more synchronous way. they are guilt on top
    of promises and are syntatic sugar for promises.
*/

console.log("Ordering a pizza...");

// creating a promise
const pizzaPromise = () => {
    return new Promise((resolve, reject) => {
        // resolve and reject are callback functions
        let order = true;

        if (order) {

            setTimeout(() => {
                //setTimeout is used to simulate a delay
                resolve("After 5 seconds, pizza is delivered!");
            }, 5000);
        } else {

            setTimeout(() => {
                reject ("After 5 seconds, pizza not delivered!");
            }, 5000);
        }
    });
};

pizzaPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

console.log("Waiting for your pizza...");

// terminology
// promise: an object that represents the eventual completion
// (or failure) of an asynchronous operation and its resulting value.
// resolve: A callback function that is used when the promise is fulfilled.
// reject: a callback function that is used when the promise is rejected.
// .then(): a method that is used to handle the resolved promise.
// .catch(): a method that is used to handle the rejected promise.

//test