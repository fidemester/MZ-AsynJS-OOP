//can be deleted
console.log("Console log works!");

let promise = fetch('https://jsonplaceholder.typicode.com/usersa')
    .then(response =>{
        if (!response.ok){
            throw Error(response.statusText) }
        else return response.json()
        }
    )
    .then(data => console.log(data))
    .catch((error) =>{
        console.log('rejected', error)
    });

