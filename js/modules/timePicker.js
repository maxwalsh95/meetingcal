var timePicker = document.querySelector('.js-time-picker');
var timePickerHours = timePicker.querySelector('.js-time-picker__hours')
var timePickerHoursSpan = timePickerHours.querySelector('.js-time-picker__hours-span');
var hoursNext = timePickerHours.querySelector('.js-time-picker__next-hours')
var hoursPrev = timePickerHours.querySelector('.js-time-picker__prev-hours')

var timePickerMinutes = timePicker.querySelector('.js-time-picker__minutes')
var timePickerMinutesSpan = timePickerMinutes.querySelector('.js-time-picker__minutes-span');
var minutesNext = timePickerMinutes.querySelector('.js-time-picker__next-mins')
var minutesPrev = timePickerMinutes.querySelector('.js-time-picker__prev-mins')

function increaseHours(){
  if(timePickerHoursSpan.innerText === '24') {
    timePickerHoursSpan.innerText = '0'
  }
  else {
    timePickerHoursSpan.innerText = parseInt(timePickerHoursSpan.innerText) + 1;
    timePickerHoursSpan.innerText = timePickerHoursSpan.innerText.padStart(2, '0');

  }
}

function decreaseHours(){
  if(timePickerHoursSpan.innerText === '00') {
    timePickerHoursSpan.innerText = '24'
  }
  else {
    timePickerHoursSpan.innerText = parseInt(timePickerHoursSpan.innerText) - 1;
    timePickerHoursSpan.innerText = timePickerHoursSpan.innerText.padStart(2, '0');

  }
}

function increaseMins() {
  if(parseInt(timePickerMinutesSpan.innerText) === 60) {
    timePickerMinutesSpan.innerText = '00'
  }
  else {
    timePickerMinutesSpan.innerText = parseInt(timePickerMinutesSpan.innerText) + 1;
    timePickerMinutesSpan.innerText = timePickerMinutesSpan.innerText.padStart(2, '0');

  }
}

function decreaseMins() {
  if(parseInt(timePickerMinutesSpan.innerText) === 0) {
    timePickerMinutesSpan.innerText = '60'
  }
  else {
    timePickerMinutesSpan.innerText = parseInt(timePickerMinutesSpan.innerText) - 1;
    timePickerMinutesSpan.innerText = timePickerMinutesSpan.innerText.padStart(2, '0');
  }
}

export function getHours() {
  return timePickerHoursSpan.innerText
}

export function getMinutes() {
  return timePickerMinutesSpan.innerText
}

export function init() {
  hoursNext.addEventListener('click', increaseHours);
  hoursPrev.addEventListener('click', decreaseHours);
  minutesNext.addEventListener('click', increaseMins);
  minutesPrev.addEventListener('click', decreaseMins);
}
