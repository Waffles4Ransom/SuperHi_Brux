document.addEventListener('DOMContentLoaded', () => {
  const animatedTags = document.querySelectorAll('h2, h3, p, section img, a.button')

  animatedTags.forEach(tag => { tag.getElementsByClassName.opacity = 0 })

  const fadeIn = function() {
    let delay = 0.25
    animatedTags.forEach(tag => {
      const tagTop = tag.getBoundingClientRect().top
      const tagBottom = tag.getBoundingClientRect().bottom

      if (tagTop < window.innerHeight && tagBottom > 0) {
        tag.style.animation = `fadein 1s ${delay}s both`
        delay += 0.25
      } else {
        tag.style.opacity = 0
        tag.style.animation = ''
      }
    })
  }

  //on load, run fadeIn
  fadeIn()

  //run on scroll
  document.addEventListener('scroll', () => fadeIn())

  //run on browser resize
  window.addEventListener('resize', () => fadeIn())
  
})