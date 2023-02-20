
/*
ES6 (ECMAScript 2015) ile birlikte, bir nesnenin veya dizinin 
öğelerini değişkenlere atanmak üzere bir sözdizimi olan "destructure" (yıkma) tanıtıldı. 
Bu işlem, nesnelerin veya dizilerin öğelerine ayrı ayrı erişmek ve her bir öğeyi ayrı bir değişkene atamak yerine,
 tek bir işlemde birden çok öğeyi aynı anda değişkenlere atama işlemini kolaylaştırır.

Örneğin, aşağıdaki örnek dizideki ilk iki elemanı değişkenlere atamak için destructuring kullanabiliriz:
*/

//destruction olmadan
let number1 , number2;

arr = [100,200,300,400];

number1 = arr[2];
number2 = arr[3];
console.log(number1,number2);

//Destructing

[number1,number2] =arr;//sıralı bir şekilde arr değerini değişkenlere atar

console.log(number1,number2);

// Obje Destructing

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};
const {a:number3,c:number4,e:number5}=numbers;
console.log(number3,number4,number5);

// Function Destructing

const getLangs = () => ["Python","Java","C#"];

const [lang1,lang2,lang3]=getLangs();

console.log(lang1,lang2,lang3);

//Obje

const person={
    name:"Hazar Ersöz",
    year:2000,
    salary:30000,
    showInfos : ()=>console.log("Bilgiler gösteriliyor")
}

const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;

console.log(isim,yil,maas);
    bilgileriGoster()