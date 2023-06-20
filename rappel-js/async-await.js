const api = "https://jsonplaceholder.typicode.com/posts";

console.log('1. > start');

// async function getData(url)
// {
//     console.log('2.a > getData');

//     const response = await httpGet(url);
//     const posts = response;

//     console.log('2.b > getData');

//     console.log(posts);
// }

async function httpGet(url)
{
    console.log('3.a > httpGet');

    const response = await fetch(url);
    const json = await response.json();
    console.log('3.b > httpGet');

    return json;
}

// getData(api);

(async function(){
    console.log('2.a > getData');

    const response = await httpGet(api);
    const posts = response;

    console.log('2.b > getData');
    console.log(posts);
})()


console.log('4. > end');
