class CountdownNumber {
  constructor (element) {
    this.element = element
    this.previousValue = element.innerText
  }

  setValue (value) {
    if (parseInt(value) === parseInt(this.previousValue)) return false
    this.element.classList.remove('up', 'down', 'in')

    this.element.classList.add(value > this.previousValue ? 'up' : 'down')
    this.element.classList.add('out')
    setTimeout(() => {
      this.element.classList.remove('out')
      this.element.innerText = value
      this.previousValue = value > 0 ? value : 60
      this.element.classList.add('in')
    }, 250)
    return true
  }
}

export default CountdownNumber
