const UsernameBox = document.getElementById('UsernameBox');
const PasswordBox = document.getElementById('PasswordBox');

const NewUsernameBox = document.getElementById('NewUsernameBox')
const NewPasswordBox = document.getElementById('NewPasswordBox')

function LogIn(){
    username = UsernameBox.value;
    password = PasswordBox.value;

    if(ValidationCheck(username, password)){
         location.href = 'http://127.0.0.1:5500/index.html';
    }
    else{
         alert("\n\nDa ist wohl etwas schiefgelaufen. \nBitte versuche es erneut.")
    }
}

function CreateNewAccount (username, password){
    // NewUsername = NewUsernameBox.value;
    // NewPassword = NewPasswordBox.value;

    console.log(UsernameBox.value + ", " + PasswordBox.value);
    
    if((UsernameBox.value.length > 1 && UsernameBox.value.length < 25) && (PasswordBox.value.length > 1 && PasswordBox.value.length < 32)){
        InsertData(UsernameBox.value, PasswordBox.value);
    }
}

function CreateNewAccountWindow(){
    const box = document.querySelector('.CreateNewAccountDiv');
    console.log(box);
    
    box.className = 'CreateNewAccountDiv CreateNewAccountDivOpen'

    var millisecondsToWait = 500;
    setTimeout(function() {
        box.innerHTML = insertNewAccountElements();
    }, millisecondsToWait);
    
}

function CloseNewAccountWindow(){
    const box = document.querySelector('.CreateNewAccountDiv');
    console.log(box);
    
    box.className = 'closing'
    box.innerHTML = '';
}

function insertNewAccountElements(){
    return '<label class="alone LeftMargin25 TopMargin30">Neuer Benutzername:</label>'+
    '<input class="alone LeftMargin25 UsernameBoxStyle" id="NewUsernameBox" type="text"/>'+
    '<label class="alone LeftMargin25 TopMargin25" >Neues Passwort:</label>'+
    '<input class="alone LeftMargin25 UsernameBoxStyle"  id="NewPasswordBox" type="password"/>'+
    '<label class="alone LeftMargin25 TopMargin25" >Neues Passwort wiederholen:</label>'+
    '<input class="alone LeftMargin25 UsernameBoxStyle"  id="NewPasswordBoxTwo" type="password"/>'+
    '<input class="alone LeftMargin50 TopMargin25 SubmitButtonStlye "  type="submit" onclick="CreateNewAccount();" value="Registrieren"/>'+
    '<input class="alone LeftMargin50 TopMargin15 SubmitButtonStlye "  type="submit" onclick="CloseNewAccountWindow();" value="Zurück"/>'
}