let mainLinks = document.querySelectorAll('.item')

let open = document.getElementById('move').addEventListener('click', show)


function show() {
for(let link of mainLinks) {
  
  if(link.style.display=="none"){

    link.style.display = 'block'
    link.style.background = 'none'
  }
  else{
    link.style.display="none"
  }
}}



// search
let toSearch = document.getElementById('email')
let inputField = toSearch.querySelector('input[type = "search"]')
let button = document.getElementById('get')

button.addEventListener('click', () => {
  let url = inputField.value
  window.open(url, '_blank')
})


// slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
 autoplay : {
  delay : 1500,
  disableOnInteraction : false,
 },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
 
});