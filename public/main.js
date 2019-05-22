let hue = 290
let sat = 50
let light = 50

const setColor = () => {
  document.querySelector('.colorName').textContent = getHSL()
  const swatch = document.querySelector('.swatch')
  swatch.style.backgroundColor = getHSL()
  document.querySelector('.satcolor').style.backgroundColor = getHSL()
}
const getHSL = () => {
  return `hsla(${hue}, ${sat}%, ${light}%`
}

const main = () => {
  const hueInput = document.querySelector('input[name=hue]')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    console.log(getHSL())
    setColor()
  })

  const satInput = document.querySelector('input[name=sat]')
  satInput.addEventListener('input', () => {
    sat = satInput.value
    console.log(getHSL())
    setColor()
  })

  const lightInput = document.querySelector('input[name=light]')
  lightInput.addEventListener('input', () => {
    light = lightInput.value
    console.log(getHSL())
    setColor()
  })

  setColor()
}

document.addEventListener('DOMContentLoaded', main)
