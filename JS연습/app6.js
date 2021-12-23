const playerName = "sihyun" // 파이썬에서는 snake방식으로 변수명 지정 js에서는 camel방식으로 변수지정
const playerPoints = 12121212;
const playetHandsome = true;
const playerFat = "little bit";

// player[0] == name 이라고 주석으로 알려줘도 되겠지만 더 좋은 방법이 있다.
//const player = ["sihyun",1212,true,"little bit"]; //이러한 방식은 아무런 정보를 알려주지 않고 있다.

const player ={
    name : "sihyun",
    point : 10,
    handsome : true,
};

console.log(player);

console.log(player.name);
console.log(player["name"]); // 위와 같은 결과를 나타냄. 굳이?

player.fat = false; //

console.log(player); 
//const 는 object 그 자체의 구조?? 그러므로 바꿀 수없지만 전체를 하나의 값으로 바꿀 수는 없다.(playet = flase;) XX
//내부의 property는 수정이 가능하다.

player.name
