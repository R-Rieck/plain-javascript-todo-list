/*Public functions */

function LoadDefaults()
{
    let task = document.getElementById('TaskField');
    let date = document.getElementById('DateField');
    let sel = document.getElementById('CategorySelector');
    let categories = ['Arbeit','Privat'];

    // task.value = 'Do Something'
    task.style.color = "#999999";

    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; 
    var yyyy = today.getFullYear();

    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    date.value = yyyy + '-' + mm +'-' + dd;

    
    for(var i = 0; i < categories.length; i++) 
    {
        var opt = document.createElement('option');
        opt.innerHTML = categories[i];
        opt.value = categories[i];
        sel.appendChild(opt);
    }

    getLocalStorageItems().forEach(item => {
        showInTable(item.Task, item.Date, item.Category);
    });;
}

function ClearBox()
{
    let task = document.getElementById('TaskField');
    task.value = '';
    task.style.color = '#000000';
}

function SubmitChanges()
{
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let task = document.getElementById('TaskField');
    let date = new Date(document.getElementById('DateField').value);
    let category = document.getElementById('CategorySelector');

    storeInLocaleStorage(task, date.toLocaleDateString('de-DE',options), category)
    showInTable(task.value, date.toLocaleDateString('de-DE',options), category.value);
    
}

function DeleteEntry(task){
    console.log(task);
    localStorage.removeItem(task);
    location.reload();
}

/*Private functions*/

function showInTable(task, date, category)
{
    let table = document.getElementById('DataTable');
    let key = task + date + category;

    table.innerHTML += 
    '<tr class="tr" id="' + task + '">'+
    '<td class="td">' + task + '</td>'+
    '<td class="td">' + date + '</td>'+
    '<td class="td">' + category+ '</td>'+
    '<td class="td">' + '<img src="Ressources/delete.png" width="20" height="20" onclick="DeleteEntry(\''+ key + '\');">'+
    '</td>'+
    '</tr>'
}

function storeInLocaleStorage(task, date, category)
{
    let todoObject = {'Task': task.value, 'Date': date, 'Category': category.value};
    let convertToJSON = JSON.stringify(todoObject);

    console.log(localStorage.setItem(task.value+date+category.value, convertToJSON));
    console.log(convertToJSON);
}

function getLocalStorageItems()
{
    let TaskObjects = [];

    for( i = 0; i < localStorage.length; i++){
        console.log(localStorage.getItem(localStorage.key(i)));
        let taskObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
       TaskObjects.push(taskObject);
    }
    return TaskObjects;       
}

function timeLeftMarker(){

}

/*Testing*/

function testing(task = 'hallo'){
    console.log('<td class="td">' + '<img src="Ressources/delete.png" width="20" height="20" onclick="DeleteEntry('+ '"' + task + '"' + ');">')
    
}