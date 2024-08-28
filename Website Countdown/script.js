let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
console.log(dayBox,hrBox,minBox,secBox);

//Format: Date (year, month, day, hour, minute)
//Year = counter from 0~11

let endDate = new Date(2024, 9, 27, 21, 30);

//ouput in millisecond

let endTime = endDate.getTime();
function countdown(){
    let todayDate = new Date();
    let todayTime = todayDate.getTime();

    let remainingTime = endTime - todayTime;
    // 60 sec = 1000millisec
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    //format single digit number
    let addZeroes = num => num < 10 ? `0${num}` : num;

    //if end date is before today date
    if(endTime < todayTime){
        document.querySelector(".countdown").
        innerHTML = '<h1>Countdown had expired!</h1>';
    }
    //else if after
    else{
        //calculation of date
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
        console.log(daysLeft, hrsLeft, minsLeft, secsLeft);

        //display value
        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
    }
}
let i = setInterval(countdown, 1000);
countdown();
