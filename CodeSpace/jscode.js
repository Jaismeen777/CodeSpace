let btn1=document.querySelector("#light");
btn1.addEventListener("click",()=> {
    document.querySelector("body").style.backgroundColor="white";
document.querySelector("body").style.color="black";
document.querySelector("h1").style.color="blue";
})
let btn2=document.querySelector("#dark");
btn2.addEventListener("click",()=> {
    document.querySelector("body").style.backgroundColor="black";
  document.querySelector("body").style.color="grey";
})