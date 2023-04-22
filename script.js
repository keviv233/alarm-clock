const time = document.querySelectorAll('.time')[0]
const button = document.querySelectorAll('.set-alarm')[0]
const selectBtn = document.querySelectorAll('.setAlarm')[0]
const hour = document.querySelectorAll('#hour')[0]
const minute = document.querySelectorAll('#min')[0]
const meridiem = document.querySelectorAll('#meridiem')[0]
let alarmSong = new Audio('1.mp3')
let img = document.querySelectorAll('.container img')[0]
let juggle;

// functions =============================================================================================================

function currentTime() {
    let curTime = new Date().toLocaleTimeString()
    let arr = curTime.split(' ')

    if (arr[1] == 'am') {
        return `${arr[0]} AM`
    } else return `${arr[0]} PM`
}

function alarmTime(hour, min, meridiem) {
    if (min < 10) {
        return `${hour}:0${min}:00 ${meridiem}`
    }
    return `${hour}:${min}:00 ${meridiem}`
}

// playing alarm here
function playAlarm(num) {
    vivek = num;
    setInterval(() => {
        if (currentTime() == alarmTime(hour.value, minute.value, meridiem.value)) {
            if (vivek == 1) {
                console.log(num)
                alarmSong.play();
                img.classList.add('ringing')
                setTimeout(() => {
                    img.classList.remove('ringing')
                    button.innerHTML = 'Set Alarm';
                    selectBtn.classList.remove('disable');
                    return;
                }, alarmSong.duration * 1000);
                vivek = null;
            }
            else if (vivek == 0) {
                console.log(num)
                alarmSong.pause();
                img.classList.remove('ringing')
                vivek = null;
                return;
            }
        }
    }, 1000);
}

// ================================================================================================================

// current time
setInterval(() => {
    time.innerHTML = currentTime();
}, 1000);


// set alarm
let position = 1;
button.addEventListener('click', () => {
    if (position == 1) {
        selectBtn.classList.add('disable');
        button.innerHTML = 'Clear Alarm';
        playAlarm(position);
        position = 0;
    } else {
        button.innerHTML = 'Set Alarm';
        selectBtn.classList.remove('disable');
        playAlarm(position)
        position = 1;
    }
})
