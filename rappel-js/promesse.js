function getData()
{
    console.info("2. > Call getData() function");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            console.info("4. > getData() generate the response and call the resolve() method.");
            const data = 21+21;
            resolve(data);

        }, 3000);
    });
}

console.info("1. > start");
getData()
    // Success
    .then(result => {
        console.log(result);
    })

    // fail
    .catch(error => {
        console.log(error);
    })
;
console.info("3. > end");
