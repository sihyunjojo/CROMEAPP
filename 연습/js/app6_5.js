const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");
let toDos= [];   
const TODOS_KEY = "todos";
// 기존의 코드로는 기존에 있던 localstorage에 있는 것들은 삭제하고 그 이후에 잇는게 새로 load됨(덮어씀)으로 기존에 있는 것도 유지하고 그 후에 것도 받아오는 것이 필요함
// 실행 할때마다 비어있는 toDos변수에 값을 넣어준다.
// 그러므로 처음에 있던 localstorage를 toDos에 넣어줘야한다. 그러기위해서 변수를 const가 아니라 let을 이용해서 업데이트가 가능하게 해준다.
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

const savedToDos = localStorage.getItem(TODOS_KEY);

//저장되어 있던 ToDo들을 출력해주는 것
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //parse메서드는 문자열의 구문을 분석하고 그 결과에 따라서 JS값이나 객체를 생성합니다. -> 문자열이 배열처럼 생기면 배열로 받아드리고 딕셔너리 처럼 생기면 딕셔너리처럼 받아들임
    toDos = parsedToDos;    //parsedToDos 즉, 기존에 저장되어 있던 리스트배열로 변화
    parsedToDos.forEach(paintToDo);
   /*  parsedToDos.forEach(sayHello()) //각 요소마다 function을 실행 시켜준다.   
    parsedToDos.forEach((item) => console.log("this is item" , item)); //function을 만들어주는 대신에.    */
    //parsedToDos에 있는 각각의 item에 대하여 각각 item 수만큼 실행해줌
    //내가 지금 어떤 아이템을 사용하고 있는지 아는 것이 중요하다
}