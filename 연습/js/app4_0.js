/* const loginForm = document.querySelector("#login-form");
//getelementid는 #없어도됨
//document에서 찾는 대신에 작성한 loginfoorm에서 찾아줌

const loginInPut = loginForm.querySelector("input");
const loginInPut = loginForm.querySelector("button");
//loginform에서 인풋과 버튼을 찾아줌 */

//loginfomrm안에서 바로 찾을 수도 있다. loginform은 html이기 때문에 발 ㅗ찾을 수 있다.

const loginInPut = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.dir(loginInPut.value); // logininput에 대한 정보를 볼 수 있음. + value에 대한 정보를 가져오려고 봄
    console.log("click on login!!")
}

loginButton.addEventListener("click",onLoginBtnClick)