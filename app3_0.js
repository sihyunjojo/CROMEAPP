//console창에 document를 치면 html코드를 가져 올 수 있다.
// html에 접근 할 수 있는 객체이다.

console.dir(document);
//document에 들어있는 object들
//document는 html을 보여주는 것이다 
//JS의 관점에서 html을 보여준다.
// html document의 object들을 접근하고 읽을 수 있다.

console.log(document.title);

//console에서 js 명령어를통해서 html의 값을 변경도 가능하다
//document.title = "dwq"로 변경도 할 수 있다.
//js를 통해서 html을 삭제하고 추가하고 수정 할 수 있다.(동적이게 만들어줌)