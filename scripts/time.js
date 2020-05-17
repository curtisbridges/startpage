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
}
