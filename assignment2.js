let myPromise = new Promise ( function(resolve, reject) {
    setTimeout( () => 
    {
        console.log("Fetched the data!");
       resolve( "abc@email.com"); 
    }, 4000);
}
 );

async function myAsyncFun() 
{
console.log("Hi");    
let email = await myPromise;
// myPromise.then(()=>{console.log("Email id of the user id is: " + email);
// console.log("end");
// })
console.log("Email id of the user id is: " + email);
console.log("end")
}

myAsyncFun();