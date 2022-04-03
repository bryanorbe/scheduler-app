//set military time
var militaryTime = parseInt(moment().format('H'));
console.log(militaryTime)

//add current date
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

//add functionality to change current time to blue, future time to green & past time to red

$("textarea").each(function() {
    var timeSlot = parseInt($(this).attr("data"));

    if (militaryTime === timeSlot) {
        $(this).addClass("present");
    } 
    
    if (militaryTime < timeSlot) {
        $(this).addClass("future");
    } 

    if (militaryTime > timeSlot) {
        $(this).addClass("past")
    }

})

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

