var istatus = document.querySelector("h5")
var friend = document.querySelector('#add')
var check = 0 

   friend.addEventListener("click",function(){
   if(check==0){
    istatus.innerHTML = 'friend'
    istatus.style.color = 'green'
    check = 1
   }else{
    istatus.innerHTML = 'stranger'
    istatus.style.color = 'red'
    check = 0
   }
})

