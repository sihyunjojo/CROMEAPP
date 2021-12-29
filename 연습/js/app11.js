const calculator = {
    plus : function (a,b){
        console.log(a+b);
    },
    minus : function (a,b){
        console.log(a-b);
    },
    power : function (a,b){
        console.log(a**b);
    },
}


console.log(calculator.minus(2,3));


// new 

const age = 12;
function calcuateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

//return을 하면 function을 실행 할때 반환을 해준다.

const KrAge = calcuateKrAge(age);

console.log(krAge);