const age = prompt("How old are you");
//prompt는 사용자에게서 message를 보여주고 입력을 받는다
//prompt는 아주 오래된 방법으로 css 적용이 불가함.
//입력값을 반환시켜줌.

console.log(age);
console.log(typeof age,typeof parseInt(age)); // type을 볼 수 있는 함수

console.log(isNaN(age));

//praseInt는 문자열을 int로 전환해준다.

