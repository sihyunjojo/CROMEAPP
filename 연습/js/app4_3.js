const loginInPut = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(event) {
    event.preventDefault(); 
    console.log(loginInPut.value);

}

function handleLinkClick(event) {
    event.preventDefault();
    /* console.log(event);         //event에 대한 다양한 정보들을 보여준다.
    alert("clicked"); */
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click",handleLinkClick);
