window.addEventListener("load", updateTime, true);


function updateTime() {
    const currentDate = new Date();

    const timeOptions = {
        hour12: false
    }
    const timeString = currentDate.toLocaleTimeString('en-US', timeOptions);

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const dateString = currentDate.toLocaleDateString("en-US", dateOptions);

    document.getElementById('date-time').innerHTML = `${timeString} ${dateString}`;
    setTimeout(function () { updateTime() }, 60000);

    document.getElementById('greeting-header').innerHTML = getSalutation(currentDate, 'Curtis');


}

function getSalutation(currentDate = new Date(), name = 'Curtis') {
    const hour = currentDate.getHours();
    if (hour < 12) {
        return `Good morning, ${name}`;
    } else if (hour < 16) {
        return `Good afternoon, ${name}`;
    } else if (hour < 24) {
        return `Good evening, ${name}`;
    } else {
        return `Hello, ${name}`;
    }
}
