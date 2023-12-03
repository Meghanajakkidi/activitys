let todos = [];

let label = document.createElement("label");
label.textContent="Enter todo Item name:"
label.style.color="indigo"
document.body.appendChild(label);
let input =document.createElement("input");
input.placeholder="ADDITEMSHERE"
input.style.fontFamily='arial'
input.style.width='100%'
input.style.borderRadius='20px'
input.style.textAlign='center'
input.type="text";
input.id="todo-input";
input.value=""
document.body.appendChild(input)

let addBtn = document.createElement("button");
addBtn.style.backgroundColor="green"
addBtn.style.margin="20px"
addBtn.style.width='50px'
addBtn.style.height='30px'
addBtn.style.borderRadius='30px'
addBtn.textContent="Add";
addBtn.id="add-btn";
document.body.appendChild(addBtn)
let ul = document.createElement("ul");
ul.id="todos-list"
document.body.appendChild(ul)
    function addTodoItem(){
    let todoInput = document.getElementById("todo-input").value
   if(todoInput!==""){
        todos.push(todoInput)
        console.log(todos)
        document.getElementById("todo-input").value=""
        displayToDos();
    }
    }

    addBtn.addEventListener("click",addTodoItem)
    
function displayToDos(){
    let todosList = document.getElementById("todos-list");
    todosList.innerHTML=""
    for(let i=0;i<todos.length;i++){
        let li = document.createElement("li");
        li.style.background="lightgrey"
        li.style.padding="10px"
        li.style.listStyle="none"
        li.style.margin="5px";
        li.innerHTML = todos[i] 
        todosList.appendChild(li)
    }

}

let deleteBtn = document.createElement("button");
deleteBtn.style.backgroundColor="red"
deleteBtn.style.borderRadius='30px'
deleteBtn.textContent="DELETE";
deleteBtn.id="delete-btn";
document.body.appendChild(deleteBtn)
function deleteTodoItem(){
    let todosList = document.getElementById("todoslist")
   document.body.removechild(todosList);
}



deleteBtn.addEventListener("click",deleteTodoItem)