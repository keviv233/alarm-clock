const time = document.querySelectorAll(".time")[0];
const button = document.querySelectorAll(".set-alarm")[0];
const selectBtn = document.querySelectorAll(".setAlarm")[0];
const hour = document.querySelectorAll("#hour")[0];
const minute = document.querySelectorAll("#min")[0];
const meridiem = document.querySelectorAll("#meridiem")[0];
let alarmSong = new Audio("1.mp3");
let img = document.querySelectorAll(".container img")[0];
let juggle;

// functions =============================================================================================================

function alarmTime(hour, min, meridiem) {
    if (min < 10) {
        return `${hour}:0${min}:00 ${meridiem}`;
    }
    return `${hour}:${min}:00 ${meridiem}`;
}

// playing alarm here
let alarm;
function playAlarm() {
    alarm = alarmTime(hour.value, minute.value, meridiem.value);
    setInterval(() => {
        if (new Date().toLocaleTimeString() == alarm) {
            alarmSong.play();
            img.classList.add("ringing");
            setTimeout(() => {
                img.classList.remove("ringing");
                button.innerHTML = "Set Alarm";
                selectBtn.classList.remove("disable");
                return;
            }, alarmSong.duration * 1000);
        }
        if (alarm == null) {
            return;
        }
    }, 1000);
    
}

// ================================================================================================================

// current time
setInterval(() => {
    time.innerHTML = new Date().toLocaleTimeString();
}, 1000);

// set alarm
let position = 1;
button.addEventListener("click", () => {
    if (position == 1) {
        selectBtn.classList.add("disable");
        button.innerHTML = "Clear Alarm";
        playAlarm();
        position = 0;
    } else {
        button.innerHTML = "Set Alarm";
        selectBtn.classList.remove("disable");
        img.classList.remove("ringing");
        alarmSong.pause();
        alarm = null;
        position = 1;
    }
});
