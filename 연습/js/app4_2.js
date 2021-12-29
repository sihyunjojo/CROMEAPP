const loginInPut = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(event) {
    event.preventDefault(); // event가 발생할때 일어나는 기본적인 동작들을 막아줌
    console.log(loginInPut.value);

}

loginForm.addEventListener("submit", onLoginSubmit);

