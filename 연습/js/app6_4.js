const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");
const toDos= [];   
const TODOS_KEY = "todos";
//JSON.paras 는 스트링을 무언가를 할 수있는 배열로 바꿔준다.
function saveToDos(){
localStorage.setItem("todos",JSON.stringify(toDos));    
}

function deleteToDo(event){
    const li = event.target.parentElement; 
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
    toDos.push(newTodo);            
    paintToDo(newTodo);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    
}    //js는 지금 처리되고 있는 item을 그냥 제공해준다


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHello()) //각 요소마다 function을 실행 시켜준다.   
    parsedToDos.forEach((item) => console.log("this is item" , item)); //function을 만들어주는 대신에.   
    //parsedToDos에 있는 각각의 item에 대하여 반복해줌
    //내가 지금 어떤 아이템을 사용하고 있는지 아는 것이 중요하다
}
else{

}