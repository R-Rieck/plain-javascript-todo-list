const Firebase = firebase.database().ref();

async function GetToDoObjects(func){
    let ToDos = new Array();
    
    Firebase.child('ToDo/').on("child_added", function(item) {
        ToDos.push({
            Task: "ter", //snap.child("Task").val(),
            Date: "ter", //snap.child("Date").val(),
            Category:"ter", // snap.child("Category").val(),
            Id:"ter" // snap.child("Id").val()
        });
        showInTable(item.Task, item.Date, item.Category, item.Id);
    });

    console.log(ToDos);

    return ToDos;
}

function InsertToDoData(task, date, category){
    let id = IdGen();
    
    GetToDoObjects().forEach(element => {
        if(element.Id  == id){
            id = IdGen;
        }
    });

    Firebase.child('ToDo/' + task + id).set({
        Id: id,
        Task: task,
        Date: date,
        Category: category
    });
}

function IdGen(){
    return '_' + Math.random().toString(36).substr(2, 9);
}