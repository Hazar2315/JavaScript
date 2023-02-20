const person = {
    name:"Hazar Ersöz",
    age:23,
    salary:17000
}
const langs = ["Python","Java","C++","Php"];

const name ="Hazar"

//For In

//Object
for(let prop in person){
    console.log(prop,person[prop]);
}

//Array
for(let index in langs){
    console.log(index,langs[index]);
}
for(let character of name){
    console.log(character);
}