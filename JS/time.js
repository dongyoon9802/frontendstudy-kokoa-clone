const outputTime = document.querySelector("span#time");

function getTime(){
    const getHourMinute = new Date();
    const hours = String(getHourMinute.getHours()).padStart(2,"0");
    const minutes = String(getHourMinute.getMinutes()).padStart(2,"0");
    outputTime.innerText=`${hours}:${minutes}`
}
getTime();
setInterval(getTime,1000);