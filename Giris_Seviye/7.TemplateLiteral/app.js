const name="Hazar Ersoz";
const department="IT";
const salary=4000;

function a(){
    return "Merhaba";
}

const html = `
      <ul>
       <li>${name}</li>
       <li>${department}</li>
       <li>${salary}</li>
       <li>${10 / 4}</li>
       <li>${a()}</li>
      </ul>

     `;
     document.body.innerHTML = html;