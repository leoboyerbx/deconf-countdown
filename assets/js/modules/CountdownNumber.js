class CountdownNumber {
  constructor (element, maxVal = null) {
    this.element = element
    this.previousValue = element.innerText
    this.maxVal = maxVal
  }

  setValue (value) {
    if (parseInt(value) === parseInt(this.previousValue)) return false
    this.element.classList.remove('up', 'down', 'in')

    this.element.classList.add(value > this.previousValue ? 'up' : 'down')
    this.element.classList.add('out')
    setTimeout(() => {
      this.element.classList.remove('out')
      this.element.innerText = value
      this.previousValue = value > 0 ? value : this.maxVal ? this.maxVal : value
      this.element.classList.add('in')
    }, 250)
    return true
  }
}

export default CountdownNumber
