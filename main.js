// let btnLike1= document.querySelector("#like1")
// let btnLike2= document.querySelector("#like2")
// let btnLike3 = document.querySelector("#like3")
Total()
function ajouter (event){
    var h=event.target.parentNode.querySelector('h2');
    var sum =event.target.parentNode.querySelector('h3');
    var result=event.target.parentNode.querySelector('.prix').innerHTML ;
    h.innerHTML=Number(h.innerHTML)+1
    t=Number(result)*Number(h.innerHTML)
    sum.innerHTML=t
    Total()
}

function sub (event){
    var h=event.target.parentNode.querySelector('h2');
    var sum =event.target.parentNode.querySelector('h3');
    var result=event.target.parentNode.querySelector('.prix').innerHTML ;
  

   if (Number(h.innerHTML)>1) {
    h.innerHTML=Number(h.innerHTML)-1
    t=Number(result)*Number(h.innerHTML)
    sum.innerHTML=t
 
   } 
   else {
    h.parentNode.remove()
   }
   Total()
}

function suprim (event) {

    var btn=event.target.parentNode.parentNode;
    console.log(btn)
    btn.remove()
    Total()
}



function Total() {
    var result=document.getElementsByClassName('totalprix')
    var resulttotal=document.getElementById('Totalfinal')
    var sum=0 ;
    for (let i = 0; i < result.length; i++) {
        var a=Number(result[i].innerHTML)
        sum=sum+a
        
    }
    resulttotal.innerHTML=Number(`${sum}`)
   
}
Total()

function like(event){
    heart = event.target.parentNode.querySelector('.heart')
    if(heart.style.backgroundColor=== 'red'){
      heart.style.backgroundColor = 'white';
  }else{
      heart.style.backgroundColor = 'red';
  }
}



