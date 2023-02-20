
//While Döngüleri

let i = 0;
while(i<10){
    console.log(i);
    i++;
}
 i = 10;
while(i>0){
    console.log(i);
    i--;
}


// //Vreak Ve Continue

// i=0;
// while(i<10){// sonsuz  döngü
//     if(i == 3 || i == 5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

//Do While

i = 0;
do{
    console.log(i);
    i++;
}while(i<10);


const langs = ["Python","Javascript","Java"];

let index = 0;

while(index < langs.length){

    console.log(langs[index]);

    index++;
}
for (let index = 0;index < langs.length;index++){

    console.log(langs[index]);

}
langs.forEach(function(lang,index){
    console.log(lang,index);

});



const users = [
    {name:"Mustafa",age:25},
    {name:"Zeynep",age:40},
    {name:"Ali",age:12}
];

const names = users.map(function(user){ 
    return user.name;
});
const ages = users.map(function(user){
    return user.age;
});

for (let key in user){
    console.log(key,user[key]);
}