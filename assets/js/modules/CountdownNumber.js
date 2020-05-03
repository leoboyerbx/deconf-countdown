class CountdownNumber {
  constructor (element) {
    this.element = element
    this.previousValue = parseInt(element.innerText)
  }

  setValue (value) {
    if (value === this.previousValue) return false
    this.element.classList.remove('up', 'down', 'in')

    this.element.classList.add(value > this.previousValue ? 'up' : 'down')
    console.log(value > this.previousValue ? 'up' : 'down')
    this.element.classList.add('out')
    setTimeout(() => {
      this.element.classList.remove('out')
      this.element.innerText = value
      this.previousValue = parseInt(value)
      this.element.classList.add('in')
    }, 250)
    return true
  }
}

export default CountdownNumber
