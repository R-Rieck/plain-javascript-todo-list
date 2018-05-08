const Firebase = firebase.database().ref();
console.log(Firebase);


function ValidationCheck(username, password) {
    //implement ValidationCheck
}

function InsertData(username, password){
    Firebase.child('user/' + username).set({
        Username: username,
        Password: password
    });

    alert('does it worked');
}