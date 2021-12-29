// username local storage에 저장하기 session storage도 있음.

const loginForm = document.querySelector("#login-form");
const loginInPut = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInPut.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);

    /* greeting.innerText = `Hello ${username}`;           //greeting을 만드는 것이 반복됨 -> 함수로 만드는 것이 좋을거 같음
    greeting.classList.remove(HIDDEN_CLASSNAME); */
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greetings.classList.remove(HIDDEN_CLASSNAME);
}

// 자주쓰이는 것은 변수로 지정하기! 

const savedUSername = localStorage.getItem(USERNAME_KEY);

if(savedUSername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    //show the greetings
    paintGreetings(savedUSername);
}