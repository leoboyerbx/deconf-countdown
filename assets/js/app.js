import countdown from 'countdown'
import CountdownNumber from './modules/CountdownNumber'

const $ = document.querySelector.bind(document)

function onUpdateCounter (callback) {
  const timespan = countdown(null, new Date(2020, 4, 11), countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS)
  const indexes = ['days', 'hours', 'minutes', 'seconds']
  indexes.forEach(index => {
    if (timespan[index] < 10) {
      timespan[index] = '0' + timespan[index]
    }
  })
  callback(timespan)
}

document.addEventListener('DOMContentLoaded', () => {
  const daysNumber = new CountdownNumber($('#days-number'))
  const hoursNumber = new CountdownNumber($('#days-number'))
  const minutesNumber = new CountdownNumber($('#days-number'))
  const secondsNumber = new CountdownNumber($('#days-number'))
  setInterval(() => {
    onUpdateCounter(timespan => {
      console.log(timespan.days, timespan.hours, timespan.minutes, timespan.seconds)

    })
  }, 1000)

  const hero = $('#hero')
  const currentHour = new Date().getHours()
  const gradientClass = currentHour < 5 ? 'night' : currentHour < 8 ? 'before-morning' : currentHour < 12 ? 'morning' : currentHour < 18 ? 'afternoon' : currentHour < 21 ? 'evening' : 'night'
  hero.classList.add('gradient-' + gradientClass)
})
