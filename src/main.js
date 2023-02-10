window.addEventListener('DOMContentLoaded', (event) => {
  const trigger = document.getElementsByTagName('body')[0]
  const cursor = document.getElementById('cursor')
  const triggerZone = document.getElementsByTagName('img')
  for (let i = 0; i < triggerZone.length; i++) {
    triggerZone[i].addEventListener('mouseenter', (event) => {
      cursor.classList.remove('hidden')
      window.addEventListener('mousemove', (e) => {
        let cursorWidth = cursor.offsetWidth / 2
        let cursorHeight = cursor.offsetHeight / 2
        let mouseX = e.clientX
        let mouseY = e.clientY
        cursor.style.left = `${mouseX - cursorWidth}px`
        cursor.style.top = `${mouseY - cursorHeight}px`
      })
    })
    triggerZone[i].addEventListener('mouseleave', (event) => {
      cursor.classList.add('hidden')
    })
  }
  const triggerVideoZone = document.getElementsByTagName('video')
  for (let i = 0; i < triggerVideoZone.length; i++) {
    triggerVideoZone[i].addEventListener('mouseenter', (event) => {
      cursor.classList.remove('hidden')
      window.addEventListener('mousemove', (e) => {
        let cursorWidth = cursor.offsetWidth / 2
        let cursorHeight = cursor.offsetHeight / 2
        let mouseX = e.clientX
        let mouseY = e.clientY
        cursor.style.left = `${mouseX - cursorWidth}px`
        cursor.style.top = `${mouseY - cursorHeight}px`
      })
    })
    triggerVideoZone[i].addEventListener('mouseleave', (event) => {
      cursor.classList.add('hidden')
    })
  }
  window.addEventListener('scroll', (event) => {
    let scroll = trigger.getBoundingClientRect().top * -1
    if (scroll >= 300) {
      document.getElementsByTagName('nav')[0].classList.add('lol')
    } else {
      document.getElementsByTagName('nav')[0].classList.remove('lol')
    }
  })
})
