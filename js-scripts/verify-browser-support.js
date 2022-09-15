var datepicker = document.createElement('input');
var formElement = document.getElementById('thisform');
datepicker.setAttribute("type", "date");
formElement.appendChild(datepicker);
if (datepicker.type === "") {
    alert("Date input not supported") ;
}