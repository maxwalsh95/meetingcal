var calendarData = [
  {
    month: 'January',
    days: '31'
  },
  {
    month: 'February',
    days: '29'
  },
  {
    month: 'March',
    days: '31'
  },
  {
    month: 'April',
    days: '30'
  },
  {
    month: 'May',
    days: '31'
  },
  {
    month: 'June',
    days: '30'
  },
  {
    month: 'July',
    days: '31'
  },
  {
    month: 'August',
    days: '31'
  },
  {
    month: 'September',
    days: '31'
  },
  {
    month: 'October',
    days: '31'
  },
  {
    month: 'November',
    days: '30'
  },
  {
    month: 'December',
    days: '31'
  },
]

var weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

var calendar = document.querySelector('.calendar');
var calendarBody = calendar.querySelector('tbody');

var nextMonthBtn = calendar.querySelector('.js-calendar__next-month');
var prevMonthBtn = calendar.querySelector('.js-calendar__prev-month');

var selectedDate; 

var currentMonth = 0;

function addSelectedStyle() {
  let previouslySelected = document.querySelector('.calendar__day-btn--selected');

  if (previouslySelected !== null) { previouslySelected.classList.remove('calendar__day-btn--selected')};

  this.classList.add('calendar__day-btn--selected');
}

function setDate () {
  selectedDate = new Date(2020, parseInt(this.getAttribute('data-month')), parseInt(this.getAttribute('data-day')))
}

function createDays(month) {
  calendarBody.innerHTML = "";
  const chosenMonth = calendarData[month];

  const firstDayOfMonth = new Date(`${chosenMonth.month} 1, ${new Date().getFullYear()} 00:00:00`);
  
  if (month > 1) {
    var prevMonthFirst = calendarData[month - 1].days - (firstDayOfMonth.getDay() - 2);
  }

  else {
    var prevMonthFirst = calendarData[11].days - (firstDayOfMonth.getDay() -  2);
  }

  let prevMonthDays = 1;
  let currentMonthDays = 1;
  let nextMonthDays = 1;

  for (let i = 0; i < 6; i++) {
    let row = document.createElement('tr');
    
    for(let j = 0; j < 7; j++) {
      let newTd = document.createElement('td');
      let dayButton = document.createElement('button');
      dayButton.classList.add('calendar__day-btn')
      if (prevMonthDays < firstDayOfMonth.getDay()) {

        var dayButtonText = document.createTextNode(`${prevMonthFirst}`);
  
        newTd.appendChild(dayButton);
        dayButton.appendChild(dayButtonText);

        if(month > 1) {
          dayButton.setAttribute('data-month', month - 1)
        }
        else {
          dayButton.setAttribute('data-month', 11)
        }
        dayButton.setAttribute('data-day', prevMonthFirst)
        row.appendChild(newTd);

        prevMonthFirst++
        prevMonthDays++;
      }

      else if (currentMonthDays <= chosenMonth.days){
        var dayButtonText = document.createTextNode(`${currentMonthDays}`);

        dayButton.setAttribute('data-month', month)
        dayButton.setAttribute('data-day', currentMonthDays)

        currentMonthDays++
      }

      else {
        if(month < 11) {
          dayButton.setAttribute('data-month', month + 1)
        }
        else {
          dayButton.setAttribute('data-month', 0)
        }

        var dayButtonText = document.createTextNode(`${nextMonthDays}`);
        dayButton.setAttribute('data-day', nextMonthDays);

        nextMonthDays++

      }

      newTd.appendChild(dayButton);
      dayButton.appendChild(dayButtonText);
      dayButton.addEventListener('click', setDate);
      dayButton.addEventListener('click', addSelectedStyle);
      row.appendChild(newTd);
      calendarBody.appendChild(row);
      
    }
  }
}

function nextMonthBtnHandler() {
  if (currentMonth === 11) { 
    currentMonth = 0;
    setMonth(currentMonth);
    return;
  }

  setMonth(++currentMonth);

}

function prevMonthBtnHandler() {
  if (currentMonth === 0) { 
    currentMonth = 11;
    setMonth(currentMonth);
    return;
  }
  
  setMonth(--currentMonth);
}

export function setMonth(month) {
  const chosenMonth = calendarData[month];
  calendar.querySelector('.js-calendar__month').innerHTML = chosenMonth.month;

  createDays(month);
}

export function getDate() {
  return `${weekday[selectedDate.getDay()]} ${selectedDate.getDate()} ${calendarData[selectedDate.getMonth()].month}`;
}

export function init() {
  setMonth(currentMonth);

  nextMonthBtn.addEventListener('click', nextMonthBtnHandler);
  prevMonthBtn.addEventListener('click', prevMonthBtnHandler);
}