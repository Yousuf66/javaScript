document.getElementById('getUsers').addEventListener('click',getUsers);


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