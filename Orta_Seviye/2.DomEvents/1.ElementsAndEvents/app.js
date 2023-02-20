const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");
// Kod yuklendikten sonra kullanicinin kullandigi islemlerin calismasini saglar
todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("Submit Eventi");

    e.preventDefault();
}


// filterInput.addEventListener("focus",function(e){

//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);


//     // console.log("Naber");


// });
// filterInput.onfocus = function(){
//     console.log("Naber");

// }




/*
onchange	Bir HTML öğesi değiştirildi
onclick	    Kullanıcı bir HTML öğesini tıklar
onmouseover	Kullanıcı, fareyi bir HTML öğesinin üzerine getirir
onmouseout	Kullanıcı, fareyi bir HTML öğesinden uzaklaştırır
onkeydown	Kullanıcı bir klavye tuşuna basar
onload	    Tarayıcı sayfayı yüklemeyi bitirdi
*/