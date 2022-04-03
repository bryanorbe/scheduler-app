//initialize the app
$(document).ready(function(){
    loadSaved()
    boxColor()
    updateTime()
})

// //set time in 24h format
// var militaryTime = parseInt(moment().format('H'));
// console.log(militaryTime)

//set current date&time
function updateTime() {
    $("#now").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
};

var timer = setInterval(updateTime, 1000);


//add functionality to change current time to blue, future time to green & past time to red

function boxColor() {
    $("textarea").each(function () {
        var hourStr = (moment().format("H")) // use add function to test different times, 0 is the present
        var hour = Number(hourStr)
        calendarHourStr = this.dataset.timeslot;
        calendarHour = Number(calendarHourStr)
        // console.log("calendarHour "+ typeof(calendarHour))
        if (calendarHour > hour) {
            $(this).addClass("future")
            $(this).removeClass("past")
        }   else if (calendarHour === hour) {
            $(this).addClass("present");
        }   else {
           $(this).addClass("past")
        }
    })
}

//program the timeslots for each hour (x9)
$(".saveBtn9").click(function(){
    var textValue = $("#nine").val();
    localStorage.setItem("9", textValue)
})


$(".saveBtn10").click(function(){
    var textValue = $("#ten").val();
    localStorage.setItem("10", textValue)
})

$(".saveBtn11").click(function(){
    var textValue = $("#eleven").val();
    localStorage.setItem("11", textValue)
})

$(".saveBtn12").click(function(){
    var textValue = $("#twelve").val();
    localStorage.setItem("12", textValue)
})

$(".saveBtn13").click(function(){
    var textValue = $("#thirteen").val();
    localStorage.setItem("13", textValue)
})

$(".saveBtn14").click(function(){
    var textValue = $("#fourteen").val();
    localStorage.setItem("14", textValue)
})

$(".saveBtn15").click(function(){
    var textValue = $("#fifteen").val();
    localStorage.setItem("15", textValue)
})

$(".saveBtn16").click(function(){
    var textValue = $("#sixteen").val();
    localStorage.setItem("16", textValue)
})

$(".saveBtn17").click(function(){
    var textValue = $("#seventeen").val();
    localStorage.setItem("17", textValue)
})


//add a button to delete local storage
$("#deleteBtn").click(function(){
    localStorage.clear()
    location.reload()
})

//add function to fetch stored data
function loadSaved() {
    $("#nine").text(localStorage.getItem("9"))
    $("#ten").text(localStorage.getItem("10"))
    $("#eleven").text(localStorage.getItem("11"))
    $("#twelve").text(localStorage.getItem("12"))
    $("#thirteen").text(localStorage.getItem("13"))
    $("#fourteen").text(localStorage.getItem("14"))
    $("#fifteen").text(localStorage.getItem("15"))
    $("#sixteen").text(localStorage.getItem("16"))
    $("#seventeen").text(localStorage.getItem("17"))
}
