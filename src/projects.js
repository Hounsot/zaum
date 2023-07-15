import './index.css'
document.addEventListener('DOMContentLoaded', () => {
  let subInfoPoints = document.querySelectorAll('.U_Hidden')
  let delayInMilliseconds = 100
  let index = 1
  //   function myLoop(params) {
  //     setTimeout(function () {
  //       //   subInfoPoints[index].classList.remove('U_Hidden')
  //       console.log(index)
  //       index++
  //       if (index <= subInfoPoints.length) {
  //         myLoop
  //       }
  //     }, 3000)
  //   }
  //   myLoop(index)
  //   setInterval(() => {
  //     console.log(index)
  //     index++
  //   }, 100)
  let i = 0
  const interval = setInterval(() => {
    console.log(subInfoPoints[i])
    subInfoPoints[i].classList.remove('U_Hidden')
    i++
    if (i === subInfoPoints.length) {
      clearInterval(interval)
    }
  }, 250)
})
