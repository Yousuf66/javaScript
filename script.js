document.getElementById('getUsers').addEventListener('click',getUsers);

document.getElementById('getJson').addEventListener('click',getJson);

document.getElementById('addPost').addEventListener('click',addPost);
function getUsers(){

fetch('users.json').
then( (response) => response.json() )
.then((data) => {
    let output = `<h2>users<h2>`;
    data.forEach((element) =>{

        output+=`<li> ID: ${element.id} </li>
                 <li> Name: ${element.name}</li> 
                 <li> Email: ${element.email} </li>  `;
        
    });
    document.getElementById('output').innerHTML = output;
})



}

function getJson(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (response) => response.json() )
    .then((data) => {
        let output = `<h2>Posts<h2>`;
        data.forEach((element) =>{
    
            output+=`<div>
                    <h3>${element.title}</h3>
                    <p>${element.body}</p>
                    </div>`;
            
        });
        document.getElementById('output').innerHTML = output;
    })
    
    
    
    }
    
    
function addPost(e){
    e.preventDefault();

    let title = document.getElementById('title');
    let body = document.getElementById('body');

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'content-type': 'application/json'
        },
        body:JSON.stringify({title:title,body:body})

    }).then((res)=> res.json())
    .then((data)=> console.log(data))    
    
    }
    