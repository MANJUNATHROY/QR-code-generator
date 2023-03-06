const wrapper=document.querySelector(".wrapper");
let generatebtn=document.querySelector(".form button");

let qrinput=document.querySelector(".form input");
qrimage=document.querySelector(".qrcode img")
console.log(qrinput);

generatebtn.addEventListener("click",()=>{
    let qrvalue=qrinput.value;
    if(!qrvalue) return;
    generatebtn.innerText="Generating QR code ......"
    qrimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrvalue}`
    qrimage.addEventListener("load",()=>{
        wrapper.classList.add("active")
        generatebtn.innerText="Generate QR code";

    })
});

qrinput.addEventListener("keyup",()=>{
    if(!qrinput.value){
        wrapper.classList.remove("active")
    }
})