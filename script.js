const links = document.querySelectorAll('a')
links.forEach(link => {
  link.style.color = '#ddd'
  link.style.lineHeight = '2.3'
  link.style.textDecoration = 'none'
  link.addEventListener('mousedown', (event) => {
    let move = event.target
    move= document.elementFromPoint(event.clientX, event.clientY)
  })
});

// document.getElementById('forgot').style.color = 'blue'
// document.getElementById('forgot-email').style.color = 'blue'


const lists = document.querySelectorAll('ul')

lists.forEach((list) => {
list.style.listStyleType = 'none'
})


const wrap = document.getElementById('footer-links')
wrap.style.display = 'flex'
wrap.style.flexDirection = 'column'


// function (media queries in js)
// function media(x) {
//   if(x.matches) {

//   }
// }

const body = document.getElementById('footers')

body.style.background = 'var(--color-background)'
//body.style.height = '15.2cm'

//body.media

const select = document.getElementById('select')
select.style.height = '2rem'
select.style.width = '7rem'
select.classList.add('size')
select.style.background = '#111'
select.style.color = '#fff'
select.style.fontSize = '16px'
select.style.textAlign = 'right'



const selector = document.getElementById('bin')
selector.style.padding = '20px';




const logo =  document.getElementById('footer_p')
logo.style.margin = '0'
logo.style.padding = '20px'
logo.style.marginTop = '-20px'
logo.style.fontSize = '15px'



let btnOpen = document.querySelectorAll('.button')
let input = document.getElementById('email')

function myFunc() {
  window.location = './Authentication/Sign Up/sign-up.html'
}

// function openLink(element,link){
// const el=document.querySelectorAll(`${element}`)
// el.forEach(btn => {
//   btn.addEventListener('click',()=>{
//   window.location.href=`${link}'_blank'`
// })
// });
// }

// link from email
let email = document.getElementById('email-link')
email.addEventListener('click', ()=> {
  window.location = './Authentication/Login/login.html'
})

// from plan to main
let fromPlan = document.getElementById('from-plan')
fromPlan.addEventListener('click',() => {
 window.location = '../main/main.html'
})

// accordion
// let questions = document.querySelectorAll('.card')
// let answers = document.querySelectorAll('.ans')
// console.log(questions)
// questions.forEach((question) => {
//   question.addEventListener('click',(item) =>{
//     const paragraph = item.querySelector("p")
//     if(paragraph) {
//       paragraph.classList.toggle('show')
//     }
//   })
//   })


