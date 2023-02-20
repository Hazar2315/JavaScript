//Spread Operator

const Langs = ["Python","C++","Java","Php"];

console.log(Langs[0],Langs[1],Langs[2],Langs[3]);

console.log(...Langs);


const langs2 = ["Javascript","C#",...langs];

console.log(langs2);

//const numbers = [1,2,3,4,5,6,7,8,9];




const [a,b,...number2] =numbers;

console.log(a,b);
console.log(number2);

const addNumbers = (a,b,c) => console.log(a+b+c);

const numbers = [100,200,300];

addNumbers(...numbers);