import countdown from 'countdown'
import CountdownNumber from './modules/CountdownNumber'
import Granim from 'granim'

const $ = document.querySelector.bind(document)

const data = {
  year: 2020,
  month: 4,
  day: 7,
  hour: 0,
  minute: 16
}
// window.fetch('https://gist.githubusercontent.com/leoboyerbx/06ab5c985abcf78b27345b9acea59498/raw/decomptefinement_data.json').then(res => res.json()).then(res => {
//   data = res
// })

document.addEventListener('DOMContentLoaded', () => {
  const daysNumber = new CountdownNumber($('#days-number'))
  const hoursNumber = new CountdownNumber($('#hours-number'), 24)
  const minutesNumber = new CountdownNumber($('#minutes-number'), 60)
  const secondsNumber = new CountdownNumber($('#seconds-number'), 60)

  function onUpdateCounter (callback) {
    const timespan = countdown(null, new Date(data.year, data.month, data.day, data.hour || null, data.minute || null), countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS)

    if (timespan.value >= 0) {
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
    } else {
      $('#countdown').classList.add('deconfined')
      $('#deconfined-message').classList.add('deconfined')
    }
  }

  setInterval(onUpdateCounter, 1000)

  // const hero = $('#hero')

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
      morning: {
        gradients: [
          ['#d3d31c', '#039bc9'],
          ['#FE4A49', '#d3d31c'],
          ['#039bc9', '#FE4A49']
        ],
        transitionSpeed: 5000
      },
      afternoon: {
        gradients: [
          ['#DC2430', '#7B4397'],
          ['#F18F01', '#DC2430'],
          ['#7B4397', '#F18F01']
        ],
        transitionSpeed: 5000
      },
      evening: {
        gradients: [
          ['#A43931', '#1D4350'],
          ['#231F20', '#A43931'],
          ['#1D4350', '#231F20']
        ],
        transitionSpeed: 5000
      },
      night: {
        gradients: [
          ['#283E51', '#4B79A1'],
          ['#2B193D', '#283E51'],
          ['#4B79A1', '#2B193D']
        ],
        transitionSpeed: 5000
      }
    }
  })
  const currentHour = new Date().getHours()
  const gradientClass = currentHour < 5 ? 'night' : currentHour < 8 ? 'before-morning' : currentHour < 12 ? 'morning' : currentHour < 18 ? 'afternoon' : currentHour < 21 ? 'evening' : 'night'
  background.changeState(gradientClass)
})
