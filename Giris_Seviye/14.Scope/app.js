let a = "123456";//let değişkenleri yeniden bildirilemez
var value1 = 10;
let value2 = 20;
const value3 = 30;

function Func(){
    var value4=40;
    let value5=50;
    const value6 =60;

    console.log(value4,value5,value6);
}
    Func();

    if(true){
        var value7=70;
        let value8=80;
        const value9=90;
        console.log(value7,value8,value9);
    }
    console.log(value1,value2,value3);
if(true){
    let a="34343434";
}
