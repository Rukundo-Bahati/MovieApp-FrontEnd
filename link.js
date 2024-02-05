// accordion

document.querySelectorAll('.faq').forEach((faq) => {
  faq.addEventListener('click', (event) => {
    const paragraph = event.target.closest('.question')
    if(paragraph) {
      paragraph.nextElementSibling?.classList.toggle('show')
    }
  })
})



// linking to plans
let plan = document.getElementById('next')
plan.addEventListener('click',()=> {
  window.location = '../../Plan/plan.html'
})

// link to sign in again
let toSignIn = document.getElementById('button')
toSignIn.addEventListener('click', () => {
 window.location = '../Sign Up/sign-up.html'
})

// from from plan to main
let enterMain = document.getElementById('enter')
enterMain.addEventListener('click', toPlan())

function toPlan() {
  window.location = '../../Plan/plan.html'
}

// sign out
function link() {
  window.location = '../index.html'
}
let signOut = document.querySelector('.sign-out')
signOut.addEventListener('click', link())

// from plan to main 
let toMain = document.getElementById('from-plan')
toMain.addEventListener('click',enter())
function enter() {
window.location = '../main/main.html'
}