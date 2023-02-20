const numbers=[43,56,33,23,44,35,5];

const langs=["Python","Java","C++","JavaScript"];

const a=["Merhaba",22,null,undefined,3.14];

//uzunluk
value=numbers.length;
console.log(value);
//indexleme
value=numbers[0];
console.log(value);
value=numbers[2];
console.log(value);

value=numbers[numbers.length-1];

//indexin değerini değiştirme

numbers[2]=1000;
value=numbers;

//index of

value=numbers.indexOf(1000);

//Arrayin sonuna değer ekleme
numbers.push(2000);
value = numbers;

//Başına ekleme

numbers.unshift(3000);
value = numbers;

//Sonundan değer çıkarma

numbers.pop();
value = numbers;

//Belli bir kısmı atma
numbers.splice(0,3);
value=numbers;

//reverse

numbers.reverse();
value=numbers;
value=numbers.sort();

value=numbers.sort();

value=numbers.sort(function(x,y){
    return x-y;
});

value=numbers.sort(function(x,y){
    return y-x;
});

console.log(value);

