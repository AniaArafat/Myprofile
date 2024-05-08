const toggleBtn = document.querySelector('.togle-btn');
const nav = document.querySelector('nav')

const dropdown = document.querySelector('.dropdown')

 toggleBtn.addEventListener('click', ()=> {
      nav.classList.toggle('active')   
 })


let title = document.querySelectorAll('.sub-title')
let subTitle1 = document.querySelectorAll('.description')
 
 
title.forEach((element, index )=> {
     
     element.addEventListener('click', ()=> {
          let oldactivet = document.querySelector('.block1')
          oldactivet.classList.remove('block1')
          title[index].classList.add('block1')

          let oldactived = document.querySelector('.block')
          oldactived.classList.remove('block')
          subTitle1[index].classList.add('block')
       
        
     
     })
}
);


// body click remove active class

document.onclick = function (e) {
     if (!nav.contains(e.target) && !dropdown.contains(e.target)) {
          nav.classList.remove('active')
     }
}

window.addEventListener('scroll', () => {
     nav.classList.remove('active')
})