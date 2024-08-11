let minutes =document.querySelector("#minutes");
let seconds =document.querySelector("#seconds");
let startbtn =document.querySelector("#startbtn");
let stopbtn =document.querySelector("#stopbtn");
let resetbtn =document.querySelector("#resetbtn");


let mytimer;
let mycounter=0;
let myseconds=0;
let myminutes=0;


startbtn.addEventListener("click",function () {
        startbtn.disabled=true;
        mytimer=setInterval ( function() {
        mycounter++;
        myseconds=mycounter;
        seconds.innerHTML=myseconds;


 

   if (myseconds >59) {
   seconds.innerHTML="00";
   mycounter=0;
   myminutes++;

   }else if(myseconds >9) {
     seconds.innerHTML=myseconds;

   } else {

   seconds.innerHTML="0"+ myseconds;

   }


   if (myminutes>59) {
   minutes.innerHTML="00";
   seconds.innerHTML="00";
   mycounter=0;
   myminutes=0;
   myseconds=0;
   clearIntervel(mytimer);


   } else if (myminutes>9) {
minutes.innerHTML= myminutes;


   } else {
  minutes.innerHTML="0"+ myminutes ;

   }
 
   }, 1000);
});

stopbtn.addEventListener("click",function() {
    clearInterval(mytimer);
    startbtn.disabled=false;


});
       
resetbtn.addEventListener("click",function(){
    startbtn.disabled=false;
    minutes.innerHTML="00";
    seconds.innerHTML="00";
    mycounter=0;
    myminutes=0;
    myseconds=0;
    clearIntervel(mytimer);


});








     

