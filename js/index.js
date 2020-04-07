import * as calendar from './modules/calendar.js';
import * as timePicker from './modules/timePicker.js';

calendar.init();
timePicker.init();

var makeAppointmentBtn = document.querySelector('.js-make-appointment-btn');
var appointmentInput = document.querySelector('.js-appointment-input');
var appointmentDetailsInput = document.querySelector('.js-appointment-form__details');
var appointments = document.querySelector('.js-appointments');


function makeAppointment() {
  if (appointmentInput.value.trim() === "") { return; }
  
  // date
  let newAppointment = document.createElement('div');
  newAppointment.classList.add('appointment');
  let date = document.createElement('span');
  date.classList.add('appointments__date');
  let dateText = document.createTextNode(calendar.getDate());
  date.appendChild(dateText);

  // time
  let time = document.createElement('span');
  time.classList.add('appointments__time');
  let timeText = document.createTextNode(`${timePicker.getHours()}:${timePicker.getMinutes()}`)
  time.appendChild(timeText);


  // append date and time to meeting time container div
  let meetingTime = document.createElement('div');
  meetingTime.classList.add('appointments__meeting-time');
  meetingTime.appendChild(date);
  meetingTime.appendChild(time);
  // appointment header
  let appointmentName = document.createTextNode(appointmentInput.value);

  let appointmentHeader = document.createElement('div');
  appointmentHeader.classList.add('appointments__header');


  // appointment details 
  let appointmentDetailsDiv = document.createElement('div');
  let appointmentDetails = document.createElement('p');
  let appointmentDetailsText = document.createTextNode(appointmentDetailsInput.value);

  
  appointmentHeader.appendChild(appointmentName);
  appointmentHeader.appendChild(meetingTime);
  newAppointment.appendChild(appointmentHeader);
  newAppointment.appendChild(appointmentDetailsDiv);
  newAppointment.appendChild(appointmentDetails);
  newAppointment.appendChild(appointmentDetailsText);


  newAppointment.classList.add('appointment');
  appointments.appendChild(newAppointment);

  appointmentDetailsInput.value = "";
  appointmentInput.value = "";
}

makeAppointmentBtn.addEventListener('click', makeAppointment);


