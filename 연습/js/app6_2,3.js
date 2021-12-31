const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");
const toDos= [];   

//localstorage에는 array를 저장할 수없다. 오직 텍스트만 저장 할 수 있다.
//localstorage에는 새로고침을 실행해도 값이 그대로 남아 있지만 새로고침 후 새로운 값이 들어오면 기존 값을 삭제 후 다시 넣어준다


function saveToDos(){
localStorage.setItem("todos",JSON.stringify(toDos));    //JSON.stringify는 기존 텍스트(array이든 어떤 JS코드이든)를 String값으로 바꿔준다.
}
function deleteToDo(event){
    const li = event.target.parentElement; // event가 일어난 곳에 대한 다양한 정보(단서)를 저장 하고 있다.
                                            //  parentElement는 상위태그(엘리먼트)이다. 현재여기서는 li태그
    li.remove();
}

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
    

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);            //array에 값을 넣어주는 것임
    paintToDo(newTodo);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);
