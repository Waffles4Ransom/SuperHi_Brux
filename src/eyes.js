document.addEventListener('DOMContentLoaded', () => {
  const irisLeft = document.querySelector('div.iris-left')
  const irisRight = document.querySelector('div.iris-right')

  const moveEye = function(tag, mouseX, mouseY) {
    tag.style.left = mouseX + 'px'
    tag.style.top = mouseY + 'px'
  }

  document.addEventListener('mousemove', (e) => {
    moveEye(irisLeft, e.pageX, e.pageY)
    moveEye(irisRight, e.pageX, e.pageY)
  })

})