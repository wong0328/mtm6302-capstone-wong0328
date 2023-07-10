// var datePicker = createDatePicker();
// document.body.appendChild(datePicker);
var currentDate = new Date().toISOString().slice(0, 10);
console.log(document.getElementById('date-input'))
document.getElementById('date-input').max=currentDate


