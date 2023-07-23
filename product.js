//post product 
var title,price,img;
function readForm(){

    title=document.getElementById('title').value;
    price=document.getElementById('price').value;
    img=document.getElementById('img').value;
    console.log(title,price,img);
    console.log(document.getElementById('img').target)
}

//listener click to submit button 
document.getElementById("btn").addEventListener("click",(e)=>{
    e.preventDefault();
    readForm();
})