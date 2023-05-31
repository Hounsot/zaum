import './index.css'
document.addEventListener('DOMContentLoaded', () => {
  let infoItems = document.querySelectorAll('.M_Info')
  console.log('hi')
  function createArrayById(dataIdValue, clickedElement) {
    let elements = document.querySelectorAll(
      "[data-link='" + dataIdValue + "']"
    )
    let newArray = []
    for (let i = 0; i < elements.length; i++) {
      if (elements[i] !== clickedElement) {
        newArray.push(elements[i])
      }
    }
    return newArray
  }
  infoItems.forEach((element) => {
    element.addEventListener('click', (ars) => {
      event.preventDefault()
      console.log(ars.target.href)
      element.classList.add('U_Active')
      let others = createArrayById('true', element)
      let i = 0
      const interval = setInterval(() => {
        others[i].classList.add('U_Hidden')
        i++
        if (i === others.length) {
          clearInterval(interval)
        }
      }, 250)
      setTimeout(function () {
        window.location = ars.target.href
      }, 250 * others.length)
    })
  })
  console.log('hi')
})
