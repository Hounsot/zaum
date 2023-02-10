window.addEventListener('DOMContentLoaded', (event) => {
  var trigger = document.getElementsByTagName('body')[0]
  addEventListener('scroll', (event) => {
    let scroll = trigger.getBoundingClientRect().top * -1
    if (scroll >= 300) {
      document.getElementsByTagName('nav')[0].classList.add('lol')
    } else {
      document.getElementsByTagName('nav')[0].classList.remove('lol')
    }
  })
})
