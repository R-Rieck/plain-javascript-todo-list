const UsernameBox = document.getElementById('UsernameBox');
const PasswordBox = document.getElementById('PasswordBox');

const NewUsernameBox = document.getElementById('NewUsernameBox')
const NewPasswordBox = document.getElementById('NewPasswordBox')

function LogIn(){
    username = UsernameBox.value;
    password = PasswordBox.value;
    
    location.href = 'http://127.0.0.1:5500/index.html';

    // if(ValidationCheck(username, password)){
        
    // }
    // else{
    //     alert("\n\nDa ist wohl etwas schiefgelaufen. \nBitte versuche es erneut.")
    // }
}

function CreateNewAccount (){
    // NewUsername = NewUsernameBox.value;
    // NewPassword = NewPasswordBox.value;

    console.log(UsernameBox.value + ", " + PasswordBox.value);
    
    if((UsernameBox.value.length > 1 && UsernameBox.value.length < 25) && (PasswordBox.value.length > 1 && PasswordBox.value.length < 32)){
        InsertData(UsernameBox.value, PasswordBox.value);
    }
}