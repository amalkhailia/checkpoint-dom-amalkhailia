
/*les fonction*/
/*btn plus*/
let btnPlus = document.querySelectorAll(".plus");
let qte = document.querySelectorAll(".qte");
for (let i = 0; i < btnPlus.length; i++) {
     btnPlus[i].addEventListener("click", () => {
     qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
  });
}
/*btn Moins*/
let btnMoins = document.querySelectorAll(".moins");
let qteM = document.querySelectorAll(".qte");
for (let i = 0; i < btnMoins.length; i++) {

     btnMoins[i].addEventListener("click", () => {
         if(qteM[i].innerHTML >1)
     qteM[i].innerHTML = Math.abs(Number(qteM[i].innerHTML) - 1);
  });
  
}
/*total btn plus*/
let btnPlusT = document.querySelectorAll(".plus");
let prixTotal = document.querySelectorAll(".total");
let prixUnit = document.querySelectorAll(".unit");
let qteT = document.querySelectorAll(".qte");
//let Ttp = document.querySelector(".total-du-total");
for (let i = 0; i < btnPlusT.length; i++) {

     btnPlusT[i].addEventListener("click", () => {
     prixTotal[i].innerHTML = Number(qteT[i].innerHTML) *  Number(prixUnit[i].innerHTML) ;
      //Ttp.innerHTML = Number(Ttp.innerHTML) + Number(prixTotal[i].innerHTML);
      });
  
}
//to pay btn plus

let btnPlusTP = document.querySelectorAll(".plus");
let prixTotalTP = document.querySelectorAll(".total");
let prixUnitTP = document.querySelectorAll(".unit");
let Ttp = document.querySelector(".total-du-total");
for (let i = 0; i < btnPlusTP.length; i++) {

     btnPlusTP[i].addEventListener("click", () => {
      Ttp.innerHTML = (Number(Ttp.innerHTML) + Number(prixTotal[i].innerHTML))- Number (prixUnitTP[i].innerHTML);
      });
  
}
//fih mochkel
/*total minus*/
let btnMoinsT = document.querySelectorAll(".moins");
let prixTotalM = document.querySelectorAll(".total");
let prixUnitM = document.querySelectorAll(".unit");
let qteTM = document.querySelectorAll(".qte");
//let TtpM = document.querySelector(".total-du-total");*/
for (let i = 0; i < btnMoinsT.length; i++) {
     btnMoinsT[i].addEventListener("click", () => {
        //  if(qteTM[i].innerHTML >1)
     prixTotalM[i].innerHTML = Math.abs(Number(prixTotalM[i].innerHTML) - Number(prixUnitM[i].innerHTML)) ;
    // TtpM.innerHTML = Number(TtpM.innerHTML) - Number(prixTotalM[i].innerHTML);
      });
  
}

//to pay minus
let btnMoinsTP = document.querySelectorAll(".moins");
let prixUnitMTP = document.querySelectorAll(".unit");
//let qteTM = document.querySelectorAll(".qte");
let TtpMTP = document.querySelector(".total-du-total");
for (let i = 0; i < btnMoinsTP.length; i++) {
     btnMoinsTP[i].addEventListener("click", () => {
                TtpMTP.innerHTML = Math.abs(Number(TtpMTP.innerHTML) - Number( prixUnitMTP[i].innerHTML));
                });}

        

// btn remove
     let close = document.querySelectorAll('.delete')
     let totArt = document.querySelectorAll(".total");
     let toPay = document.querySelector(".total-du-total");

  for ( let i = 0 ; i < close.length ; i++){
    close[i].addEventListener('click', () => {
      close[i].parentNode.parentNode.parentNode.removeChild(close[i].parentNode.parentNode)
      toPay.innerHTML= Math.abs(Number(toPay.innerHTML) - Number( totArt[i].innerHTML));
  
    });}

  //btn like
  var btn = document.getElementById('btn');
function toggle(){
     if( btn.classList.contains("far")){
          btn.classList.remove("far")
          btn.classList.add("fas");

     }else{
          btn.classList.remove("fas")
          btn.classList.add("far");


     }

}
var btn1 = document.getElementById('btn1');
function toggle1(){
     if( btn1.classList.contains("far")){
          btn1.classList.remove("far")
          btn1.classList.add("fas");

     }else{
          btn1.classList.remove("fas")
          btn1.classList.add("far");


     }

}

var btn2 = document.getElementById('btn2');
function toggle2(){
     if( btn2.classList.contains("far")){
          btn2.classList.remove("far")
          btn2.classList.add("fas");

     }else{
          btn2.classList.remove("fas")
          btn2.classList.add("far");


     }

}
  
  
   