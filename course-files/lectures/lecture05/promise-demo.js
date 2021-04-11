const success = result => { 
    console.log('success:', result);
};

const doSomethingWithADelay = new Promise((resolve) => {
    setTimeout(() => resolve("done"), 1000);
});

doSomethingWithADelay
    .then(success, failure);