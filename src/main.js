window.addEventListener('DOMContentLoaded', (event) => {
  const trigger = document.getElementsByTagName('body')[0]
  const cursor = document.getElementById('cursor')
  const emptyCursor = document.getElementsByClassName('error')[0]
  const triggerZone = document.getElementsByTagName('img')
  document.getElementsByClassName('cursorText')[1].style.color =
    'rgb(255, 66, 142)'
  document.getElementsByClassName('cursorText')[1].style.textDecoration = 'none'
  for (let i = 0; i < triggerZone.length; i++) {
    triggerZone[i].addEventListener('mouseenter', (event) => {
      let attributeCheck = triggerZone[i].parentElement.hasAttribute('href')
      if (attributeCheck) {
        document.getElementById('cursorGround').style.mixBlendMode =
          'difference'
        cursor.classList.remove('hidden')
        window.addEventListener('mousemove', (e) => {
          let cursorWidth = cursor.offsetWidth / 2
          let cursorHeight = cursor.offsetHeight / 2
          let mouseX = e.clientX
          let mouseY = e.clientY
          cursor.style.left = `${mouseX - cursorWidth}px`
          cursor.style.top = `${mouseY - cursorHeight}px`
        })
      } else {
        document.getElementById('cursorGround').style.mixBlendMode = 'normal'
        emptyCursor.classList.remove('hiddenError')
        window.addEventListener('mousemove', (e) => {
          let cursorWidth = emptyCursor.offsetWidth / 2
          let cursorHeight = emptyCursor.offsetHeight / 2
          let mouseX = e.clientX
          let mouseY = e.clientY
          emptyCursor.style.left = `${mouseX - cursorWidth}px`
          emptyCursor.style.top = `${mouseY - cursorHeight}px`
        })
      }
    })
    triggerZone[i].addEventListener('mouseleave', (event) => {
      cursor.classList.add('hidden')
    })
    triggerZone[i].addEventListener('mouseleave', (event) => {
      emptyCursor.classList.add('hiddenError')
    })
  }
  const triggerVideoZone = document.getElementsByTagName('video')
  for (let i = 0; i < triggerVideoZone.length; i++) {
    let attributeCheck = triggerVideoZone[i].parentElement.hasAttribute('href')
    triggerVideoZone[i].addEventListener('mouseenter', (event) => {
      if (attributeCheck) {
        document.getElementById('cursorGround').style.mixBlendMode =
          'difference'
        cursor.classList.remove('hidden')
        window.addEventListener('mousemove', (e) => {
          let cursorWidth = cursor.offsetWidth / 2
          let cursorHeight = cursor.offsetHeight / 2
          let mouseX = e.clientX
          let mouseY = e.clientY
          cursor.style.left = `${mouseX - cursorWidth}px`
          cursor.style.top = `${mouseY - cursorHeight}px`
        })
      } else {
        document.getElementById('cursorGround').style.mixBlendMode = 'normal'
        emptyCursor.classList.remove('hiddenError')
        window.addEventListener('mousemove', (e) => {
          let cursorWidth = emptyCursor.offsetWidth / 2
          let cursorHeight = emptyCursor.offsetHeight / 2
          let mouseX = e.clientX
          let mouseY = e.clientY
          emptyCursor.style.left = `${mouseX - cursorWidth}px`
          emptyCursor.style.top = `${mouseY - cursorHeight}px`
        })
      }
    })
    triggerVideoZone[i].addEventListener('mouseleave', (event) => {
      cursor.classList.add('hidden')
    })
    triggerVideoZone[i].addEventListener('mouseleave', (event) => {
      emptyCursor.classList.add('hiddenError')
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
