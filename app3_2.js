const title = document.getElementsByClassName("hello");
const h1 = document.getElementsByTagName("h1");
const tititle = document.querySelector(".hello h1"); 
//css seletor이기때문이다. class name과 태그를 알려줘야함.
//첫번째 element만 가져옴

//전부 가져오는건 quertsletorall


document.querySelector("#hello");
document.getElementById("hello");
// 거의 같은 역할을 함.

h1.innerText = "got  you"

console.log(title.className);