import countdown from 'countdown'
import CountdownNumber from './modules/CountdownNumber'
import Granim from 'granim'

const $ = document.querySelector.bind(document)

let data = {
  year: 2020,
  month: 4,
  day: 11
}
window.fetch('https://gist.githubusercontent.com/leoboyerbx/06ab5c985abcf78b27345b9acea59498/raw/decomptefinement_data.json').then(res => res.json()).then(res => {
  data = res
})

document.addEventListener('DOMContentLoaded', () => {
  const daysNumber = new CountdownNumber($('#days-number'))
  const hoursNumber = new CountdownNumber($('#hours-number'), 24)
  const minutesNumber = new CountdownNumber($('#minutes-number'), 60)
  const secondsNumber = new CountdownNumber($('#seconds-number'), 60)

  function onUpdateCounter (callback) {
    const timespan = countdown(null, new Date(data.year, data.month, data.day), countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS)
    const indexes = ['days', 'hours', 'minutes', 'seconds']
    indexes.forEach(index => {
      if (timespan[index] < 10) {
        timespan[index] = '0' + timespan[index]
      }
    })
    daysNumber.setValue(timespan.days)
    hoursNumber.setValue(timespan.hours)
    minutesNumber.setValue(timespan.minutes)
    secondsNumber.setValue(timespan.seconds)
  }

  setInterval(onUpdateCounter, 1000)

  // const hero = $('#hero')
  // const currentHour = new Date().getHours()
  // const gradientClass = currentHour < 5 ? 'night' : currentHour < 8 ? 'before-morning' : currentHour < 12 ? 'morning' : currentHour < 18 ? 'afternoon' : currentHour < 21 ? 'evening' : 'night'
  // hero.classList.add('gradient-' + gradientClass)

  onUpdateCounter()

  // Gradient background
  const background = new Granim({
    element: '#canvas-gradient',
    // name: 'canvas-gradient',
    // elToSetClassOn: '#hero',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    defaultStateName: 'before-morning',
    states: {
      'before-morning': {
        gradients: [
          ['#A43931', '#1D4350'],
          ['#646881', '#A43931'],
          ['#1D4350', '#646881']
        ],
        transitionSpeed: 5000
      },
      'violet-state': {
        gradients: [
          ['#9D50BB', '#6E48AA'],
          ['#4776E6', '#8E54E9']
        ],
        transitionSpeed: 5000
      },
      'orange-state': {
        gradients: [['#FF4E50', '#F9D423']],
        loop: false
      }
    }
  })
})
