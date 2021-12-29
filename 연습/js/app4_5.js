// username local storage에 저장하기 session storage도 있음.

const loginForm = document.querySelector("#login-form");
const loginInPut = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInPut.value;
    localStorage.setItem("username",username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 자주쓰이는 것은 변수로 지정하기! 

loginForm.addEventListener("submit", onLoginSubmit);