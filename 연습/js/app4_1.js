/* const loginForm = document.querySelector("#login-form");
//getelementid는 #없어도됨
//document에서 찾는 대신에 작성한 loginfoorm에서 찾아줌

const loginInPut = loginForm.querySelector("input");
const loginInPut = loginForm.querySelector("button");
//loginform에서 인풋과 버튼을 찾아줌 */

//loginfomrm안에서 바로 찾을 수도 있다. loginform은 html이기 때문에 바로 찾을 수 있다.

const loginInPut = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username= loginInPut.value;
    console.log(username);

}

loginButton.addEventListener("click",onLoginBtnClick)





/*    const username = loginInPut.value;
   if(username === ""){
    alert("please write your name");
   }
   else if(username.length > 15){
    alert("your name is too long.")
   }
   //입력의 유효성을 확인하는 것은 항상 좋은 습관이다.  */ 