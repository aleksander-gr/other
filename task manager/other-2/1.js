//Фетч
console.log('Fetch');
fetch("https://reqres.in/api/user").then((Response) => {
    console.log(Response.json());

});







// промис
console.log('Promise');


const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.random()), );
});
console.log(promise);
promise
    .then((myVar) => {
        console.log(myVar);
        return myVar;
    })
    .then((y) => {
        console.log(y);

    })
    .catch((err) => {
        console.log(err);

    });


/*
// итог - это объект обещание, гарантирует выполнение кода при выполнении 
событии (функция ит т.д) в случае ошибки он вызовет ... используются при работе 
асинхронного кода.
*/