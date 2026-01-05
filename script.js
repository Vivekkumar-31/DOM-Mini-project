var main = document.querySelector('#main')
var crsr = document.querySelector('.cursor')

main.addEventListener('mousemove',function(elems){
  crsr.style.left = elems.x+'px'
  crsr.style.top = elems.y+'px'
})





