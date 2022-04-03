//set military time
var militaryTime = parseInt(moment().format('H'));
console.log(militaryTime)

//add current date
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

//program the timeslots for each hour (x9)
$("button").on("click", function(){
    var currentBox9 = parseInt($(this).parent().attr("data"));
    var currentMessage9 = $("#nine").val();

    localStorage.setItem("currentBox9", currentMessage9)
//     console.log(currentBox9, currentMessage9)
// })
    $("#nine").append(localStorage.getItem("currentBox9"));

$("button").on("click", function(){
    var currentBox10 = parseInt($(this).parent().attr("data"));
    var currentMessage10 = $("#ten").val();

    localStorage.setItem("currentBox10", currentMessage10)
    // console.log(currentBox10, currentMessage10)
})
    $("#ten").append(localStorage.getItem("currentBox10"));
    
$("button").on("click", function(){
    var currentBox11 = parseInt($(this).parent().attr("data"));
    var currentMessage11 = $("#eleven").val();

    localStorage.setItem("currentBox11", currentMessage11)
    // console.log(currentBox11, currentMessage11)
})
    $("#eleven").append(localStorage.getItem("currentBox11"));

$("button").on("click", function(){
    var currentBox12 = parseInt($(this).parent().attr("data"));
    var currentMessage12 = $("#twelve").val();

    localStorage.setItem("currentBox12", currentMessage12)
    // console.log(currentBox12, currentMessage12)
})
    $("#twelve").append(localStorage.getItem("currentBox9"));
    
$("button").on("click", function(){
    var currentBox13 = parseInt($(this).parent().attr("data"));
    var currentMessage13 = $("#thirteen").val();

    localStorage.setItem("currentBox13", currentMessage13)
    // console.log(currentBox13, currentMessage13)
})
    $("#thirteen").append(localStorage.getItem("currentBox13"));

$("button").on("click", function(){
    var currentBox14 = parseInt($(this).parent().attr("data"));
    var currentMessage14 = $("#fourteen").val();

    localStorage.setItem("currentBox14", currentMessage14)
    // console.log(currentBox14, currentMessage14)
})
    $("#fourteen").append(localStorage.getItem("currentBox14"));

$("button").on("click", function(){
    var currentBox15 = parseInt($(this).parent().attr("data"));
    var currentMessage15 = $("#fifteen").val();

    localStorage.setItem("currentBox15", currentMessage15)
    // console.log(currentBox15, currentMessage15)
})
    $("#fifteen").append(localStorage.getItem("currentBox15"));

$("button").on("click", function(){
    var currentBox16 = parseInt($(this).parent().attr("data"));
    var currentMessage16 = $("#nine").val();

    localStorage.setItem("currentBox16", currentMessage16)
    // console.log(currentBox16, currentMessage16)
})
    $("#sixteen").append(localStorage.getItem("currentBox16"));
    
$("button").on("click", function(){
    var currentBox17 = parseInt($(this).parent().attr("data"));
    var currentMessage17 = $("#nine").val();

    localStorage.setItem("currentBox17", currentMessage17)
    // console.log(currentBox17, currentMessage17)
})
    $("#seventeen").append(localStorage.getItem("currentBox17"));

})

//add functionality to change current time to green, future time to blue & past time to red

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