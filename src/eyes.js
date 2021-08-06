document.addEventListener('DOMContentLoaded', () => {
  const irisLeft = document.querySelector('div.iris-left')
  const irisRight = document.querySelector('div.iris-right')

  const moveEye = function(tag, mouseX, mouseY) {
    // center of eye 
    const eyeMidX = tag.getBoundingClientRect().left
    const eyeMidY = tag.getBoundingClientRect().top

    // eye & mouse diff
    const diffX = mouseX - eyeMidX
    const diffY = mouseY - eyeMidY

    // Pythagorean theorem
    const diff = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
    
    //capped radius
    const radius = Math.min(3, diff)

    // tan
    const angle = Math.atan2(diffY, diffX)

    // capped version 
    const cappedX = radius * Math.cos(angle)
    const cappedY = radius * Math.sin(angle)

    const eyeTag = tag.querySelector('div')
    eyeTag.style.left = cappedX + 'px'
    eyeTag.style.top = cappedY + 'px'
  }

  document.addEventListener('mousemove', (e) => {
    moveEye(irisLeft, e.pageX, e.pageY)
    moveEye(irisRight, e.pageX, e.pageY)
  })

})