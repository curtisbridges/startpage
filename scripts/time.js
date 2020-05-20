window.addEventListener("load", updateTime, true);


function updateTime() {
    const currentDate = new Date();
    document.getElementById('greeting-header').innerHTML = getSalutation(currentDate, 'Curtis');

    const timeOptions = {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    }
    const timeString = currentDate.toLocaleTimeString('en-US', timeOptions);

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const dateString = currentDate.toLocaleDateString("en-US", dateOptions);

    // and then set the date and time elements of the page
    document.getElementById('date').innerHTML = `${dateString}`;
    document.getElementById('time').innerHTML = `${timeString}`;

    // and make sure to update it once per minute
    setTimeout(function () { updateTime() }, 60000);
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
