// VAR définit une variable globale
var a = "AAA";

function myFnc()
{
    a = "BBB";
    console.log( a );
}

// myFnc();
// console.log(a);
// myFnc();


// {
//     console.log(a);
// }


// Let definit une variable local (au scope globale)
// let b = "BBB";
// let c = "DDD";

// const h = "HHH";
// const i = "JJJJ";

// console.log( b );

// { // la closure herite du scope globale

//     let c = "CCC";
//     const i = "III";

//     c = "XXX";
//     // i = "YYY";
//     console.log(b);
//     console.log(c);
//     console.log(h);
//     console.log(i);
// }

// console.log( b );
// console.log( c );
// console.log( h );
// console.log( i );


const fruits = ["pommes","poires","bananes","fraises","kiwis"];
const input = 3

for (var i=0; i<fruits.length; i++)
{
    if (i==input) break;
}

console.log( fruits[i] );
i=undefined;
