//normal function
const merhaba = function(){
    console.log("merhaba");
}

merhaba();

//arrow hali

const merhabalar = () =>{
    console.log("Merhaba");

}

const günaydın = (firstName , lastName) =>console.log("Günaydın ",firstName,lastName);

günaydın("Hazar","Ersöz");


const cube = x => x*x*x;

console.log(cube(4));