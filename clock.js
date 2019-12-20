const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector(".js-title");

function getTime(){
    const date = new Date();
    const years = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayText = textDay(date.getDay());
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${years}-${
        month < 10 ? `0${month}` : month
    }-${
        day < 10 ? `0${day}` : day
    } ${dayText} ${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function textDay(day){
    if(day===0){
        return "(일)"
    } else if (day === 1){
        return "(월)"
    } else if (day === 2){
        return "(화)"
    } else if (day === 3){
        return "(수)"
    } else if (day === 4){
        return "(목)"
    } else if (day === 5){
        return "(금)"
    } else if (day === 6){
        return "(토)"
    } else {
        return " "
    }
}
function init() {
    setInterval(getTime,1000);
}

init()