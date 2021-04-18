var today = moment(today);
$("#currentDay").text(today.format("MMM Do, YYYY"));

var save = document.querySelector("save");
var eventText = document.querySelector("#eventText")

// save.addEventListener('click', function() {
//   localStorage.setItem("event", eventText);
// }

document.addEventListener("click", function () {
        var eventStored = document.getElementById("eventText").value;
        localStorage.setItem("eventText", eventStored);
        console.log(eventStored)
        
});

