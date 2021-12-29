const title = document.getElementById("title");

console.dir(title);
//js 는 html의 요소들을 가져오지만 그 가져온 것을 js에서 수정 추가 삭제 할 수 있다.
 
title.innerText = "got  you"

//got you로 바뀜  html에서 id를 추가하고 
//js에선 id를 가져와서 
//변경함.