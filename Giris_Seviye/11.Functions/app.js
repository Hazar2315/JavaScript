//Fonksiyon Tanımlama

function merhaba(name="Bilgi Yok",age="Bilgi Yok"){
    if(typeof name ==="undefined") name = "Bilgi Yok";
    if(typeof age ==="undefined") age = "Bilgi Yok";
    console.log(`İsim: ${name} Yaş : ${age}`)
}

merhaba("Hazar" , 23);
console.log(merhaba("İhsan",30));

function square(x){
    return x*x;
    console.log("Naber");
}
function cube(x){
    return x*x*x;
}
let a=cube(square(12));
console.log(a);


//Dataabse işlemleri

const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
      console.log(`Id: ${id} Güncellendi`);  
    },
    delete:function(id){
      console.log(`Id: ${id} Silindi`);  
    }
}
console.log(database.host);
database.add();
database.delete(10);