const Firebase = firebase.database().ref();


function ValidationCheck(username, password) {
    let users = new Array();
    let validUser = false;

    Firebase.child('user/').on("child_added", snap => {
        users.push({
            name: snap.child("Username").val(),
            pw : snap.child("Password").val()
        });
    })

    users.forEach(el => {
        if((el.name == username) && (el.pw == password)){
             validUser = true;
        }
    });

    return validUser;
}

function InsertData(username, password){
    Firebase.child('user/' + username).set({
        Username: username,
        Password: password
    });
}

