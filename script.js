let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

let pickedDate;
let timecount;

let datePicker = document.getElementById("date-picker");
let submitBtn = document.getElementById("submit-btn");

submitBtn.onclick = function(){
    pickedDate = datePicker.value;

    if(!pickedDate){
        alert("Enter date");
        return false;
    }
    currentDateTime();
    timecount = setInterval(currentDateTime, 1000);
}

function currentDateTime(){
    let deadLineDate = new Date(Date.parse(pickedDate.replace(/-/g, "/")));
    let currentDateTime = new Date().getTime();
    let diff = (deadLineDate - currentDateTime);

    let myDays = days.innerHTML = Math.floor(diff / (24 * 60 * 60 * 1000));
    let myHours = hours.innerHTML = Math.floor(diff % (24 * 60 * 60 * 1000)/ (60 * 60 * 1000));
    let myMins = mins.innerHTML = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let mySecs = secs.innerHTML = Math.floor((diff % (1000 * 60)) / 1000);

    function lessThan10(num){
        if(num < 10){
            return "0" + num;
        }else{
            return "" + num;
        }
    }

    if(myDays > 0){
        days.innerHTML = lessThan10(myDays);
        hours.innerHTML = lessThan10(myHours);
        mins.innerHTML = lessThan10(myMins);
        secs.innerHTML = lessThan10(mySecs);
    }else{
        submitBtn.onclick = function(){
            alert("Invalid date or time");
            window.location.reload();
        }
            days.innerHTML = "00"
            hours.innerHTML = "00"
            mins.innerHTML = "00"
            secs.innerHTML = "00"
            
    }

}








