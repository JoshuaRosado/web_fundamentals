console.log("page loaded...");

var numberRequest = document.querySelector('#number-request');
var  numberConnection = document.querySelector('#number-connection');
var username = document.querySelector('#username');

function like(id){
    var element = document.querySelector(id);
    element.remove();
    numberRequest.innerText--;
    numberConnection.innerText++;
}
function dislike(id){
    var element = document.querySelector(id);
    element.remove();
    numberRequest.innerText--;
}
function edit() {
    username.innerText = "Joshua R.O.";
}