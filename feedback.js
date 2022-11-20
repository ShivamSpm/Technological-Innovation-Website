var today = new Date();
var currDay = today.getDate();
var currMonth = today.getMonth()+1;
var currYear = today.getFullYear();

if(currDay < 10){
    currDay='0'+currDay
} 
if(currMonth < 10){
    currMonth='0'+currMonth
}

today = currYear+'-'+currMonth+'-'+currDay;
document.getElementById("birthday").setAttribute("max", today);