// Global Variables
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//STEP 1
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function dispDaysInMonth() {
    let date1 = $('date3-1').value
    let dateObj1 = new Date(date1.replace(/-/g, '\/'))
    let year = date1.substring(0,4)
    let month = date1.substring(5,2)

    console.log(`[${dateObj1.toDateString()}] Number of Days in the month: ${daysInMonth(month, year)}`)
}

//STEP 2
function dispMonthName() {
    let date2 = $('date3-2').value
    let dateObj2 = new Date(date2.replace(/-/g, '\/'))
    let monthIdx = dateObj2.getMonth()

    console.log(`[${dateObj2.toDateString()}] Name of month: ${months[monthIdx]}`)
}

//STEP 3
function dispIsWeekend() {
    let date3 = $('date3-3').value
    let dateObj3 = new Date(date3.replace(/-/g, '\/'))
    let dayOfWeekIdx = dateObj3.getDay()

    if (dayOfWeekIdx === 6 || dayOfWeekIdx === 0) {
        console.log(`[${dateObj3.toDateString()}] does fall on a weekend`)
    } else {
        console.log(`[${dateObj3.toDateString()}] does not fall on a weekend`)
    }
}

//STEP 4
function dispPrevDayOfWeek() {
    let date4 = $('date3-4').value
    let dateObj4 = new Date(date4.replace(/-/g, '\/'))
    let dayOfWeekIdx = dateObj4.getDay()
    let prevDayOfWeekIdx = dayOfWeekIdx - 1 < 0 ? 6 : dayOfWeekIdx - 1

    console.log(`[${dateObj4.toDateString()}] previous Day of the Week: ${dayOfWeek[prevDayOfWeekIdx]}`)
}

//STEP 5
function dispFirstLetterCurrDOW() {
    let dateObj5 = new Date()
    let dayOfWeekIdx = dateObj5.getDay()
    console.log(`[${dateObj5.toDateString()}] first letter of the current Day of the Week: ${dayOfWeek[dayOfWeekIdx].substring(0,1)}`)
}

$('btn3-1').addEventListener('click', dispDaysInMonth)
$('btn3-2').addEventListener('click', dispMonthName)
$('btn3-3').addEventListener('click', dispIsWeekend)
$('btn3-4').addEventListener('click', dispPrevDayOfWeek)
$('btn3-5').addEventListener('click', dispFirstLetterCurrDOW)
