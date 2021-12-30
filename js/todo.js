const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    console.log(event);
}
//많은 버튼들이 생성 될텐데 같은 이벤트를 기다리고 있는데 그 버튼의 위치에 따라서 어떤 위치인지를 알려줘야한다.

function paintToDo(newTodo){
    const li =document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);  
    li.appendChild(button);                     
    toDoList.appendChild(li);               
    
    //append는 맨마지막에 이루워져야한다. 

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);

}

toDoForm.addEventListener("submit", handleToDoSubmit);
