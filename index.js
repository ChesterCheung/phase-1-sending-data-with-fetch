const { headersArrayToObject } = require("nock/lib/common")

function submitData(name, email){

// const htmlBody = document.querySelector("body")

const postData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },

    body:JSON.stringify({
        name,
        email
    }),
}



   return fetch("http://localhost:3000/users",postData)
    .then(function (response){
        return response.json();
    })
    .then(function (user){
        document.body.innerHTML = user["id"]
    })
.catch(function (error){
    document.body.innerHTML = error;
})
}
