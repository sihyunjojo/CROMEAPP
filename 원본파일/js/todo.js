const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");
let toDos= [];   
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));    
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    console.log(typeof parseInt(li.id));
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  //toDo는 localstorage에 있는 toDos 중 하나
    //filter 함수는 조건에 true인 것은 그대로 두고 fasle 인 것은 삭제한다.
    //li.id는 string 이므로 parseint로 int 값으로 바꿔서 비교가능한 같은 타입이되게해준다
    saveToDos();    // toDos에만 넣고 이값을 localstorage안에 안넣어주면 의미가 ㅇ벗다~`
}

function paintToDo(newTodo){
    const li =document.createElement("li");
    li.id = newTodo.id;     //li에 id값을 넣어줌
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);  
    li.appendChild(button);                     
    toDoList.appendChild(li);               
    

}

//toDos 를 text가 아닌 object로 값을 주고 싶다 .key와 value가 있는 형태로
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()//Date.now는 지금 현재 시간을 밀리초 단위로 반환해준다.
       }
    toDos.push(newTodoObj);            
    paintToDo(newTodoObj);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos;    
    parsedToDos.forEach(paintToDo);
}