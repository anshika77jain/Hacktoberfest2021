
//Fetch user data from git api
function getData(usrName){
    return new Promise((resolve, reject) =>{
    fetch(`https://api.github.com/users/${usrName}`).then(data => data.json())
    .then(result => resolve(result))
    .catch(error => reject(error));
})
}
   

function getUser(){
    var names = document.getElementById('user').value
    console.log(names);
    //print fetched data to front end
    getData(names)
    .then(data => {
        document.getElementById('name').innerHTML = data.name 
        document.getElementById('location').innerHTML = data.location 
        document.getElementById('html_url').innerHTML = data.html_url 
        document.getElementById('public_repos').innerHTML = data.public_repos 
        document.getElementById('created_at').innerHTML =   data.created_at
        console.log(data)})
    .catch(err => console.log(err))
}